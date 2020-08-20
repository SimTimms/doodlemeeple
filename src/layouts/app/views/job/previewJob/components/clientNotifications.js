import React from 'react';
import { useStyles } from '../styles';
import { NoticeBox } from '../../../../../../components';

export default function ClientNotification({ jobStatus, job, history }) {
  const classes = useStyles();

  return (
    jobStatus === 'accepted' && (
      <NoticeBox
        title="Payment Required"
        color="primary"
        subTitle="Your Creative cannot start work until the deposit has been paid"
        actionTitle="Deposit Funds"
        actionEvent={() => {
          history.push(`/app/view-contract/${job.contracts[0]._id}`);
        }}
      />
    )
  );
}
