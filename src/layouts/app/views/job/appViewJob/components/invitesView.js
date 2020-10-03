import React from 'react';
import {
  Column,
  FieldTitleDashboard,
  InviteComponentFull,
  DividerWithBorder,
  Paper,
} from '../../../../../../components';

export default function InvitesView({ invites, setConversationUser }) {
  return (
    <Column w="50%" p={10}>
      <FieldTitleDashboard name="Invites" inline={false} />
      <Paper p={10}>
        {invites.map((invite, index) => {
          const contractSubmitted = invite.job.contracts.filter(
            (contract) => contract.user._id === invite.receiver._id
          );

          return (
            <Column key={`invite_${index}`}>
              {index !== 0 && <DividerWithBorder />}
              <InviteComponentFull
                invite={invite}
                key={`invite-${index}`}
                setConversationUser={setConversationUser}
                contract={contractSubmitted[0]}
              />
            </Column>
          );
        })}
      </Paper>
    </Column>
  );
}
