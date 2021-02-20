import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { useStyles } from './styles';

export default function PaymentSchedule({ contractData, isClient }) {
  const classes = useStyles();

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
          <TableRow className={classes.subtotal}>
            <TableCell align="left" style={{ color: '#fff' }}>
              Total Payout
            </TableCell>
            <TableCell align="right" style={{ color: '#fff' }}>
              {contractData.cost}
            </TableCell>
            <TableCell align="right" style={{ color: '#fff' }}>
              {contractData.currency}
            </TableCell>
          </TableRow>
          {/*
          <TableRow className={classes.subtotal}>
            <TableCell align="left" style={{ color: '#fff' }}>
              DoodleMeeple Fee
            </TableCell>
            <TableCell align="right" style={{ color: '#fff' }}>
              {isClient
                ? Math.round(contractData.cost * doodleMeeplePercent)
                : -Math.round(contractData.cost * doodleMeeplePercent)}
            </TableCell>
            <TableCell align="right" style={{ color: '#fff' }}>
              {contractData.currency}
            </TableCell>
          </TableRow>
             

          <TableRow className={classes.total}>
            <TableCell align="left" style={{ color: '#fff', fontSize: 18 }}>
              {isClient ? 'Total Due' : 'Total Payout'}
            </TableCell>
            <TableCell align="right" style={{ color: '#fff', fontSize: 18 }}>
              {isClient
                ? parseInt(`${contractData.cost * creatorCommission}`)
                : parseInt(`${contractData.cost * creativeCommission}`)}
            </TableCell>
            <TableCell align="right" style={{ color: '#fff', fontSize: 18 }}>
              {contractData.currency}
            </TableCell>
          </TableRow> */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
