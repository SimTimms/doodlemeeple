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
import { ProjectSubmitted } from './views/submitted';
import { EditGame, PreviewGame, Games } from './views/game';
import { EditJob, Jobs, PreviewJob } from './views/job';
import { PreviewContract, EditContract } from './views/contract';
import { PickArtist } from './views/pickArtist';
import { NewQuote } from './views/newQuote';
import { ToastContainer } from 'react-toastify';
import { Query } from 'react-apollo';
import { FAVOURITES } from '../../data/queries';
import { ContentTop, StyledNavBar } from '../../components';
import { PreviewProfile } from '../../layouts/preview/views/previewProfile';

function AppLayout(props) {
  const [page, setPage] = React.useState('home');
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
        page={page}
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
            <Dashboard history={props.history} />
          ) : page === 'edit-profile' ? (
            <EditProfile theme={props.theme} history={props.history} />
          ) : page === 'account' ? (
            <Account history={props.history} />
          ) : page === 'invites' ? (
            <Invites history={props.history} />
          ) : page === 'submitted' ? (
            <ProjectSubmitted history={props.history} />
          ) : page === 'games' ? (
            <Games history={props.history} />
          ) : page === 'jobs' ? (
            <Jobs history={props.history} />
          ) : page === 'edit-game' ? (
            <EditGame
              theme={props.theme}
              gameId={pathParam}
              autosaveIsOn={true}
              history={props.history}
            />
          ) : page === 'view-game' ? (
            <PreviewGame
              theme={props.theme}
              gameId={pathParam}
              autosaveIsOn={true}
              history={props.history}
            />
          ) : page === 'edit-job' ? (
            <EditJob
              theme={props.theme}
              jobId={pathParam}
              autosaveIsOn={true}
              history={props.history}
              favourites={favourites}
            />
          ) : page === 'view-job' ? (
            <PreviewJob
              theme={props.theme}
              jobId={pathParam}
              history={props.history}
            />
          ) : page === 'view-contract' ? (
            <PreviewContract contractId={pathParam} history={props.history} />
          ) : page === 'edit-contract' ? (
            <EditContract contractId={pathParam} history={props.history} />
          ) : page === 'public-preview' ? (
            <PreviewProfile
              profileId={pathParam}
              theme={props.theme}
              publicView={true}
            />
          ) : page === 'pick-artist' ? (
            <PickArtist
              theme={props.theme}
              jobId={pathParam}
              autosaveIsOn={true}
              history={props.history}
              favourites={favourites}
            />
          ) : page === 'create-quote' ? (
            <NewQuote projectId={pathParam} />
          ) : null}
        </ContentTop>
      </main>
      <Query
        query={FAVOURITES}
        onCompleted={(data) => {
          setFavourites(data.profile.favourites.map((fav) => fav.receiver._id));
        }}
        fetchPolicy="network-only"
      >
        {({ data }) => {
          return null;
        }}
      </Query>
    </div>
  );
}

export default AppLayout;
