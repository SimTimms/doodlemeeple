import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';

export default function PaymentSchedule({ contractData, isClient }) {
  const creativeCommission = 0.9;
  const creatorCommission = 1.1;
  const doodleMeeplePercent = 0.1;
  let totalCount = 0;
  return (
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
            <TableCell align="right" style={{ fontWeight: 900 }}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contractData.paymentTerms.map((paymentTerm, index) => {
            totalCount += paymentTerm.percent;
            return (
              <TableRow key={`payment_summary_${index}`}>
                <TableCell align="left">{`#${index + 1} ${
                  paymentTerm.description
                }`}</TableCell>
                <TableCell align="right">{paymentTerm.percent}</TableCell>
                <TableCell align="right">{contractData.currency}</TableCell>
              </TableRow>
            );
          })}
          {totalCount < contractData.cost && (
            <TableRow>
              <TableCell align="left">{`#${
                contractData.paymentTerms.length + 1
              } Upon completion`}</TableCell>
              <TableCell align="right">
                {contractData.cost - totalCount}
              </TableCell>
              <TableCell align="right">{contractData.currency}</TableCell>
            </TableRow>
          )}
          <TableRow>
            <TableCell align="left">Subtotal</TableCell>
            <TableCell align="right">{contractData.cost}</TableCell>
            <TableCell align="right">{contractData.currency}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell align="left">DoodleMeeple Fee</TableCell>
            <TableCell align="right">
              {isClient
                ? Math.round(contractData.cost * doodleMeeplePercent)
                : -Math.round(contractData.cost * doodleMeeplePercent)}
            </TableCell>
            <TableCell align="right">{contractData.currency}</TableCell>
          </TableRow>

          <TableRow style={{ background: '#444' }}>
            <TableCell align="left" style={{ color: '#fff' }}>
              {isClient ? 'Total Due' : 'Total Payout'}
            </TableCell>
            <TableCell align="right" style={{ color: '#fff' }}>
              {isClient
                ? parseInt(`${contractData.cost * creatorCommission}`)
                : parseInt(`${contractData.cost * creativeCommission}`)}
            </TableCell>
            <TableCell align="right" style={{ color: '#fff' }}>
              {contractData.currency}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
