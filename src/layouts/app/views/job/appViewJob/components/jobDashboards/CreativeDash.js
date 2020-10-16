import React from 'react';
import {
  Column,
  FieldTitleDashboard,
  InviteComponentDash,
  Paper,
} from '../../../../../../../components';

export default function CreativeDash({ setConversationUser, job, history }) {
  return (
    <Column w="50%" p={10}>
      <Paper p={10}>
        <FieldTitleDashboard name="Creative" inline={false} />
        <InviteComponentDash
          setConversationUser={setConversationUser}
          job={job}
          history={history}
          user={job.activeContract.user}
        />
      </Paper>
    </Column>
  );
}
