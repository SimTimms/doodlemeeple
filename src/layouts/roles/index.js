import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import clsx from 'clsx';
import { useStyles } from './styles';
import { StyledNavBar, ContentTop } from '../../components';
import { AppMenu } from '../menus';
import { RolesDrawer } from '../menus/RolesDrawer';
import { Dashboard } from './views/dashboard';
import { CreateRole } from './views/createRole';
import { Invites } from './views/invites';
import { rolesArrayTemp } from '../../testData/roles';

function RolesLayout(props) {
  const [page, setPage] = React.useState('dashboard');
  const pageJump = props.match ? props.match.params.page : null;
  const paramId = props.match
    ? props.match.params.pathParam
      ? props.match.params.pathParam
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
      <RolesDrawer handleDrawerClose={handleDrawerClose} open={open} />

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
            ) : null}
          </div>
        </ContentTop>
      </main>
    </div>
  );
}

export default RolesLayout;