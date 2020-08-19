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
import { ContentTop, StyledNavBar, MenuButton, Row } from '../../components';
import { PreviewProfile } from '../../layouts/preview/views/previewProfile';
import pageHeaders from './pageHeaders';

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

  const helpButton = {
    name: 'Help',
    icon: <Icon>contact_support</Icon>,
    link: () => props.history.push('/app/help'),
    color: 'white',
    count: 0,
  };
  const alphaButton = {
    name: 'Closed Beta',
    icon: <Icon>construction</Icon>,
    link: () => props.history.push('/app/beta'),
    color: props.theme.palette.error.main,
    count: 0,
  };
  const creativeRoster = {
    name: 'Creatives',
    icon: <Icon>brush</Icon>,
    link: () => props.history.push('/app/creative-roster'),
    color: 'white',
    count: 0,
  };

  return (
    <div className={classes.root}>
      <ToastContainer />
      <StyledNavBar open={open} history={props.history} theme={props.theme}>
        <Typography variant="h5">{pageHeaders(page)}</Typography>
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
      <AppDrawer
        handleDrawerClose={handleDrawerClose}
        handleDrawerOpen={handleDrawerOpen}
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
          ) : page === 'help' ? (
            <Help history={props.history} />
          ) : page === 'beta' ? (
            <Beta history={props.history} />
          ) : page === 'edit-profile' ? (
            <EditProfile theme={props.theme} history={props.history} />
          ) : page === 'creative-roster' ? (
            <CreativeRoster
              theme={props.theme}
              history={props.history}
              favourites={favourites}
            />
          ) : page === 'account' ? (
            <Account history={props.history} />
          ) : page === 'invites' ? (
            <Invites history={props.history} />
          ) : page === 'submitted' ? (
            <ProjectSubmitted history={props.history} />
          ) : page === 'games' ? (
            <Games history={props.history} />
          ) : page === 'jobs' ? (
            <Jobs history={props.history} theme={props.theme} />
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
              history={props.history}
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
          console.log(data);
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
