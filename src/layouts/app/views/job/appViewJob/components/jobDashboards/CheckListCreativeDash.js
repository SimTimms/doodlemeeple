import React from 'react';
import { Typography } from '@material-ui/core';
import {
  Column,
  Widget,
  Divider,
  CreatorComponentDash,
  ProjectComponentDash,
} from '../../../../../../../components';
import { TaskQuote } from '../../../../../../../modules/tasks';

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
  const closed = job.job.submitted === 'closed';
  return (
    <Column w={300} p={10}>
      <Widget p={10}>
        <ProjectComponentDash
          jobName={job.job.name}
          jobSummary={job.job.summary}
          setTabNbr={setTabNbr}
        />
      </Widget>
      <Widget p={10}>
        <CreatorComponentDash
          user={job.creator}
          setConversationUser={setConversationUser}
          declined={declined}
          history={history}
          messages={invite.messages}
          closed={closed}
          accepted={activeContract}
        />
      </Widget>

      <Widget p={10}>
        <Column>
          <Typography variant="body1">Tasks</Typography>
          <Typography variant="body1" style={{ fontSize: 10 }}>
            Complete these to keep your contract moving
          </Typography>
          <Divider />
          <TaskQuote setTabNbr={setTabNbr} />
        </Column>
      </Widget>
    </Column>
  );
}
