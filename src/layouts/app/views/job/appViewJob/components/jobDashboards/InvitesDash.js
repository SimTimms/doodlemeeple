import React from 'react';
import {
  Column,
  FieldTitleDashboard,
  InviteComponentDash,
  Paper,
} from '../../../../../../../components';

export default function InvitesDash({ invites, setConversationUser }) {
  return (
    <Column w="50%" p={10}>
      <FieldTitleDashboard name="Invites" inline={false} />
      <Paper p={10}>
        {invites.map((invite, index) => (
          <InviteComponentDash
            invite={invite}
            key={`invite-${index}`}
            setConversationUser={setConversationUser}
          />
        ))}
      </Paper>
    </Column>
  );
}
