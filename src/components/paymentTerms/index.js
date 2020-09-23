import React from 'react';
import { FieldTitle, Divider, Column, FieldBox, UnlockInfo, Row } from '../';
import AddPaymentTerm from './addPaymentTerms';
import PaymentTerm from './paymentTerm';
import { Typography } from '@material-ui/core';
import autosave from '../../utils/autosave';

export default function PaymentTerms({
  contract,
  setContract,
  setPercentLock,
  percentLock,
  calculatePercent,
  setDetailsLock,
  detailsLock,
  menu,
  mutation,
}) {
  function addPaymentTerm(newValue) {
    setContract({
      ...contract,
      paymentTerms: [...contract.paymentTerms, { ...newValue }],
    });
  }
  let totalCount = 0;
  const [wholeFigures, setWholeFigures] = React.useState(false);
  return (
    <Column>
      <FieldTitle
        name="2. Payment"
        description="Set out the total amount you would like to be paid upon completion of this project"
        warning="Example: 1100 GBP"
        inline={false}
      />
      <Divider />
      <FieldBox
        value={contract.cost}
        title="Total Cost"
        maxLength={5}
        onChangeEvent={(e) => {
          e.indexOf('.') > -1 ? setWholeFigures(true) : setWholeFigures(false);
          setContract({ ...contract, cost: e });
          autosave(mutation, null);
        }}
        replaceMode="number"
        placeholder="Example: 1050"
        info="The total amount you will be paid upon completion of this job, please take into consideration that Doodle Meeple fees will be subtracted from this amount. This amount should be in excess of 50 GBP, 75 USD, or 75 EUR"
        warning="Example: 1050"
        size="s"
        multiline={false}
      />
      {wholeFigures && (
        <Typography color="error">Whole figures only please</Typography>
      )}
      <FieldBox
        value={contract.currency}
        title="Currency"
        maxLength={0}
        onChangeEvent={(e) => {
          setContract({ ...contract, currency: e });
          autosave(mutation, null);
        }}
        replaceMode="currency"
        placeholder="Example: GBP"
        info=""
        warning=""
        size="s"
        multiline={false}
      />
      <Divider />
      <FieldTitle
        name="3. Milestones"
        description="Go into detail about how and when you would like to be paid, be very specific about your terms to decrease the chance of a dispute further down the line."
        warning="Example: The Creative shall receive 100 GBP upon commencement of the project, The Creative shall receive 200 GBP upon delivery of 10 full resolution SVG files, the Creative shall receive 500GBP upon delivery of all remaining specified items"
        inline={false}
      />
      <Divider />
      {contract.paymentTerms.map((paymentTerm, index) => {
        totalCount += paymentTerm.percent;
        return (
          <PaymentTerm
            contract={contract}
            setContract={setContract}
            paymentTerm={paymentTerm}
            index={index}
            key={`term_${index}`}
            calculatePercent={calculatePercent}
            setPercentLock={setPercentLock}
            setDetailsLock={setDetailsLock}
          />
        );
      })}
      <AddPaymentTerm
        contractId={contract._id}
        setDetailsLock={setDetailsLock}
        detailsLock={detailsLock}
        percentLock={percentLock}
        addPaymentTerm={addPaymentTerm}
      />
      {contract.paymentTerms.length === 0 ? (
        <Row>
          <Typography style={{ fontWeight: 900, marginRight: 10 }}>
            No Milestones Set:
          </Typography>
          <Typography>
            You'll receive {contract.cost} {contract.currency} upon completion
          </Typography>
        </Row>
      ) : (
        contract.cost > totalCount && (
          <Row>
            <Typography>
              You'll receive the remaining {contract.cost - totalCount}{' '}
              {contract.currency} upon completion
            </Typography>
          </Row>
        )
      )}

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

      {totalCount > parseInt(contract.cost) ? (
        <UnlockInfo str="Your milestone payments exceed your total contract fee." />
      ) : (
        <Column>
          <Divider />
          {menu}
        </Column>
      )}
    </Column>
  );
}
