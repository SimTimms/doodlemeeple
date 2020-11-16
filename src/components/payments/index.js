import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import moment from 'moment';
import { useStyles } from './styles';
import clsx from 'clsx';

export default function Payments({ data, type }) {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>AMOUNT</TableCell>
            <TableCell align="right">STATUS</TableCell>
            <TableCell align="right">TYPE</TableCell>
            <TableCell align="right">DATE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((payment, index) => {
            return (
              <TableRow key={`payment_summary_${index}`}>
                {type === 'creative' ? (
                  <TableCell>
                    {`${payment.amount} ${payment.currency}`}
                  </TableCell>
                ) : (
                  <TableCell>
                    {`${payment.amount} ${payment.currency}`}
                  </TableCell>
                )}
                <TableCell align="right">
                  <div
                    className={clsx({
                      [classes.paymentStatus]: true,
                      [classes.good]: payment.status === 'charge_succeeded',
                      [classes.red]: payment.status === 'Incomplete',
                    })}
                  >{`${
                    payment.status === 'charge_succeeded'
                      ? 'Payment'
                      : payment.status
                  }`}</div>
                </TableCell>

                <TableCell align="right">{payment.account}</TableCell>
                <TableCell align="right">
                  {moment(payment.updatedAt).format('LLLL')}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
