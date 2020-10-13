import React from 'react';
import { useStyles } from './styles';
import { Typography } from '@material-ui/core';
import clsx from 'clsx';
import { Column, Row, Divider } from '../../../../../../../components';
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
      <Divider />
      <Typography
        variant="h5"
        className={clsx({
          [classes.dull]: true,
          [classes.red]: declined,
        })}
      >
        {declined && 'INVITE DECLINED'}
      </Typography>
      <Row a="flex-start">
        <CheckListCreativeDash
          contract={contract}
          invite={invite.data}
          setTabNbr={setTabNbr}
        />
        <SummaryDash
          job={job}
          setConversationUser={setConversationUser}
          declined={declined}
          history={history}
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
