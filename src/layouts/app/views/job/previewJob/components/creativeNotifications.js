import React from 'react';
import { useStyles } from '../styles';
import { NoticeBox } from '../../../../../../components';

export default function CreativeNotification({ inviteStatus, history }) {
  const classes = useStyles();

  return (
    inviteStatus === 'declined' && (
      <NoticeBox
        title="Declined"
        color="warning"
        subTitle="You have declined this invitation"
      />
    )
  );
}
