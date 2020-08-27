import React, { useEffect } from 'react';
import {
  DeleteButtonSmall,
  Column,
  Row,
  FieldBox,
  Divider,
} from '../../../../../../../../components';
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
  percentLock,
  saveLock,
  setSaveLock,
  setDetailsLock,
}) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    _id: 'new',
    percent: 0,
    description: '',
    contractId: '',
  });

  useEffect(() => {
    setValues({ ...paymentTerm, contractId: contract._id });
  }, [paymentTerm, contract]);

  return (
    <Mutation
      mutation={UPDATE_TERM}
      variables={{
        _id: values._id,
        contractId: contract._id,
        percent: values.percent,
        description: values.description,
      }}
      onCompleted={(data) => {
        toaster('Autosave');
      }}
    >
      {(mutation, { loading }) => {
        return (
          <Column>
            <Row>
              <FieldBox
                value={values.percent ? values.percent.toString() : '0'}
                title="Percent:"
                maxLength={3}
                onChangeEvent={(e) => {
                  const messageToInt = parseInt(e === '' ? 0 : e);
                  console.log(messageToInt);
                  let paymentTermsArray = [...contract.paymentTerms];
                  paymentTermsArray[index].percent = messageToInt;

                  const percentLockCalc = calculatePercent(paymentTermsArray);
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
                replaceMode="number"
                placeholder="Example: 20"
                info=""
                warning=""
                size="xs"
              />{' '}
              <Mutation
                mutation={REMOVE_TERM}
                variables={{
                  _id: values._id,
                }}
                onCompleted={(data) => {
                  toaster('Deleted');
                  const updatedArray = contract.paymentTerms.filter(
                    (item) => item._id !== values._id
                  );
                  const percentLockCalc = calculatePercent(updatedArray);
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
                      disabled={values._id === 'new' ? true : false}
                    />
                  );
                }}
              </Mutation>
            </Row>

            <FieldBox
              value={values.description}
              title="Clause"
              maxLength={86}
              onChangeEvent={(e) => {
                setDetailsLock(false);
                setValues({ ...values, description: e });
                let paymentTermsArray = [...contract.paymentTerms];
                paymentTermsArray[index].description = e;
                autosave(() => {
                  mutation();
                });
              }}
              replaceMode="loose"
              placeholder="Example: starting the project"
              info="Split the total payment into pre-determined milestones, example: 50% upfront, 50% upon completion"
              warning=""
              size="s"
            />
            <Divider />
          </Column>
        );
      }}
    </Mutation>
  );
}
