import React from 'react';
import { Typography } from '@material-ui/core';
import {
  Column,
  FieldTitleDashboard,
  InviteComponentFull,
  Widget,
  Divider,
} from '../../../../../../../components';
import TaskGeneratorClient from './taskGeneratorClient';

export default function ProjectDash({
  invites,
  setConversationUser,
  history,
  job,
  setTabNbr,
}) {
  return (
    <Column w={400} p={10} j="center">
      <Widget p={10}>
        <Typography>Invited Creatives</Typography>
        {invites.map((invite, index) => {
          const contractSubmitted = invite.job.contracts.filter(
            (contract) => contract.user._id === invite.receiver._id
          );
          return (
            <InviteComponentFull
              invite={invite}
              key={`invite-${index}`}
              setConversationUser={setConversationUser}
              contract={contractSubmitted[0]}
              history={history}
            />
          );
        })}
      </Widget>
      <Widget p={10}>
        <Column>
          <Typography variant="body1">Tasks</Typography>
          <Typography variant="body1" style={{ fontSize: 10 }}>
            Complete these to keep your contract moving
          </Typography>
          <Divider />
          <TaskGeneratorClient setTabNbr={setTabNbr} job={job} />
        </Column>
      </Widget>
    </Column>
  );
}
