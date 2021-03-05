import React, { useEffect } from 'react';
import { useStyles } from './styles';
import { useMediaQuery } from '@material-ui/core';
import clsx from 'clsx';
import AppDrawer from '../menus/appDrawer';
import AppDashboard from './views/appDashboard';
import TaskDashboard from './views/taskDashboard';
import CommunityPage from './views/communityPage';
import NotificationDashboard from './views/notificationDashboard';
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
import { EditQuote } from '../../modules/quotes';
import { AppViewContract, EditContract } from './views/contract';
import Withdraw from './views/withdraw';
import ViewProposal from './views/viewProposal';
import { PickArtist } from './views/pickArtist';
import { NewQuote } from './views/newQuote';
import { ToastContainer } from 'react-toastify';
import { Query } from 'react-apollo';
import { FAVOURITES, PROFILE, PREVIEW_CONTRACT } from '../../data/queries';
import {
  ContentTop,
  StyledNavBar,
  MenuButtonShortcut,
  IconButton,
} from '../../components';
import { PreviewProfile } from '../../layouts/preview/views/previewProfile';
import logout from '../../utils/logout';

function AppLayout(props) {
  const [page, setPage] = React.useState('tasks');
  const [activeButton, setActiveButton] = React.useState('Tasks');
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

  function drawerButtonChange(url, page) {
    setActiveButton(page);
    history.push(url);
  }

  useEffect(() => {
    setActiveButton(page);
  }, [page]);

  return (
    <div className={classes.root}>
      <ToastContainer />
      <StyledNavBar open={open} history={history} theme={props.theme}>
        {page === 'projects' ? (
          <IconButton
            title="Create a Project"
            onClickEvent={() => {
              history.push(`/app/edit-job/new`);
            }}
            icon="add"
          />
        ) : (
          <div></div>
        )}
        <MenuButtonShortcut
          text={{
            name: profile ? profile.name : 'fetching...',
            color: '#222',
            icon: 'face',
            count: 0,
          }}
          onClickEvent={() => {
            history.push('/app/edit-profile');
          }}
          active={false}
          imageIcon={profile && profile.profileImg}
          countIcon="star"
          iconPos="right"
        />
      </StyledNavBar>
      {profile && (
        <AppDrawer
          handleDrawerClose={handleDrawerClose}
          handleDrawerOpen={handleDrawerOpen}
          open={open}
          history={history}
          activeButton={activeButton}
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
          ) : page === 'tasks' && profile ? (
            <TaskDashboard
              history={history}
              profile={profile}
              setProfile={setProfile}
              drawerButtonChange={drawerButtonChange}
            />
          ) : page === 'notifications' && profile ? (
            <NotificationDashboard
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
                return loading
                  ? null
                  : data && (
                      <CreativeRoster
                        theme={props.theme}
                        history={history}
                        favourites={data.profile.favourites.map(
                          (fav) => fav.receiver && fav.receiver._id
                        )}
                        groupIn={pathParam && pathParam}
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
          ) : page === 'projects' ? (
            <Jobs history={history} theme={props.theme} />
          ) : page === 'edit-profile' ? (
            <AppProfileEdit
              theme={props.theme}
              history={history}
              isolate={pathParam}
            />
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
              jobId={pathParam}
              history={history}
              creativeId={pathParam2}
            />
          ) : page === 'edit-quote' ? (
            <Query
              query={PREVIEW_CONTRACT}
              variables={{ contractId: pathParam }}
              fetchPolicy="network-only"
            >
              {({ data, loading }) => {
                return loading
                  ? null
                  : data && (
                      <EditQuote
                        history={history}
                        jobId={pathParam}
                        contractData={data.contractById}
                      />
                    );
              }}
            </Query>
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
          ) : page === 'community' ? (
            <CommunityPage history={history} />
          ) : page === 'public-preview' ? (
            <PreviewProfile
              profileId={pathParam}
              theme={props.theme}
              publicView={true}
              history={history}
            />
          ) : page === 'pick-artist' ? (
            <Query query={FAVOURITES} fetchPolicy="network-only">
              {({ data, loading }) => {
                return loading ? null : (
                  <PickArtist
                    theme={props.theme}
                    jobId={pathParam}
                    creativeId={pathParam2}
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
        onError={(error) => {
          logout(history);
        }}
      >
        {({ data }) => {
          return null;
        }}
      </Query>
    </div>
  );
}

export default AppLayout;
