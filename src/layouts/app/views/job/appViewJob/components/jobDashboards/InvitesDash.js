import React from 'react';
import {
  Column,
  FieldTitleDashboard,
  InviteComponentDash,
  Paper,
} from '../../../../../../../components';

export default function InvitesDash({
  invites,
  setConversationUser,
  jobClosed,
}) {
  return (
    <Column w="50%" p={10}>
      <Paper p={10}>
        <FieldTitleDashboard name="Invites" inline={false} />
        {invites.map((invite, index) => (
          <InviteComponentDash
            invite={invite}
            key={`invite-${index}`}
            setConversationUser={setConversationUser}
            jobClosed={jobClosed}
          />
        ))}
      </Paper>
    </Column>
  );
}
