import React from 'react';
import { NoticeBox } from '../../../../../../components';

export default function CreativeNotifications({
  inviteStatus,
  jobStatus,
  setTabNbr,
}) {
  console.log(inviteStatus);
  return inviteStatus === 'declined' ? (
    <NoticeBox
      title="Declined"
      color="warning"
      subTitle="You have declined this invitation"
    />
  ) : inviteStatus === 'quote_sent' ? (
    <NoticeBox
      title="Quote Sent"
      color="primary"
      subTitle="You have submitted a quote for this job"
    />
  ) : jobStatus === 'paid' ? (
    <NoticeBox
      title="Request Payment"
      color="secondary"
      subTitle="You may request payments from the holding account according to your payment schedule"
      actionTitle="Withdraw"
      actionEvent={() => {
        setTabNbr(4);
      }}
    />
  ) : null;
}
