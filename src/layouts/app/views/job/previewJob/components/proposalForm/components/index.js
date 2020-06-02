import React, { useEffect } from 'react';

import { TextField, Typography } from '@material-ui/core';
import autosave from '../../../../../../../../utils/autosave';

export default function PaymentTerm({
  contract,
  setContract,
  term,
  index,
  mutation,
  availablePercent,
  percentLock,
}) {
  const [values, setValues] = React.useState({
    percent: '',
    description: '',
  });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      <Typography>The Creative shall receive </Typography>
      <TextField
        id={'deposit'}
        value={values.percent}
        label={`${availablePercent.toString()}%`}
        inputProps={{ maxLength: availablePercent.toString().length }}
        onChange={(e) => {
          let message = e.target.value.replace(/[^0-9]/gi, '');
          const messageToInt = parseInt(message);

          if (messageToInt > availablePercent) {
            message = availablePercent.toString();
          }
          if (messageToInt < 0) {
            message = '0';
          }
          setValues({ ...values, percent: message });
          !percentLock && autosave(mutation, 'notes');
          let paymentTermsArray = [...contract.paymentTerms];
          paymentTermsArray[index].percent = message;
          setContract({ ...contract, paymentTerms: [...paymentTermsArray] });
        }}
        multiline
        margin="normal"
        variant="outlined"
        style={{
          marginRight: 10,
          marginLeft: 10,
          width: 70,
          marginTop: 8,
        }}
      />
      <Typography>upon </Typography>
      <TextField
        id={'item'}
        value={values.description}
        label={`Completion Term ${
          values.description ? `(${86 - values.description.length})` : ''
        }`}
        inputProps={{ maxLength: 86 }}
        onChange={(e) => {
          autosave(mutation, 'item');
          setValues({ ...values, description: e.target.value });
          //  setContract({ ...contract, paymentTerms: [] });
        }}
        multiline
        margin="normal"
        variant="outlined"
        style={{ marginLeft: 10, marginTop: 8 }}
      />
    </div>
  );
}
