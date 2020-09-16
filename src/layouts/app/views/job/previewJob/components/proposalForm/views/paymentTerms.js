import React from 'react';
import {
  FieldTitle,
  Divider,
  Column,
} from '../../../../../../../../components';
import { Typography } from '@material-ui/core';
import { AddPaymentTerm } from './components';
import PaymentTerm from '../components';

export default function PaymentTerms({
  contract,
  setContract,
  setPercentLock,
  percentLock,
  calculatePercent,
  setSaveLock,
  setDetailsLock,
  detailsLock,
  menu,
}) {
  function addPaymentTerm(newValue) {
    setContract({
      ...contract,
      paymentTerms: [...contract.paymentTerms, { ...newValue }],
    });
  }

  return (
    <Column>
      <FieldTitle
        name="2. Payment Milestones"
        description="Go into detail about how and when you would like to be paid, be very specific about your terms to decrease the chance of a dispute further down the line."
        warning="Example: The Creative shall receive 100 GBP upon commencement of the project, The Creative shall receive 200 GBP upon delivery of 10 full resolution SVG files, the Creative shall receive 500GBP upon delivery of all remaining specified items"
        inline={true}
      />
      <Divider />
      {contract.paymentTerms.map((paymentTerm, index) => (
        <PaymentTerm
          contract={contract}
          setContract={setContract}
          paymentTerm={paymentTerm}
          index={index}
          key={`term_${index}`}
          calculatePercent={calculatePercent}
          setPercentLock={setPercentLock}
          setSaveLock={setSaveLock}
          setDetailsLock={setDetailsLock}
        />
      ))}
      <AddPaymentTerm
        contractId={contract._id}
        setDetailsLock={setDetailsLock}
        detailsLock={detailsLock}
        percentLock={percentLock}
        addPaymentTerm={addPaymentTerm}
      />
      {percentLock.message !== '' && (
        <Typography
          style={{
            marginTop: 10,
            marginBottom: 10,
            boxSizing: 'border-box',
          }}
        >
          {percentLock.message}
        </Typography>
      )}
      {menu}
    </Column>
  );
}
