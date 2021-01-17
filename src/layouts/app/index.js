import React from 'react';
import { useStyles } from './styles';
import { useMediaQuery, Typography } from '@material-ui/core';
import clsx from 'clsx';
import AppDrawer from '../menus/appDrawer';
import AppDashboard from './views/appDashboard';
import AppInvites from './views/appInvites';
import AppHelp from './views/appHelp';
import AppFailedPayment from './views/appFailedPayment';
import AppProfileEdit from './views/appProfileEdit';
import Beta from './views/beta';
import CreativeRoster from './views/creativeRoster';
import { Account } from './views/account';
import { StripeConnect } from './views/stripeConnect';
import FullContract from './views/fullContract';
import { ProjectSubmitted } from './views/submitted';
import { EditGame, PreviewGame, Games } from './views/game';
import { EditJob, Jobs, AppViewJob } from './views/job';
import { AppViewContract, EditContract } from './views/contract';
import Withdraw from './views/withdraw';
import ViewProposal from './views/viewProposal';
import { PickArtist } from './views/pickArtist';
import { NewQuote } from './views/newQuote';
import { ToastContainer } from 'react-toastify';
import { Query } from 'react-apollo';
import { FAVOURITES, PROFILE } from '../../data/queries';
import {
  ContentTop,
  StyledNavBar,
  Row,
  MenuButtonShortcut,
} from '../../components';
import { PreviewProfile } from '../../layouts/preview/views/previewProfile';
import pageHeaders from './pageHeaders';
import * as social from '../../assets/social';

function AppLayout(props) {
  const [page, setPage] = React.useState('home');
  const [favourites, setFavourites] = React.useState([]);
  const [profile, setProfile] = React.useState(null);
  const pageJump = props.match ? props.match.params.page : null;
  const mobile = useMediaQuery('(max-width:700px)');
  const { history } = props;

  //TODO: I guess this is proper dirty
  const pathParam = props
    ? props.match
      ? props.match.params.pathParam
        ? props.match.params.pathParam
        : null
      : null
    : null;

  const searchValues = props
    ? props.location
      ? props.location.search
        ? props.location.search
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
    name: '',
    title: 'What to do if you need help',
    icon: 'contact_support',
    link: () => history.push('/app/help'),
    color: '#222',
    count: 0,
  };

  const creativeRoster = {
    name: '',
    icon: 'image',
    link: () => history.push('/app/creative-roster'),
    color: '#fff',
    count: 0,
    title: 'View a sample of the Creative Roster',
  };

  const twitter = {
    name: '',
    icon: social.socialTwitter,
    link: 'https://twitter.com/doodlemeeple',
    color: '#fff',
    count: 0,
  };

  const facebook = {
    name: '',
    icon: social.socialFacebook,
    link: 'https://www.facebook.com/doodlemeeple/',
    color: '#fff',
    count: 0,
  };
  const linkedIn = {
    name: '',
    icon: social.socialLinkedIn,
    link: 'https://www.linkedin.com/company/72550979',
    color: '#fff',
    count: 0,
  };
  const insta = {
    name: '',
    icon: social.socialInstagram,
    link: 'https://www.instagram.com/doodlemeeple/',
    color: '#fff',
    count: 0,
  };

  return (
    <div className={classes.root}>
      <ToastContainer />
      <StyledNavBar open={open} history={history} theme={props.theme}>
        <Typography variant="h6">{`${
          profile ? profile.name : ''
        } - ${pageHeaders(page)}`}</Typography>

        <div>
          <Row>
            <MenuButtonShortcut
              text={{
                name: twitter.name,
                color: '',
                count: 0,
              }}
              href={twitter.link}
              imageIcon={twitter.icon}
              active={false}
              noPad={true}
            />
            <MenuButtonShortcut
              text={{
                name: linkedIn.name,
                color: '',
                count: 0,
              }}
              href={linkedIn.link}
              imageIcon={linkedIn.icon}
              active={false}
              noPad={true}
            />
            <MenuButtonShortcut
              text={{
                name: insta.name,
                color: '',
                count: 0,
              }}
              href={insta.link}
              imageIcon={insta.icon}
              active={false}
              noPad={true}
            />
            <MenuButtonShortcut
              text={{
                name: facebook.name,
                color: '',
                count: 0,
              }}
              href={facebook.link}
              imageIcon={facebook.icon}
              active={false}
              noPad={true}
            />
            <div
              style={{
                height: '30px',
                borderRight: '1px solid #ddd',
                marginRight: 10,
              }}
            ></div>
            <MenuButtonShortcut
              text={{
                name: creativeRoster.name,
                color: '',
                icon: creativeRoster.icon,
                count: 0,
              }}
              onClickEvent={creativeRoster.link}
              active={false}
              noPad={true}
              title={creativeRoster.title}
            />
            <MenuButtonShortcut
              text={{
                name: helpButton.name,
                color: '',
                icon: helpButton.icon,
                count: 0,
              }}
              onClickEvent={helpButton.link}
              active={false}
              noPad={true}
              title={helpButton.title}
            />
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
          [classes.contentMobile]: mobile,
        })}
      >
        <ContentTop style={{ width: '100%' }}>
          {page === 'dashboard' && profile ? (
            <AppDashboard
              history={history}
              profile={profile}
              setProfile={setProfile}
            />
          ) : page === 'help' ? (
            <AppHelp history={history} />
          ) : page === 'beta' ? (
            <Beta history={history} />
          ) : page === 'help' ? (
            <AppHelp history={history} />
          ) : page === 'failed-payment' ? (
            <AppFailedPayment history={history} />
          ) : page === 'creative-roster' ? (
            <Query query={FAVOURITES} fetchPolicy="network-only">
              {({ data, loading }) => {
                data && console.log(data);
                return loading
                  ? null
                  : data && (
                      <CreativeRoster
                        theme={props.theme}
                        history={history}
                        favourites={data.profile.favourites.map(
                          (fav) => fav.receiver && fav.receiver._id
                        )}
                      />
                    );
              }}
            </Query>
          ) : page === 'account' ? (
            <Account history={history} />
          ) : page === 'stripe-connect' ? (
            <StripeConnect history={history} searchValues={searchValues} />
          ) : page === 'invites' ? (
            <AppInvites history={history} />
          ) : page === 'submitted' ? (
            <ProjectSubmitted history={history} />
          ) : page === 'games' ? (
            <Games history={history} />
          ) : page === 'jobs' ? (
            <Jobs history={history} theme={props.theme} />
          ) : page === 'edit-profile' ? (
            <AppProfileEdit theme={props.theme} history={history} />
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
            <EditJob jobId={pathParam} history={history} />
          ) : page === 'view-job' && profile ? (
            <AppViewJob jobId={pathParam} history={history} />
          ) : page === 'view-proposal' ? (
            <ViewProposal jobId={pathParam} history={history} />
          ) : page === 'view-contract' ? (
            <AppViewContract contractId={pathParam} history={history} />
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
            <Query query={FAVOURITES} fetchPolicy="network-only">
              {({ data }) => {
                console.log(data);
                return (
                  <PickArtist
                    theme={props.theme}
                    jobId={pathParam}
                    autosaveIsOn={true}
                    history={history}
                    favourites={data.profile.favourites.map(
                      (fav) => fav.receiver && fav.receiver._id
                    )}
                  />
                );
              }}
            </Query>
          ) : page === 'create-quote' ? (
            <NewQuote projectId={pathParam} />
          ) : null}
        </ContentTop>
      </main>

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
