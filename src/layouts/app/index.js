import React from 'react';
import { useStyles } from './styles';
import { useMediaQuery } from '@material-ui/core';
import clsx from 'clsx';
import { AppMenu } from '../menus';
import { AppDrawer } from '../menus/appDrawer';
import { Dashboard } from './views/dashboard';
//import { Profile } from './views/profile';
import { EditProfile } from './views/profileEdit';
import { Account } from './views/account';
import { Invites } from './views/invites';
import { Submitted } from './views/submitted';
import { EditGame, PreviewGame, Games } from './views/game';
import { EditJob, Jobs, PreviewJob } from './views/job';
import { PickArtist } from './views/pickArtist';
import { NewQuote } from './views/newQuote';
import { LoadIcon } from '../../components';
import { ToastContainer } from 'react-toastify';
import { Query } from 'react-apollo';
import { AUTOSAVE_IS } from '../../data/queries';
import {
  CardActionArea,
  ActionButton,
  ContentTop,
  StyledNavBar,
} from '../../components';

function AppLayout(props) {
  const [page, setPage] = React.useState('home');
  const [autosaveIsOn, setAutosaveIsOn] = React.useState(true);
  const [favourites, setFavourites] = React.useState([]);
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
    <div className={classes.root}>
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
          ) : page === 'edit-profile' ? (
            <EditProfile theme={props.theme} />
          ) : page === 'account' ? (
            <Account history={props.history} />
          ) : page === 'invites' ? (
            <Invites />
          ) : page === 'submitted' ? (
            <Submitted />
          ) : page === 'games' ? (
            <Games />
          ) : page === 'jobs' ? (
            <Jobs />
          ) : page === 'edit-game' ? (
            <EditGame
              theme={props.theme}
              gameId={pathParam}
              autosaveIsOn={autosaveIsOn}
              history={props.history}
            />
          ) : page === 'view-game' ? (
            <PreviewGame
              theme={props.theme}
              gameId={pathParam}
              autosaveIsOn={autosaveIsOn}
              history={props.history}
            />
          ) : page === 'edit-job' ? (
            <EditJob
              theme={props.theme}
              jobId={pathParam}
              autosaveIsOn={autosaveIsOn}
              history={props.history}
              favourites={favourites}
            />
          ) : page === 'view-job' ? (
            <PreviewJob
              theme={props.theme}
              jobId={pathParam}
              history={props.history}
            />
          ) : page === 'pick-artist' ? (
            <PickArtist
              theme={props.theme}
              jobId={pathParam}
              autosaveIsOn={autosaveIsOn}
              history={props.history}
              favourites={favourites}
            />
          ) : page === 'create-quote' ? (
            <NewQuote projectId={pathParam} />
          ) : null}
        </ContentTop>
      </main>
      <Query
        query={AUTOSAVE_IS}
        onCompleted={(data) => {
          setAutosaveIsOn(data.profile.autosave);
          setFavourites(data.profile.favourites);
          console.log(data);
        }}
        fetchPolicy="network-only"
      >
        {({ loading, error, data }) => {
          if (loading) return <LoadIcon />;
          if (error) return <div>Error</div>;
          return <div></div>;
        }}
      </Query>
    </div>
  );
}

export default AppLayout;
