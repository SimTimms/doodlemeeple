import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { IconButton } from '../';
import { Mutation } from 'react-apollo';
import { APPROVE_WITHDRAW } from '../../data/mutations';
import PayoutButton from './payoutButton';
import ApproveButton from './approveButton';
export default function PaymentTermsWithdraw({ data, isCreator }) {
  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">DESCRIPTION</TableCell>
            <TableCell align="right">AMOUNT</TableCell>
            <TableCell align="right">OPTIONS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((payment, index) => {
            return (
              <TableRow key={`payment_summary_${index}`}>
                <TableCell>
                  {`${payment.description} ${payment.contract.currency}`}
                </TableCell>
                <TableCell align="right">
                  {`${payment.percent} ${payment.contract.currency}`}
                </TableCell>
                <TableCell align="right">
                  {payment.paid === 'success' && <div>PAID OUT</div>}
                  {isCreator && payment.paid !== 'success' && (
                    <ApproveButton
                      paymentId={payment._id}
                      withdrawApproved={payment.withdrawApproved}
                    />
                  )}

                  {!isCreator && payment.paid !== 'success' && (
                    <PayoutButton
                      paymentId={payment._id}
                      withdrawRequest={payment.withdrawRequest}
                    />
                  )}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
