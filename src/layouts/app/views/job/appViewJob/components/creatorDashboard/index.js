import React from 'react';
import { useStyles } from './styles';
import { Column, Row } from '../../../../../../../components';
import NotificationDash from './NotificationDash';
import InvitesDash from './InvitesDash';

export default function CreatorDashboard({ job }) {
  const classes = useStyles();
  console.log(job);
  return (
    <Column>
      <Row>
        <NotificationDash jobId={job._id} />
        <InvitesDash invites={job.invites} />
      </Row>
      <div className={classes.dashbox}>Job Name & Description</div>
      <div className={classes.dashbox}>Quote Status</div>
      <div className={classes.dashbox}>Milestone Status</div>
      <div className={classes.dashbox}>Payments</div>
      <div className={classes.dashbox}>Messages</div>
    </Column>
  );
}
