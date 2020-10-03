import React from 'react';
import { Typography } from '@material-ui/core';
import {
  Column,
  FieldTitleDashboard,
  Paper,
  CreatorComponentDash,
  DividerMini,
} from '../../../../../../../components';

export default function SummaryDash({ job, setConversationUser }) {
  return (
    <Column w="50%" p={10}>
      <FieldTitleDashboard name="Job Summary" inline={false} />
      <Paper p={10}>
        <Column j="flex-start" a="flex-start">
          <Typography variant="h6" align="left">
            {job.name}
          </Typography>
          <Typography>{job.summary}</Typography>
          <DividerMini />
          <CreatorComponentDash
            user={job.creator}
            setConversationUser={setConversationUser}
          />
        </Column>
      </Paper>
    </Column>
  );
}
