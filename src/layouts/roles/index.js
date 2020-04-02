import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import clsx from 'clsx';
import { useStyles } from './styles';
import { ContentTop, StyledNavBar } from '../../components';
import { AppMenu } from '../menus';
import { RolesDrawer } from '../menus/rolesDrawer';
import { Dashboard } from './views/dashboard';
import { CreateRole } from './views/createRole';
import { CreatorRoles } from './views/creatorRoles';
import { RolesHistory } from './views/rolesHistory';
import { Invites } from './views/invites';
import { rolesArrayTemp } from '../../testData/roles';
import { Link } from 'react-router-dom';

function RolesLayout(props) {
  const [page, setPage] = React.useState('dashboard');
  const pageJump = props.match ? props.match.params.page : null;
  const paramId = props
    ? props.match
      ? props.match.params.pathParam
        ? props.match.params.pathParam
        : null
      : null
    : null;
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  if (pageJump !== page) {
    setPage(pageJump);
  }

  return (
    <div>
      <CssBaseline />
      <StyledNavBar
        open={open}
        menu={<AppMenu handleDrawerOpen={handleDrawerOpen} open={open} />}
      ></StyledNavBar>

      <RolesDrawer
        handleDrawerClose={handleDrawerClose}
        open={open}
        variant={page}
      />

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <ContentTop>
          <div>
            {page === 'dashboard' ? (
              <Dashboard gameId={paramId} roles={rolesArrayTemp} />
            ) : page === 'create-role' ? (
              <CreateRole gameId={paramId} />
            ) : page === 'invites' ? (
              <Invites roleId={paramId} />
            ) : page === 'invites-sent' ? (
              <div>
                Invites Sent, keep track of this role on your{' '}
                <Link to="../projects">"Projects"</Link> screen
              </div>
            ) : page === 'my-roles' ? (
              <CreatorRoles />
            ) : page === 'history' ? (
              <RolesHistory />
            ) : null}
          </div>
        </ContentTop>
      </main>
    </div>
  );
}

export default RolesLayout;
