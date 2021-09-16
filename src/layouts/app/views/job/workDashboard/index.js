import React, { useEffect } from 'react';
import { useStyles } from './styles';
import { Column, TabPage, IconButton } from '../../../../../components';
import InviteDashboard from '../../../views/inviteDashboard';
import { QuoteOutWidget, UpdateJob } from '../../../../../widgets';

export default function WorkDashboard({ history, tab }) {
  const classes = useStyles();
  const [tabNbr, setTabNbr] = React.useState(1);

  useEffect(() => {
    setTabNbr(
      tab === 'quotes'
        ? 4
        : tab === 'invites'
        ? 3
        : tab === 'jobs'
        ? 1
        : tab === 'history'
        ? 2
        : 1
    );
  }, [tab]);

  return (
    <div className={classes.root}>
      {tabNbr === 5 && (
        <TabPage
          title="New Job Post"
          menu={
            <IconButton
              title="Back"
              onClickEvent={() => {
                setTabNbr(1);
              }}
              icon="chevron_left"
              color="primary"
            />
          }
        >
          <UpdateJob jobId={'new'} history={history} />
        </TabPage>
      )}

      {tabNbr === 4 && <QuoteOutWidget history={history} />}
    </div>
  );
}
