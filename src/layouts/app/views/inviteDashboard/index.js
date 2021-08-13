import React from 'react';
import { Slide } from '@material-ui/core';
import { useStyles } from './styles';
import { MenuContext } from '../../../../context';
import InviteListPage from './inviteListPage';
import QuoteListPage from './quoteListPage';
import { JobDescriptionWidget } from '../../../../widgets';

export default function InviteDashboard({ history }) {
  const classes = useStyles();

  return (
    <MenuContext.Consumer>
      {(menu) => (
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
          <div className={classes.root}>
            {menu.jobPage.secondaryPage === 'invite_list' && (
              <InviteListPage history={history} menu={menu} />
            )}
            {menu.jobPage.secondaryPage === 'view_invite' && (
              <JobDescriptionWidget jobId={menu.jobPage.jobId} />
            )}
          </div>
        </Slide>
      )}
    </MenuContext.Consumer>
  );
}
