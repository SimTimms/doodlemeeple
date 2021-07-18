import React from 'react';
import { useStyles } from '../styles';
import { TabPage } from '../../../../../../components';
import NewJobMenu from '../newJobMenu';
import { CreateJob } from '../../../../../../widgets';

export default function NewJobDashboard({ tabNbr }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NewJobMenu />
      <TabPage title="New Job Post" menu={null}>
        <CreateJob />
      </TabPage>
    </div>
  );
}
