import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';
import {
  Column,
  FieldTitleDashboard,
  Paper,
  DividerWithBorder,
  Divider,
  DividerMini,
} from '../../../../../../../components';
import {
  ItemPosted,
  ItemInvites,
  ItemCreativePaid,
  ItemLeaveReview,
  ItemQuoteAccepted,
  ItemQuotePaid,
} from './CheckListItems';

export default function CheckListDash({ job, setTabNbr }) {
  const classes = useStyles();
  const jobHasContract = job.activeContract;
  const paid = job.submitted === 'paid';
  const accepted = job.submitted === 'accepted';
  const closed = job.submitted === 'closed';
  const { paymentTerms, cost, currency, status } = job.activeContract
    ? job.activeContract
    : { paymentTerms: [], cost: 0, currency: 'GBP', status: '' };
  const paidOutArr = paymentTerms.filter((term) => term.paid === 'success');
  const pending = status === 'pending';
  let totalPaid = 0;
  for (let i = 0; i < paidOutArr.length; i++) {
    totalPaid += paidOutArr[i].percent;
  }

  const color = [
    1,
    1,
    jobHasContract ? 1 : !accepted && !paid && 2,
    !paid ? 2 : 1,
    totalPaid < parseInt(cost) ? 2 : 1,
    0,
  ];

  return (
    <Column w="50%" p={10}>
      {closed ? (
        <Paper p={10}>
          <FieldTitleDashboard name="Status" inline={false} a="c" />
          <DividerMini />
          <Typography
            variant="h6"
            className={clsx({
              [classes.status]: true,
            })}
          >
            {closed && 'JOB CLOSED'}
          </Typography>
          <DividerMini />
        </Paper>
      ) : (
        <Paper p={10}>
          <FieldTitleDashboard name="Checklist" inline={false} a="c" />
          <Divider />
          <Column>
            <ItemPosted setTabNbr={setTabNbr} color={color[0]} />
            <DividerWithBorder />
            <ItemInvites setTabNbr={setTabNbr} color={color[1]} />
            <DividerWithBorder />
            <ItemQuoteAccepted
              accepted={job.submitted}
              contracts={job.contracts}
              activeContract={jobHasContract}
              setTabNbr={setTabNbr}
              color={color[2]}
            />
            <DividerWithBorder />
            <ItemQuotePaid
              paid={job.submitted}
              pending={pending}
              setTabNbr={setTabNbr}
              color={color[2] === 1 ? color[3] : 0}
              jobHasContract={jobHasContract}
            />
            <DividerWithBorder />
            <ItemCreativePaid
              totalPaid={totalPaid}
              cost={cost}
              currency={currency}
              setTabNbr={setTabNbr}
              color={color[3] === 1 ? color[4] : 0}
              jobHasContract={jobHasContract}
            />
            <DividerWithBorder />
            <ItemLeaveReview
              paid={false}
              setTabNbr={setTabNbr}
              color={color[4] === 1 ? color[5] : 0}
            />
          </Column>
          <DividerMini />
        </Paper>
      )}
    </Column>
  );
}
