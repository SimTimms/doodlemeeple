import React from 'react';
import {
  FieldTitle,
  Divider,
  Column,
  NoticeBox,
  ContractComponent,
  BorderBox,
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
  saveLock,
  setSaveLock,
  setDetailsLock,
  detailsLock,
}) {
  function addPaymentTerm(newValue) {
    setContract({
      ...contract,
      paymentTerms: [...contract.paymentTerms, { ...newValue }],
    });
  }
  return (
    <Column>
      <Divider />
      <FieldTitle
        name="2. Payment Terms"
        description="Go into detail about how and when you would like to be paid, be very specific about your terms to decrease the chance of a dispute further down the line."
        warning="Example: The Creative shall receive 10% upon commencement of the project, The Creative shall receive 20% upon delivery of 10 full resolution SVG files, the Creative shall receive 70% upon delivery of all remaining specified items"
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
          availablePercent={100}
          calculatePercent={calculatePercent}
          setPercentLock={setPercentLock}
          percentLock={percentLock}
          saveLock={saveLock}
          setSaveLock={setSaveLock}
          setDetailsLock={setDetailsLock}
        />
      ))}
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
      <Typography variant="h6">or</Typography>
      <AddPaymentTerm
        contractId={contract._id}
        setDetailsLock={setDetailsLock}
        detailsLock={detailsLock}
        percentLock={percentLock}
        addPaymentTerm={addPaymentTerm}
      />
    </Column>
  );
}
