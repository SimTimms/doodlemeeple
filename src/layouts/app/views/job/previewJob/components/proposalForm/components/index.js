import React, { useEffect } from 'react';
import { DeleteButtonSmall } from '../../../../../../../../components';
import { TextField, Typography } from '@material-ui/core';
import autosave from '../../../../../../../../utils/autosave';
import { Mutation } from 'react-apollo';
import {
  CREATE_TERM,
  UPDATE_TERM,
  REMOVE_TERM,
} from '../../../../../../../../data/mutations';
import { toaster } from '../../../../../../../../utils/toaster';

export default function PaymentTerm({
  contract,
  setContract,
  paymentTerm,
  index,
  availablePercent,
  percentLock,
}) {
  const [values, setValues] = React.useState({
    id: 'new',
    percent: 0,
    description: '',
    contractId: '',
  });

  const [wait, setWait] = React.useState(false);

  useEffect(() => {
    values !== paymentTerm && setValues(paymentTerm);
  }, [values, paymentTerm]);

  console.log(values);
  return wait ? (
    'ADs'
  ) : (
    <Mutation
      mutation={values.id === 'new' ? CREATE_TERM : UPDATE_TERM}
      variables={{
        id: values.id,
        paymentTerm: {
          percent: values.percent,
          description: values.description,
          contractId: contract.id,
        },
      }}
      onCompleted={(data) => {
        toaster('Saved');
        setWait(false);
        const updatedId =
          values.id === 'new' ? data.createPaymentTerm : data.updatePaymentTerm;
        setValues({ ...values, id: updatedId });
      }}
    >
      {(mutation, { loading }) => {
        return (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              width: '100%',
              paddingLeft: 30,
              paddingRight: 30,
              boxSizing: 'border-box',
            }}
          >
            {values.id}
            <Typography>{`Clause 3.${
              index + 1
            }: The Creative shall receive `}</Typography>
            <TextField
              id={'deposit'}
              value={values.percent}
              label={`${availablePercent.toString()}%`}
              inputProps={{ maxLength: availablePercent.toString().length }}
              onChange={(e) => {
                let message = e.target.value.replace(/[^0-9]/gi, '');
                message = message === '' ? '0' : message;
                const messageToInt = parseInt(message);
                setValues({ ...values, percent: messageToInt });
                let paymentTermsArray = [...contract.paymentTerms];
                paymentTermsArray[index].percent = messageToInt;
                setContract({
                  ...contract,
                  paymentTerms: [...paymentTermsArray],
                });
                percentLock.status && autosave(mutation, 'item');
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
                const description = e.target.value;
                setValues({ ...values, description: description });
                let paymentTermsArray = [...contract.paymentTerms];
                paymentTermsArray[index].description = description;
                setContract({
                  ...contract,
                  paymentTerms: [...paymentTermsArray],
                });
                autosave(mutation, 'item');
              }}
              multiline
              margin="normal"
              variant="outlined"
              style={{ marginLeft: 10, marginTop: 8, marginRight: 10 }}
            />
            <Mutation
              mutation={REMOVE_TERM}
              variables={{
                id: values.id,
              }}
              onCompleted={(data) => {
                toaster('Deleted');

                setContract({
                  ...contract,
                  paymentTerms: [
                    ...contract.paymentTerms.filter(
                      (item) => item.id !== values.id,
                    ),
                  ],
                });
              }}
            >
              {(mutation) => {
                return (
                  <DeleteButtonSmall
                    mutation={mutation}
                    disabled={values.id === 'new' ? true : false}
                  />
                );
              }}
            </Mutation>
          </div>
        );
      }}
    </Mutation>
  );
}
