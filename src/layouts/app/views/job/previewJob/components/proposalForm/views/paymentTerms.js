import React from 'react';
import {
  FieldTitle,
  Divider,
  Column,
  FieldBox,
  UnlockInfo,
} from '../../../../../../../../components';
import { AddPaymentTerm } from './components';
import PaymentTerm from '../components';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import autosave from '../../../../../../../../utils/autosave';

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
        inline={true}
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
        info="The total amount you will be paid upon completion of this job, please take into consideration that Doodle Meeple fees will be subtracted from this amount"
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
        inline={true}
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
            setSaveLock={setSaveLock}
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

      {totalCount >= parseInt(contract.cost) ? (
        <UnlockInfo str="Your milestone payments exceed your total contract fee." />
      ) : (
        <Column>
          <Divider />
          <FieldTitle
            name="4. Payment Schedule"
            description="This is what the full payment schedule looks like, including DoodleMeeple fees."
            warning=""
            inline={true}
          />
          <TableContainer style={{ paddingTop: 0 }}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left" style={{ fontWeight: 900 }}>
                    DESCRIPTION
                  </TableCell>
                  <TableCell align="right" style={{ fontWeight: 900 }}>
                    AMOUNT
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{ fontWeight: 900 }}
                  ></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {contract.paymentTerms.map((paymentTerm, index) => {
                  return (
                    <TableRow key={`payment_summary_${index}`}>
                      <TableCell align="left">{`#${index + 1} ${
                        paymentTerm.description
                      }`}</TableCell>
                      <TableCell align="right">{paymentTerm.percent}</TableCell>
                      <TableCell align="right">{contract.currency}</TableCell>
                    </TableRow>
                  );
                })}
                {totalCount > 0 && (
                  <TableRow>
                    <TableCell align="left">{`#${
                      contract.paymentTerms.length + 1
                    } Upon completion`}</TableCell>
                    <TableCell align="right">
                      {contract.cost - totalCount}
                    </TableCell>
                    <TableCell align="right">{contract.currency}</TableCell>
                  </TableRow>
                )}
                <TableRow>
                  <TableCell align="left">Subtotal</TableCell>
                  <TableCell align="right">{contract.cost}</TableCell>
                  <TableCell align="right">{contract.currency}</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell align="left">DoodleMeeple fee</TableCell>
                  <TableCell align="right">-{contract.cost * 0.1}</TableCell>
                  <TableCell align="right">{contract.currency}</TableCell>
                </TableRow>

                <TableRow style={{ background: '#444' }}>
                  <TableCell align="left" style={{ color: '#fff' }}>
                    Total Payout
                  </TableCell>
                  <TableCell align="right" style={{ color: '#fff' }}>
                    {contract.cost * 0.9}
                  </TableCell>
                  <TableCell align="right" style={{ color: '#fff' }}>
                    {contract.currency}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Divider />
          {menu}
        </Column>
      )}
    </Column>
  );
}
