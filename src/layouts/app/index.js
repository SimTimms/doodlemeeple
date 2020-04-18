import React from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import { Button, useMediaQuery } from '@material-ui/core';
import clsx from 'clsx';
import { AppMenu } from '../menus';
import { AppDrawer } from '../menus/appDrawer';
import { Dashboard } from './views/dashboard';
import { Profile } from './views/profile';
import { EditProfile } from './views/profileEdit';
import { Account } from './views/account';
import { Invites } from './views/invites';
import { Project } from './views/project';
import { NewProject } from './views/newProject';
import { NewQuote } from './views/newQuote';
import { Decline } from './views/decline';
import { Projects } from './views/projects';
import { ToastContainer } from 'react-toastify';
import {
  CardActionArea,
  ActionButton,
  ContentTop,
  StyledNavBar,
} from '../../components';
import {
  projectObject,
  projectObjectTwo,
  projectObjectThree,
} from '../../testData/projects';

function AppLayout(props) {
  const [page, setPage] = React.useState('home');
  const [gamesTestData, setGamesTestData] = React.useState([
    projectObject,
    projectObjectTwo,
    projectObjectThree,
  ]);
  const pageJump = props.match ? props.match.params.page : null;
  const mobile = useMediaQuery('(max-width:800px)');

  //TODO: I guess this is proper dirty
  const pathParam = props
    ? props.match
      ? props.match.params.pathParam
        ? props.match.params.pathParam
        : null
      : null
    : null;

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
    <div style={{ height: '100vh', background: '#efeff5' }}>
      <ToastContainer />
      <StyledNavBar
        open={open}
        menu={
          <AppMenu
            handleDrawerOpen={handleDrawerOpen}
            open={open}
            history={props.history}
          />
        }
      ></StyledNavBar>
      <AppDrawer
        handleDrawerClose={handleDrawerClose}
        open={open}
        history={props.history}
      />
      <main
        className={clsx({
          [classes.content]: true,
          [classes.contentMobile]: !open && mobile,
          [classes.contentShift]: open,
        })}
      >
        <ContentTop style={{ width: '100%' }}>
          {page === 'dashboard' ? (
            <Dashboard />
          ) : page === 'profile' ? (
            <Profile />
          ) : page === 'edit-profile' ? (
            <EditProfile theme={props.theme} />
          ) : page === 'account' ? (
            <Account history={props.history} />
          ) : page === 'invites' ? (
            <Invites />
          ) : page === 'projects' ? (
            <Projects gamesTemp={gamesTestData} />
          ) : page === 'edit-project' ? (
            <NewProject
              projectId={pathParam}
              gamesTemp={gamesTestData}
              setGamesTestData={setGamesTestData}
            />
          ) : page === 'view-project' ? (
            <Project
              projectId={pathParam}
              gamesTemp={gamesTestData}
              actionSet={
                <CardActionArea>
                  <Link to="/app/invites">
                    <ActionButton name="Back" />
                  </Link>

                  <Link to={`/app/decline/${pathParam}`}>
                    <ActionButton name="Decline" />
                  </Link>
                  <Link to={`/app/create-quote/${pathParam}`}>
                    <Button variant="contained" color="primary">
                      Continue
                    </Button>
                  </Link>
                </CardActionArea>
              }
              edit={false}
            />
          ) : page === 'new-project' ? (
            <NewProject
              projectId={null}
              gamesTemp={gamesTestData}
              setGamesTestData={setGamesTestData}
            />
          ) : page === 'decline' ? (
            <Decline projectId={pathParam} />
          ) : page === 'create-quote' ? (
            <NewQuote projectId={pathParam} />
          ) : null}
        </ContentTop>
      </main>
    </div>
  );
}

export default AppLayout;
