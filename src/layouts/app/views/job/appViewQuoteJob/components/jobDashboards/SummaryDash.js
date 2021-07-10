import React from 'react';
import { useStyles } from './styles';
import { Typography } from '@material-ui/core';
import {
  Column,
  FieldTitleDashboard,
  Widget,
  CreatorComponentDash,
  DividerMini,
} from '../../../../../../../components';

export default function SummaryDash({
  job,
  setConversationUser,
  declined,
  history,
}) {
  return (
    <Column w="50%" p={10}>
      <Widget p={10}>
        <FieldTitleDashboard name={job.job.name} inline={false} a="c" />
        <Column j="flex-start" a="flex-start">
          <Typography variant="h6" align="left"></Typography>
          <DividerMini />
          <CreatorComponentDash
            user={job.creator}
            setConversationUser={setConversationUser}
            declined={declined}
            history={history}
          />
        </Column>
      </Widget>
    </Column>
  );
}
