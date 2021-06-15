import React, { useEffect } from 'react';
import { DeleteButtonSmall, Column, Row, FieldBox, Divider } from '../';
import autosave from '../../utils/autosave';
import { useMutation } from '@apollo/client';

import { UPDATE_TERM, REMOVE_TERM } from '../../data/mutations';
import { toaster } from '../../utils/toaster';

//TODO: This component is bullshit, I got stuck in a massive loop and I hate it so it needs redoing by someone else.
export default function PaymentTerm({
  contract,
  setContract,
  paymentTerm,
  index,
  calculatePercent,
  setPercentLock,
  setDetailsLock,
}) {
  const [values, setValues] = React.useState({
    _id: 'new',
    percent: 0,
    description: '',
    contractId: '',
  });
  useEffect(() => {
    setValues({ ...paymentTerm, contractId: contract._id });
  }, [paymentTerm, contract]);
  const [updateTerm] = useMutation(
    UPDATE_TERM,
    {
      variables: {
        _id: values._id,
        contractId: contract._id,
        percent: values.percent,
        description: values.description,
      },
    },
    {
      onCompleted() {
        toaster('Autosave');
      },
    }
  );
  const [removeTerm] = useMutation(
    REMOVE_TERM,
    {
      variables: {
        _id: values._id,
      },
    },
    {
      onCompleted() {
        toaster('Deleted');
        const updatedArray = contract.paymentTerms.filter(
          (item) => item._id !== values._id
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
      },
    }
  );
  return (
    <Column>
      <Row>
        <FieldBox
          value={values.percent ? values.percent.toString() : '0'}
          title={contract.currency}
          titlePos="right"
          maxLength={10}
          onChangeEvent={(e) => {
            const messageToInt = parseInt(e === '' ? 0 : e);

            let paymentTermsArray = [...contract.paymentTerms];
            paymentTermsArray[index].percent = messageToInt;

            const percentLockCalc = calculatePercent(
              paymentTermsArray,
              contract.cost,
              contract.currency
            );

            setDetailsLock(false);
            setPercentLock(percentLockCalc);

            percentLockCalc.sum >= 0 &&
              autosave(() => {
                updateTerm();
              });

            setValues({ ...values, percent: messageToInt });
          }}
          replaceMode="number"
          placeholder="Example: 20"
          info=""
          warning=""
          size="xs"
          width={50}
        />
        <FieldBox
          value={values.description}
          title=""
          maxLength={86}
          onChangeEvent={(e) => {
            setDetailsLock(false);
            setValues({ ...values, description: e });
            let paymentTermsArray = [...contract.paymentTerms];
            paymentTermsArray[index].description = e;

            setContract({ ...contract, paymentTerms: paymentTermsArray });
            autosave(() => {
              updateTerm();
            });
          }}
          replaceMode="loose"
          placeholder="Examples: Deposit | In 4 weeks | Upon delivery"
          info="Split the total payment into pre-determined milestones, example: 50% deposit, 50% upon completion"
          warning=""
          size="s"
        />

        <div style={{ marginLeft: 10 }}>
          <DeleteButtonSmall
            mutation={removeTerm}
            disabled={values._id === 'new' ? true : false}
          />
        </div>
      </Row>

      <Divider />
    </Column>
  );
}
