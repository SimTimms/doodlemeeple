import React, { useEffect } from 'react';
import { DeleteButtonSmall } from '../../../../../../../../components';
import { TextField, Typography } from '@material-ui/core';
import autosave from '../../../../../../../../utils/autosave';
import { Mutation } from 'react-apollo';
import { useStyles } from './styles';
import {
  UPDATE_TERM,
  REMOVE_TERM,
} from '../../../../../../../../data/mutations';
import { toaster } from '../../../../../../../../utils/toaster';

//TODO: This component is bullshit, I got stuck in a massive loop and I hate it so it needs redoing by someone else.
export default function PaymentTerm({
  contract,
  setContract,
  paymentTerm,
  index,
  availablePercent,
  calculatePercent,
  setPercentLock,
  setSaveLock,
  setDetailsLock,
}) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    id: 'new',
    percent: 0,
    description: '',
    contractId: '',
  });

  useEffect(() => {
    setValues({ ...paymentTerm, contractId: contract.id });
  }, [paymentTerm, contract]);

  return (
    <Mutation
      mutation={UPDATE_TERM}
      variables={{
        id: values.id,
        paymentTerm: {
          contractId: contract.id,
          percent: values.percent,
          description: values.description,
        },
      }}
      onCompleted={(data) => {
        toaster('Autosave');
      }}
    >
      {(mutation, { loading }) => {
        return (
          <div className={classes.root}>
            <Typography variant="body1" style={{ width: 200 }}>{`3.${
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

                let paymentTermsArray = [...contract.paymentTerms];
                paymentTermsArray[index].percent = messageToInt;
                const percentLockCalc = calculatePercent(
                  paymentTermsArray,
                  contract.cost,
                  contract.currency
                );
                if (percentLockCalc.sum >= 0) {
                  setDetailsLock(false);
                  setPercentLock(percentLockCalc);
                  percentLockCalc.sum >= 0
                    ? setSaveLock(false)
                    : setSaveLock(true);

                  setValues({ ...values, percent: messageToInt });

                  percentLockCalc.sum >= 0 &&
                    autosave(() => {
                      mutation();
                    });
                }
              }}
              multiline
              margin="normal"
              variant="outlined"
              className={classes.wrapper}
            />
            <Typography style={{ width: 60 }}>% upon</Typography>
            <TextField
              id={'item'}
              value={values.description}
              label={`Completion Term ${
                values.description ? `(${86 - values.description.length})` : ''
              }`}
              inputProps={{ maxLength: 86 }}
              onChange={(e) => {
                setDetailsLock(false);
                const description = e.target.value.substring(0, 86);
                setValues({ ...values, description: description });
                let paymentTermsArray = [...contract.paymentTerms];
                paymentTermsArray[index].description = description;

                autosave(() => {
                  mutation();
                });
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
                const updatedArray = contract.paymentTerms.filter(
                  (item) => item.id !== values.id
                );
                const percentLockCalc = calculatePercent(
                  updatedArray,
                  contract.cost,
                  contract.currency
                );
                setPercentLock(percentLockCalc);
                setContract({
                  ...contract,
                  paymentTerms: [...updatedArray],
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
