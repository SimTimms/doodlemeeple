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
import { IconButton } from '../';

import { Mutation } from 'react-apollo';
import { REQUEST_WITHDRAW, APPROVE_WITHDRAW } from '../../data/mutations';

export default function PaymentTermsWithdraw({ data, isCreator }) {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">DESCRIPTION</TableCell>
            <TableCell align="right">AMOUNT</TableCell>
            <TableCell align="right">WITHDRAW</TableCell>
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
                  {isCreator && payment.withdrawRequest ? (
                    <Mutation
                      mutation={APPROVE_WITHDRAW}
                      variables={{
                        _id: payment._id,
                      }}
                    >
                      {(mutation) => {
                        return (
                          <IconButton
                            title="Approve"
                            icon=""
                            onClickEvent={() => mutation()}
                          />
                        );
                      }}
                    </Mutation>
                  ) : (
                    !isCreator &&
                    !payment.withdrawRequest && (
                      <Mutation
                        mutation={REQUEST_WITHDRAW}
                        variables={{
                          _id: payment._id,
                        }}
                      >
                        {(mutation) => {
                          return (
                            <IconButton
                              title="Withdraw"
                              icon=""
                              onClickEvent={() => mutation()}
                            />
                          );
                        }}
                      </Mutation>
                    )
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
