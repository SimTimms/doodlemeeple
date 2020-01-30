import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import SideBar from 'src/sidebars';
import clsx from 'clsx';
import { useStyles } from './styles';
import { StyledNavBar, ContentTop } from 'src/components';
import { AppMenu } from '../menus';
import { AppDrawer } from '../menus/drawer';
import { Dashboard } from './views/Dashboard';
import { Profile } from './views/profile';
import { Account } from './views/Account';
import { Invites } from './views/invites';
import { Project } from './views/project';
import { Jobs } from './views/Jobs';
import { Messages } from './views/Messages';
import { Portfolio } from './views/Portfolio';
import { Projects } from './views/projects';
import { Community } from './views/Community';

function AppLayout(props) {
  const [page, setPage] = React.useState('home');
  const pageJump = props.match ? props.match.params.page : null;

  if (pageJump !== page) {
    setPage(pageJump);
  }

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <CssBaseline />
      <StyledNavBar
        open={open}
        menu={<AppMenu handleDrawerOpen={handleDrawerOpen} open={open} />}
      ></StyledNavBar>
      <AppDrawer handleDrawerClose={handleDrawerClose} open={open} />

      <SideBar />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <ContentTop>
          <div>
            {page === 'dashboard' ? (
              <Dashboard />
            ) : page === 'profile' ? (
              <Profile />
            ) : page === 'account' ? (
              <Account />
            ) : page === 'invites' ? (
              <Invites />
            ) : page === 'jobs' ? (
              <Jobs />
            ) : page === 'projects' ? (
              <Projects />
            ) : page === 'messages' ? (
              <Messages />
            ) : page === 'community' ? (
              <Community />
            ) : page === 'portfolio' ? (
              <Portfolio />
            ) : page === 'projecy' ? (
              <Project />
            ) : null}
          </div>
        </ContentTop>
      </main>
    </div>
  );
}

export default AppLayout;
