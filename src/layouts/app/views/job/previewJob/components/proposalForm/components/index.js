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
}) {
  const [values, setValues] = React.useState({
    percentage: '',
    description: '',
  });

  useEffect(() => {
    setValues({
      percentage: availablePercent.toString(),
      description: '',
    });
  }, [availablePercent]);

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
        value={values.percentage}
        label={`100% ${
          values.percentage ? `(${3 - values.percentage.length})` : ''
        }`}
        inputProps={{ maxLength: 3 }}
        onChange={(e) => {
          let message = e.target.value.replace(/[^0-9]/gi, '');
          const messageToInt = parseInt(message);

          if (messageToInt > availablePercent) {
            message = availablePercent.toString();
          }
          if (messageToInt < 0) {
            message = '0';
          }

          console.log(message.length);
          setValues({ ...values, percentage: message });
          autosave(mutation, 'notes');
          let paymentTermsArray = [...contract.paymentTerms];
          paymentTermsArray[index].percentage = message;
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
