import React from 'react';
import { Typography } from '@material-ui/core';
import {
  Column,
  FieldTitleDashboard,
  Widget,
  Divider,
  DividerMini,
  CreatorComponentDash,
  IconButton,
  TaskButton,
} from '../../../../../../../components';
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
  const closed = job.job.submitted === 'closed';
  return (
    <Column w={300} p={10}>
      <Widget p={10}>
        <FieldTitleDashboard name="Project Details" inline={false} a="c" />
        <DividerMini />
        <ProjectComponentDash
          jobName={job.job.name}
          jobSummary={job.job.summary}
        />
        <Typography variant="body1" align="left">
          {nameShortener(job.job.summary, 60)}
        </Typography>
        <Divider />
        <FieldTitleDashboard name={`Project Owner`} inline={false} a="c" />
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
        <Divider />

        <Column>
          <FieldTitleDashboard name="Tasks" inline={false} a="c" />
          <Divider />
          <TaskButton
            title="Describe Yourself"
            subTitle="Profile"
            icon="face"
            color="warning"
            clickSound={true}
            zoom={true}
            onClickEvent={() => history.push('/app/edit-profile/summary')}
            styleOverride={{ marginLeft: 10 }}
          />
        </Column>
      </Widget>
    </Column>
  );
}
