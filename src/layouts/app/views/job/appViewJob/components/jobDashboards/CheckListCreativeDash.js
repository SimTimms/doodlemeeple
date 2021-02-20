import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';
import {
  Column,
  FieldTitleDashboard,
  Widget,
  DividerWithBorder,
  Divider,
  DividerMini,
  CreatorComponentDash,
} from '../../../../../../../components';
import {
  InviteReceived,
  InviteReplied,
  ItemViewJob,
  ItemQuoteAcceptedCreative,
} from './CheckListItems';
import { nameShortener } from '../../../../../../../utils';

export default function CheckListCreativeDash({
  declined,
  invite,
  setTabNbr,
  setConversationUser,
  job,
  history,
  jobHasBeenAwarded,
  activeContract,
  userContractStatus,
  contractData,
}) {
  function totalPaid(jobData) {
    if (!jobData) {
      return 0;
    }
    const paidOutArr = jobData.paymentTerms.filter(
      (term) => term.paid === 'success'
    );
    let totalPaid = 0;
    for (let i = 0; i < paidOutArr.length; i++) {
      totalPaid += paidOutArr[i].percent;
    }
    return totalPaid;
  }

  const accepted = invite.status === 'accepted';
  const unopened = invite.status === 'unopened';
  const quoted = userContractStatus !== null;
  const rejected = invite.status === 'declined';
  const jobData = job.job;
  const paid = jobData.submitted === 'paid' || jobData.submitted === 'complete';
  const cost = contractData ? contractData.cost : 0;
  const submitted = contractData && contractData.status === 'submitted';
  const finished = job.job.submitted === 'complete';
  const closed = job.job.submitted === 'closed';

  const color = [
    1,
    unopened ? 2 : 1,
    submitted || quoted ? 1 : 2,
    accepted || rejected ? 1 : userContractStatus ? 3 : 2,
    paid ? 1 : declined ? 0 : 2,
    totalPaid(contractData) < parseInt(cost) || parseInt(cost) === 0 ? 2 : 1,
  ];
  const classes = useStyles();
  return (
    <Column w={300} p={10}>
      <Widget p={10}>
        <FieldTitleDashboard
          name={nameShortener(job.job.name, 30)}
          inline={false}
          a="c"
        />
        <Typography variant="h6" align="left"></Typography>
        <DividerMini />
        <CreatorComponentDash
          user={job.creator}
          setConversationUser={setConversationUser}
          declined={declined}
          history={history}
          messages={invite.messages}
          closed={closed}
          accepted={activeContract}
        />
        {(declined || quoted || jobHasBeenAwarded) && (
          <Column>
            <DividerMini />
            <FieldTitleDashboard name="Status" inline={false} a="c" />
            <DividerMini />
            <Typography
              variant="h6"
              className={clsx({
                [classes.status]: true,
                [classes.statusGreen]: activeContract,
              })}
            >
              {jobHasBeenAwarded
                ? closed
                  ? 'CLOSED'
                  : finished
                  ? 'JOB COMPLETE'
                  : totalPaid(contractData) === parseInt(cost)
                  ? 'FULLY PAID'
                  : paid
                  ? 'FUNDED'
                  : activeContract
                  ? 'QUOTE ACCEPTED'
                  : !activeContract && 'QUOTE REJECTED'
                : declined
                ? 'INVITE DECLINED'
                : quoted && 'WAITING ON CLIENT'}
            </Typography>
          </Column>
        )}
        <Divider />

        {!closed && (
          <Column>
            <FieldTitleDashboard name="Checklist" inline={false} a="c" />
            <Divider />
            <InviteReceived color={color[0]} />
            <DividerWithBorder />
            <ItemViewJob
              reply={invite.status}
              inviteId={invite._id}
              setTabNbr={setTabNbr}
              color={color[1]}
            />
            <DividerWithBorder />
            <InviteReplied
              color={color[2]}
              declined={declined}
              quoted={quoted}
              accepted={accepted}
              rejected={rejected}
              setTabNbr={setTabNbr}
              submitted={submitted}
            />
            <DividerWithBorder />
            {!rejected && (
              <ItemQuoteAcceptedCreative
                color={color[2] === 1 ? color[3] : 0}
                activeContract={activeContract}
                setTabNbr={setTabNbr}
              />
            )}
            {!rejected && <Divider />}
            {/*
            <ItemQuotePaid
              paid={paid}
              setTabNbr={setTabNbr}
              color={color[3] === 1 ? color[4] : 0}
              jobHasContract={jobHasBeenAwarded}
              isCreator={false}
            />
            {!rejected && (
              <ItemCreativePaid
                totalPaid={totalPaid(contractData)}
                cost={cost}
                currency={currency}
                setTabNbr={setTabNbr}
                color={color[4] === 1 ? color[5] : 0}
                jobHasContract={jobHasBeenAwarded}
                paid={paid}
              />
            )}
            */}
          </Column>
        )}
      </Widget>
    </Column>
  );
}
