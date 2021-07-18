import React from 'react';
import { useStyles } from '../styles';
import { TabPage } from '../../../../../../components';
import NewJobMenu from '../newJobMenu';
import { UpdateJob } from '../../../../../../widgets';

export default function UpdateJobDashboard({ jobId }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NewJobMenu />
      <TabPage title="Update Job Post" menu={null}>
        <UpdateJob jobId={jobId} />
      </TabPage>
    </div>
  );
}
