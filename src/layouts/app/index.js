import React from 'react';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import { useStyles } from './styles';
import { ContentTop } from '../../components';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { StyledNavBar } from '../../components/navBar';
import { AppMenu } from '../menus';
import { AppDrawer } from '../menus/AppDrawer';
import { Dashboard } from './views/dashboard';
import { Profile } from './views/profile';
import { Account } from './views/account';
import { Invites } from './views/invites';
import { Project } from './views/project';
import { NewProject } from './views/newProject';
import { NewQuote } from './views/newQuote';
import { Decline } from './views/decline';
import { Projects } from './views/projects';
import { Link } from 'react-router-dom';
import ActionButton from '../../components/buttons';
import { CardActionArea } from '../../components/wrappers';
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
  //TODO: I guess this is proper dirty
  const pathParam = props.match
    ? props.match.params.pathParam
      ? props.match.params.pathParam
      : null
    : null;

  if (pageJump !== page) {
    setPage(pageJump);
  }

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const theme = createMuiTheme({
    typography: {
      fontFamily: ['Quicksand'].join(','),
      fontSize: 12,
    },
  });

  theme.typography.h1 = { fontFamily: ['Quicksand'].join(','), fontSize: 30 };

  return (
    <div>
      <StyledNavBar
        open={open}
        menu={<AppMenu handleDrawerOpen={handleDrawerOpen} open={open} />}
      ></StyledNavBar>
      <AppDrawer handleDrawerClose={handleDrawerClose} open={open} />
      <ThemeProvider theme={theme}>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
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
                        <Button variant="contained" color="secondary">
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
            </div>
          </ContentTop>
        </main>
      </ThemeProvider>
    </div>
  );
}

export default AppLayout;
