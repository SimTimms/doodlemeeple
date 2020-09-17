import React from 'react';
import { useStyles } from './styles';
import { useMediaQuery, Typography, Icon } from '@material-ui/core';
import clsx from 'clsx';
import { AppDrawer } from '../menus/appDrawer';
import { Dashboard } from './views/dashboard';
//import { Profile } from './views/profile';
import { EditProfile } from './views/profileEdit';
import Help from './views/help';
import Beta from './views/beta';
import CreativeRoster from './views/creativeRoster';
import { Account } from './views/account';
import FullContract from './views/fullContract';
import { Invites } from './views/invites';
import { ProjectSubmitted } from './views/submitted';
import { EditGame, PreviewGame, Games } from './views/game';
import { EditJob, Jobs, PreviewJob } from './views/job';
import { PreviewContract, EditContract } from './views/contract';
import Withdraw from './views/withdraw';
import { PickArtist } from './views/pickArtist';
import { NewQuote } from './views/newQuote';
import { ToastContainer } from 'react-toastify';
import { Query } from 'react-apollo';
import { FAVOURITES, PROFILE } from '../../data/queries';
import { ContentTop, StyledNavBar, MenuButton, Row } from '../../components';
import { PreviewProfile } from '../../layouts/preview/views/previewProfile';
import pageHeaders from './pageHeaders';

function AppLayout(props) {
  const [page, setPage] = React.useState('home');
  const [favourites, setFavourites] = React.useState([]);
  const [profile, setProfile] = React.useState(null);
  const pageJump = props.match ? props.match.params.page : null;
  const mobile = useMediaQuery('(max-width:800px)');
  const { history } = props;

  //TODO: I guess this is proper dirty
  const pathParam = props
    ? props.match
      ? props.match.params.pathParam
        ? props.match.params.pathParam
        : null
      : null
    : null;

  const pathParam2 = props
    ? props.match
      ? props.match.params.pathParam2
        ? props.match.params.pathParam2
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

  const helpButton = {
    name: 'Help',
    icon: <Icon>contact_support</Icon>,
    link: () => history.push('/app/help'),
    color: props.theme.palette.secondary.main,
    count: 0,
  };
  const alphaButton = {
    name: 'Open Beta',
    icon: <Icon>construction</Icon>,
    link: () => history.push('/app/beta'),
    color: props.theme.palette.secondary.main,
    count: 0,
  };
  const creativeRoster = {
    name: 'Creatives',
    icon: <Icon>brush</Icon>,
    link: () => history.push('/app/creative-roster'),
    color: props.theme.palette.secondary.main,
    count: 0,
  };

  return (
    <div className={classes.root}>
      <ToastContainer />
      <StyledNavBar open={open} history={history} theme={props.theme}>
        <Typography variant="h6">{`${pageHeaders(page)} ${
          profile ? profile.name : ''
        }`}</Typography>
        <div>
          <Row>
            <MenuButton text={alphaButton} onClickEvent={alphaButton.link} />
            <MenuButton
              text={creativeRoster}
              onClickEvent={creativeRoster.link}
            />
            <MenuButton text={helpButton} onClickEvent={helpButton.link} />
          </Row>
        </div>
      </StyledNavBar>
      {profile && (
        <AppDrawer
          handleDrawerClose={handleDrawerClose}
          handleDrawerOpen={handleDrawerOpen}
          open={open}
          history={history}
          page={page}
          profile={profile}
        />
      )}
      <main
        className={clsx({
          [classes.content]: true,
          [classes.contentMobile]: !open && mobile,
          [classes.contentShift]: open,
        })}
      >
        <ContentTop style={{ width: '100%' }}>
          {page === 'dashboard' && profile ? (
            <Dashboard
              history={history}
              profile={profile}
              setProfile={setProfile}
            />
          ) : page === 'help' ? (
            <Help history={history} />
          ) : page === 'beta' ? (
            <Beta history={history} />
          ) : page === 'edit-profile' ? (
            <EditProfile theme={props.theme} history={history} />
          ) : page === 'creative-roster' ? (
            <CreativeRoster
              theme={props.theme}
              history={history}
              favourites={favourites}
            />
          ) : page === 'account' ? (
            <Account history={history} />
          ) : page === 'invites' ? (
            <Invites history={history} theme={props.theme} />
          ) : page === 'submitted' ? (
            <ProjectSubmitted history={history} />
          ) : page === 'games' ? (
            <Games history={history} />
          ) : page === 'jobs' ? (
            <Jobs history={history} theme={props.theme} />
          ) : page === 'edit-game' ? (
            <EditGame
              theme={props.theme}
              gameId={pathParam}
              autosaveIsOn={true}
              history={history}
            />
          ) : page === 'withdraw' ? (
            <Withdraw contractId={pathParam} history={history} />
          ) : page === 'view-game' ? (
            <PreviewGame
              theme={props.theme}
              gameId={pathParam}
              autosaveIsOn={true}
              history={history}
            />
          ) : page === 'edit-job' ? (
            <EditJob
              theme={props.theme}
              jobId={pathParam}
              history={history}
              favourites={favourites}
            />
          ) : page === 'view-job' ? (
            <PreviewJob
              theme={props.theme}
              jobId={pathParam}
              inviteId={pathParam2}
              history={history}
            />
          ) : page === 'view-contract' ? (
            <PreviewContract contractId={pathParam} history={history} />
          ) : page === 'view-full-contract' ? (
            <FullContract contractId={pathParam} history={history} />
          ) : page === 'edit-contract' ? (
            <EditContract contractId={pathParam} history={history} />
          ) : page === 'public-preview' ? (
            <PreviewProfile
              profileId={pathParam}
              theme={props.theme}
              publicView={true}
              history={history}
            />
          ) : page === 'pick-artist' ? (
            <PickArtist
              theme={props.theme}
              jobId={pathParam}
              autosaveIsOn={true}
              history={history}
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
          setFavourites(
            data.profile.favourites.map(
              (fav) => fav.receiver && fav.receiver._id
            )
          );
        }}
        fetchPolicy="network-only"
      >
        {({ data }) => {
          return null;
        }}
      </Query>
      <Query
        query={PROFILE}
        onCompleted={(data) => {
          setProfile(data.profile);
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
