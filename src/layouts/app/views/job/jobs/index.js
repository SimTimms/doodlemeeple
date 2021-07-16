import React, { useEffect } from 'react';
import { Slide } from '@material-ui/core';
import { useStyles } from './styles';

import { Column, LoadIcon } from '../../../../../components';
import CreatorJobMenu from './creatorJobMenu';
import JobPosts from './jobPosts';
import InviteDashboard from '../../../views/inviteDashboard';
import { QuoteOutWidget } from '../../../../../widgets';
import JobHistory from './jobHistory';

export default function Jobs({ history, tab }) {
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
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <CreatorJobMenu tabNbr={tabNbr} setTabNbr={setTabNbr} />
        {tabNbr === 1 && <JobPosts history={history} />}
        {tabNbr === 3 && (
          <InviteDashboard history={history} setTabNbr={setTabNbr} />
        )}
        {tabNbr === 4 && <QuoteOutWidget history={history} />}
        {tabNbr === 2 && (
          <Column w={600}>
            <Column a="center" j="flex-start">
              <JobHistory />
            </Column>
          </Column>
        )}
      </div>
    </Slide>
  );
}
