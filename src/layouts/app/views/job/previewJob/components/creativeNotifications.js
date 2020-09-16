import React from 'react';
import { useStyles } from '../styles';
import { NoticeBox } from '../../../../../../components';

export default function CreativeNotification({
  inviteStatus,
  history,
  jobStatus,
}) {
  const classes = useStyles();

  return inviteStatus === 'declined' ? (
    <NoticeBox
      title="Declined"
      color="warning"
      subTitle="You have declined this invitation"
    />
  ) : jobStatus === 'paid' ? (
    <NoticeBox
      title="Request Payment"
      color="secondary"
      subTitle="You may request payments from the holding account according to your payment schedule"
      actionTitle="Withdraw"
      actionEvent={() => {
        history.push('/app/withdraw/');
      }}
    />
  ) : null;
}
