import React from 'react';
import { NoticeBox } from '../../../../../../components';

export default function CreativeNotifications({
  inviteStatus,
  history,
  jobStatus,
  setTabNbr,
}) {
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
        setTabNbr(4);
      }}
    />
  ) : null;
}
