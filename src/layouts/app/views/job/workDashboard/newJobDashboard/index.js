import React, { useEffect } from 'react';
import { useStyles } from '../styles';
import { TabPage } from '../../../../../../components';
import NewJobMenu from '../newJobMenu';
import { EditJob } from '../../../../../../widgets';

export default function NewJobDashboard({ history }) {
  const classes = useStyles();
  const [tabNbr, setTabNbr] = React.useState(1);

  return (
    <div className={classes.root}>
      <NewJobMenu />
      <TabPage title="New Job Post" menu={null}>
        <EditJob jobId={'new'} history={history} />
      </TabPage>
    </div>
  );
}
