import React from 'react';
import {
  Column,
  FieldTitleDashboard,
  InviteComponentDash,
  InviteComponentFull,
  Paper,
} from '../../../../../../../components';

export default function InvitesDash({ invites, setConversationUser, history }) {
  return (
    <Column w="50%" p={10}>
      <Paper p={10}>
        <FieldTitleDashboard name="Invited Creatives" inline={false} />
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
      </Paper>
    </Column>
  );
}
