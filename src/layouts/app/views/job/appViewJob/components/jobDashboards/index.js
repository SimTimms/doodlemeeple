import React from 'react';
import { useStyles } from './styles';
import { Typography } from '@material-ui/core';
import clsx from 'clsx';
import {
  Column,
  Row,
  Divider,
  Widget,
  FieldTitleDashboard,
} from '../../../../../../../components';
import NotificationDash from './NotificationDash';
import InvitesDash from './InvitesDash';
import MessageDash from './MessageDash';
import QuotesDash from './QuotesDash';
import MilestoneDash from './MilestoneDash';
import PaymentsDash from './PaymentsDash';
import CheckListDash from './CheckListDash';
import CheckListCreativeDash from './CheckListCreativeDash';
import SummaryDash from './SummaryDash';

export function CreativeDashboard({
  job,
  setConversationUser,
  contract,
  invite,
  setTabNbr,
  history,
}) {
  const classes = useStyles();
  const declined = invite.data.status === 'declined';
  return (
    <Column>
      <Row a="flex-start">
        <CheckListCreativeDash
          declined={declined}
          invite={invite.data}
          setTabNbr={setTabNbr}
          job={job}
          history={history}
          setConversationUser={setConversationUser}
        />

        <NotificationDash jobId={job.job._id} />
      </Row>
    </Column>
  );
}

export function CreatorDashboard({ job, setConversationUser, setTabNbr }) {
  const classes = useStyles();
  return (
    <Column>
      <Row a="flex-start">
        <CheckListDash job={job} setTabNbr={setTabNbr} />
        <NotificationDash jobId={job._id} />
        <InvitesDash
          invites={job.invites}
          setConversationUser={setConversationUser}
          jobClosed={job.submitted === 'closed'}
        />
      </Row>
    </Column>
  );
}
