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

export default function Payments({ data }) {
  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>AMOUNT</TableCell>
            <TableCell align="right">STATUS</TableCell>
            <TableCell align="right">DATE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((payment, index) => {
            return (
              <TableRow key={`payment_summary_${index}`}>
                <TableCell>
                  {`${payment.amount / 100} ${payment.currency}`}
                </TableCell>
                <TableCell align="right">
                  <div
                    style={{
                      background: '#ccc',
                      color: '#fff',
                      textAlign: 'center',
                      paddingTop: 3,
                      paddingBottom: 3,
                      borderRadius: 4,
                    }}
                  >{`${payment.status}`}</div>
                </TableCell>
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
