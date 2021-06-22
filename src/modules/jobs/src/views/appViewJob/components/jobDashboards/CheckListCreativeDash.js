import React from 'react';
import { Typography } from '@material-ui/core';
import {
  Column,
  Widget,
  Divider,
  CreatorComponentDash,
  ProjectComponentDash,
} from '../../../../../imports/sharedComponents';
import TaskGenerator from './taskGenerator';

export default function CheckListCreativeDash({
  declined,
  invite,
  setTabNbr,
  setConversationUser,
  job,
  history,
  activeContract,
  contractData,
}) {
  const draft = contractData && contractData.status === 'draft' ? true : false;
  const closed = job.job.submitted === 'closed';
  const quotedSubmitted =
    contractData && contractData.status === 'submitted' ? true : false;
  const noQuote = !contractData ? true : false;

  return (
    <Column w={400} p={10}>
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
          <TaskGenerator
            history={history}
            job={job}
            draft={draft}
            contractData={contractData}
            quoted={quotedSubmitted}
            noQuote={noQuote}
            setTabNbr={setTabNbr}
          />
        </Column>
      </Widget>
    </Column>
  );
}
