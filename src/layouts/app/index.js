import React, { useEffect } from 'react';
import { useStyles } from './styles';
import { useMediaQuery } from '@material-ui/core';
import clsx from 'clsx';
import AppDashboard from './views/appDashboard';
import TaskDashboard from './views/taskDashboard';
import HomePage from './views/homePage';
import NotificationDashboard from './views/notificationDashboard';
import AppInvites from './views/inviteDashboard';
import AppHelp from './views/appHelp';
import AppProfileEdit from './views/appProfileEdit';
import ConversationModule from './views/conversations';
import ConfirmJob from '../../widgets/editJob/components/confirmJob';
import SubmitJob from '../../widgets/editJob/components/submitJob';
import { Account } from './views/account';
import FullContract from './views/fullContract';
import { ProjectSubmitted } from './views/submitted';
import { EditGame, PreviewGame } from './views/game';
import {
  WorkDashboard,
  AppViewJob,
  AppViewQuoteJob,
  AppViewJobPublic,
} from './views/job';
import NewJobDashboard from './views/job/workDashboard/newJobDashboard';
import UpdateJobDashboard from './views/job/workDashboard/updateJobDashboard';
import { EditQuote } from '../../modules/quotes';
import { EditContract } from './views/contract';
import Withdraw from './views/withdraw';
import ViewProposal from './views/viewProposal';
import { PickArtist } from './views/pickArtist';
import { NewQuote } from './views/newQuote';
import { ToastContainer } from 'react-toastify';
import { Query } from 'react-apollo';
import {
  FAVOURITES,
  PROFILE,
  PREVIEW_CONTRACT,
  COUNTS,
} from '../../data/queries';
import { PreviewProfile } from '../../layouts/preview/views/previewProfile';
import logout from '../../utils/logout';
import CreativeRosterWidget from '../../widgets/creativeRoster';
import {
  QuoteInWidget,
  QuoteOutWidget,
  QuoteViewWidget,
  JobBoardWidget,
  FullContractWidget,
  JobDescriptionWidget,
  InviteDetails,
} from '../../widgets';
import {
  ProfileContext,
  HistoryContext,
  UserContext,
  CreativeContext,
  CountContext,
} from '../../context';
import Cookies from 'js-cookie';
import PrimaryMenu from './primaryMenu';

export default function AppLayout(props) {
  const [page, setPage] = React.useState('tasks');
  const [activeButton, setActiveButton] = React.useState('Tasks');
  const [profile, setProfile] = React.useState(null);
  const pageJump = props.match ? props.match.params.page : null;
  const { history } = props;
  const userId = Cookies.get('userId');
  const [counts, setCounts] = React.useState({
    invites: 0,
    messages: 0,
    quotes: 0,
  });
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

  function drawerButtonChange(url, page) {
    setActiveButton(page);
    history.push(url);
  }

  useEffect(() => {
    setActiveButton(page);
  }, [page]);

  return (
    <HistoryContext.Provider value={history}>
      <ProfileContext.Provider value={profile}>
        <UserContext.Provider value={userId}>
          <CountContext.Provider value={counts}>
            <div className={classes.root}>
              <ToastContainer />
              <PrimaryMenu profile={profile} page={page} />
              <main
                className={clsx({
                  [classes.content]: true,
                })}
              >
                {page === 'dashboard' && profile ? (
                  <AppDashboard
                    history={history}
                    profile={profile}
                    setProfile={setProfile}
                  />
                ) : page === 'conversations' ? (
                  <ConversationModule history={history} />
                ) : page === 'invite-details' ? (
                  <InviteDetails jobId={pathParam} />
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
                ) : page === 'help' ? (
                  <AppHelp history={history} />
                ) : page === 'creative-roster' ? (
                  <Query query={FAVOURITES} fetchPolicy="network-only">
                    {({ data, loading }) => {
                      return loading
                        ? null
                        : data && <CreativeRosterWidget history={history} />;
                    }}
                  </Query>
                ) : page === 'account' ? (
                  <Account history={history} />
                ) : page === 'invites' ? (
                  <AppInvites history={history} />
                ) : page === 'submitted' ? (
                  <ProjectSubmitted history={history} />
                ) : page === 'projects' ? (
                  <WorkDashboard history={history} tab={pathParam} />
                ) : page === 'new-job-post' ? (
                  <CreativeContext.Provider value={pathParam}>
                    <NewJobDashboard />
                  </CreativeContext.Provider>
                ) : page === 'update-job' ? (
                  <CreativeContext.Provider>
                    <UpdateJobDashboard jobId={pathParam} />
                  </CreativeContext.Provider>
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
                ) : page === 'job-description' ? (
                  <JobDescriptionWidget jobId={pathParam} history={history} />
                ) : page === 'quotes-out' ? (
                  <QuoteOutWidget history={history} />
                ) : page === 'quotes-in' ? (
                  <QuoteInWidget history={history} />
                ) : page === 'view-quote' ? (
                  <QuoteViewWidget history={history} quoteId={pathParam} />
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
                ) : page === 'view-job' ? (
                  <AppViewJob jobId={pathParam} history={history} />
                ) : page === 'view-quote-job' ? (
                  <AppViewQuoteJob jobId={pathParam} history={history} />
                ) : page === 'contract' ? (
                  <AppViewJob jobId={pathParam} history={history} />
                ) : page === 'view-public-job' ? (
                  <AppViewJobPublic jobId={pathParam} history={history} />
                ) : page === 'job-board' ? (
                  <JobBoardWidget history={history} />
                ) : page === 'view-proposal' ? (
                  <ViewProposal jobId={pathParam} history={history} />
                ) : page === 'view-contract' ? (
                  <EditContract contractId={pathParam} history={history} />
                ) : page === 'view-full-contract' ? (
                  <FullContract contractId={pathParam} history={history} />
                ) : page === 'view-sign-full-contract' ? (
                  <FullContractWidget
                    contractId={pathParam}
                    history={history}
                  />
                ) : page === 'edit-contract' ? (
                  <EditContract contractId={pathParam} history={history} />
                ) : page === 'home' ? (
                  <HomePage />
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
                        <CreativeContext.Provider>
                          <PickArtist
                            theme={props.theme}
                            jobId={pathParam}
                            autosaveIsOn={true}
                            history={history}
                            favourites={data.profile.favourites.map(
                              (fav) => fav.receiver && fav.receiver._id
                            )}
                          />
                        </CreativeContext.Provider>
                      );
                    }}
                  </Query>
                ) : page === 'confirm-job' ? (
                  <ConfirmJob jobId={pathParam} history={history} />
                ) : page === 'submit-job' ? (
                  <SubmitJob jobId={pathParam} history={history} />
                ) : page === 'create-quote' ? (
                  <NewQuote projectId={pathParam} />
                ) : null}
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
              <Query
                query={COUNTS}
                onCompleted={(data) => {
                  setCounts({
                    invites: data.counts.invites,
                    messages: data.counts.messages,
                    quotes: data.counts.quotes,
                  });
                }}
                fetchPolicy="network-only"
              >
                {({ data }) => {
                  return null;
                }}
              </Query>
            </div>
          </CountContext.Provider>
        </UserContext.Provider>
      </ProfileContext.Provider>
    </HistoryContext.Provider>
  );
}
