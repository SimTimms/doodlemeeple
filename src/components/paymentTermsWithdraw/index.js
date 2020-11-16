import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import PayoutButton from './payoutButton';
import ApproveButton from './approveButton';
export default function PaymentTermsWithdraw({ data, isCreator, isFunded }) {
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
                  {isCreator && payment.paid !== 'success' && isFunded ? (
                    <ApproveButton
                      paymentId={payment._id}
                      withdrawApproved={payment.withdrawApproved}
                      title="Approve"
                    />
                  ) : (
                    isCreator &&
                    payment.paid === 'fail' &&
                    isFunded && (
                      <ApproveButton
                        paymentId={payment._id}
                        withdrawApproved={payment.withdrawApproved}
                        title="Try Again"
                      />
                    )
                  )}

                  {!isCreator && payment.paid !== 'success' && isFunded && (
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
