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
  ItemCloseJob,
  ItemQuotePaid,
} from './CheckListItems';

export default function CheckListDash({ job, setTabNbr, history }) {
  const classes = useStyles();
  const jobHasContract = job.activeContract;
  const draft = job.submitted === 'draft';
  const paid = job.submitted === 'paid' || job.submitted === 'complete';
  const accepted = job.submitted === 'accepted';
  const closed = job.submitted === 'closed';
  const finished = job.submitted === 'complete';
  const { paymentTerms, cost, currency, status } = job.activeContract
    ? job.activeContract
    : { paymentTerms: [], cost: 0, currency: 'GBP', status: null };
  const paidOutArr = paymentTerms.filter((term) => term.paid === 'success');
  const pending = status === 'pending';
  let totalPaid = 0;
  for (let i = 0; i < paidOutArr.length; i++) {
    totalPaid += paidOutArr[i].percent;
  }
  const fullyPaid = totalPaid === parseInt(cost) && cost > 0;

  const color = [
    draft ? 2 : 1,
    draft ? 0 : 1,
    jobHasContract ? 1 : !accepted && !paid && 2,
    !paid ? 2 : 1,
    fullyPaid ? 1 : 2,
    0,
    finished ? 1 : 2,
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
          {(fullyPaid || draft || finished) && (
            <Column>
              <FieldTitleDashboard name="Status" inline={false} a="c" />
              <DividerMini />
              <Typography
                variant="h6"
                className={clsx({
                  [classes.status]: true,
                  [classes.statusGreen]: fullyPaid,
                })}
              >
                {draft && 'DRAFT'}
                {finished ? 'JOB COMPLETE' : fullyPaid && 'FULLY PAID'}
              </Typography>
              <DividerMini />
            </Column>
          )}
          <FieldTitleDashboard name="Checklist" inline={false} a="c" />
          <Divider />
          <Column>
            <ItemPosted
              setTabNbr={setTabNbr}
              color={color[0]}
              draft={draft}
              history={history}
              jobId={job._id}
            />
            <DividerWithBorder />
            <ItemInvites
              setTabNbr={setTabNbr}
              color={color[0] === 1 ? color[1] : 0}
              draft={draft}
            />
            <DividerWithBorder />
            <ItemQuoteAccepted
              contracts={job.contracts}
              activeContract={jobHasContract}
              setTabNbr={setTabNbr}
              color={color[1] === 1 ? color[2] : 0}
            />
            {/*
            <ItemQuotePaid
              paid={paid}
              pending={pending}
              setTabNbr={setTabNbr}
              color={color[2] === 1 ? color[3] : 0}
              jobHasContract={jobHasContract}
              isCreator={true}
            />
            <DividerWithBorder />
            <ItemCreativePaid
              totalPaid={totalPaid}
              cost={cost}
              currency={currency}
              setTabNbr={setTabNbr}
              color={color[3] === 1 ? color[4] : 0}
              jobHasContract={jobHasContract}
              paid={paid}
            />*/}
            <DividerWithBorder />
            <ItemLeaveReview
              paid={false}
              setTabNbr={setTabNbr}
              color={color[4] === 1 ? color[5] : 0}
            />
            {/*
            <DividerWithBorder />
            <ItemCloseJob
              setTabNbr={setTabNbr}
              color={color[4] === 1 ? color[6] : 0}
            />*/}
          </Column>
          <DividerMini />
        </Paper>
      )}
    </Column>
  );
}
