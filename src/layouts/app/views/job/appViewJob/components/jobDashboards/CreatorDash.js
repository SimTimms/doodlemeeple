import React from 'react';

import {
  Column,
  FieldTitleDashboard,
  CreatorComponentDash,
  Paper,
} from '../../../../../../../components';

export default function CreatorDash({ creator, setConversationUser }) {
  return (
    <Column w="50%" p={10}>
      <FieldTitleDashboard name="Creator" inline={false} />
      <Paper p={10}>
        <CreatorComponentDash
          user={creator}
          setConversationUser={setConversationUser}
        />
      </Paper>
    </Column>
  );
}
