import React from 'react';
import { Typography } from '@material-ui/core';
import {
  Column,
  Widget,
  Divider,
  CreatorComponentDash,
  ProjectComponentDash,
} from '../../../../../../../components';

export default function CheckListCreativeDash({
  declined,
  setTabNbr,
  setConversationUser,
  job,
  history,
  activeContract,
}) {
  const closed = job.job.submitted === 'closed';

  return (
    <Column w={400} p={10}>
      <Widget p={10}>
        <ProjectComponentDash
          jobName={job.job.name}
          jobSummary={job.job.summary}
        />
      </Widget>

      <Widget p={10}>
        <CreatorComponentDash
          user={job.creator}
          setConversationUser={setConversationUser}
          declined={declined}
          history={history}
          closed={closed}
          accepted={activeContract}
        />
      </Widget>
    </Column>
  );
}
