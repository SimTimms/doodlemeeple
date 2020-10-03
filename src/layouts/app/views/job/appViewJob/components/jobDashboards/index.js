import React from 'react';
import { useStyles } from './styles';
import { Column, Row } from '../../../../../../../components';
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
  setTabNbr,
}) {
  const classes = useStyles();
  return (
    <Column>
      <Row a="flex-start">
        <CheckListCreativeDash contract={contract} setTabNbr={setTabNbr} />
        <SummaryDash job={job} setConversationUser={setConversationUser} />
        <NotificationDash jobId={job._id} />
      </Row>
      <Row>
        <MessageDash />
        <QuotesDash />
      </Row>
      <Row>
        <MilestoneDash />
        <PaymentsDash />
      </Row>
      <div className={classes.dashbox}>Job Name & Description</div>
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
        />
      </Row>
      <Row>
        <MessageDash />
        <QuotesDash />
      </Row>
      <Row>
        <MilestoneDash />
        <PaymentsDash />
      </Row>
      <div className={classes.dashbox}>Job Name & Description</div>
    </Column>
  );
}
