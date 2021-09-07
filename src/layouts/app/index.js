import React from 'react';
import { useStyles } from './styles';
import AppDashboard from './views/appDashboard';
import TaskDashboard from './views/taskDashboard';
import HomePage from './views/homePage';
import WorkPage from './views/workPage';
import JobPage from './views/jobPage';
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
import { PreviewGame } from './views/game';
import { AppViewQuoteJob, AppViewJobPublic } from './views/job';
import UpdateJobDashboard from './views/job/workDashboard/updateJobDashboard';
import { EditQuote } from '../../modules/quotes';
import { EditContract } from './views/contract';
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
  JobBoardWidget,
  FullContractWidget,
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
import { mainMenu } from '../menuArray';
import { MainWrapper, ContentScroll } from '../../components';

export default function AppLayout(props) {
  const { history } = props;

  const [page, setPage] = React.useState('home');
  const [profile, setProfile] = React.useState(null);
  const [counts, setCounts] = React.useState({
    jobAds: 0,
    myJobAds: 0,
    work: 0,
    myWork: 0,
    invites: 0,
    inviteList: 0,
    quotes: 0,
    messages: 0,
    quotesIn: 0,
  });

  const classes = useStyles();
  const pageJump = props.match ? props.match.params.page : null;
  const userId = Cookies.get('userId');

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

  function drawerButtonChange(url, page) {
    history.push(url);
  }

  return (
    <HistoryContext.Provider value={history}>
      <ProfileContext.Provider value={profile}>
        <UserContext.Provider value={userId}>
          <CountContext.Provider value={counts}>
            <MainWrapper>
              <ToastContainer />
              <PrimaryMenu page={page} mainMenu={mainMenu} />
              <ContentScroll>
                {page === 'dashboard' && profile ? (
                  <AppDashboard
                    history={history}
                    profile={profile}
                    setProfile={setProfile}
                  />
                ) : page === 'messages' ? (
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
                ) : page === 'view-game' ? (
                  <PreviewGame
                    theme={props.theme}
                    gameId={pathParam}
                    autosaveIsOn={true}
                    history={history}
                  />
                ) : page === 'quotes-in' ? (
                  <QuoteInWidget history={history} />
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
                ) : page === 'view-quote-job' ? (
                  <AppViewQuoteJob jobId={pathParam} history={history} />
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
                ) : page === 'work' ? (
                  <WorkPage jumpTo={pathParam} />
                ) : page === 'jobs' ? (
                  <JobPage jumpTo={pathParam} />
                ) : page === 'user-profile' ? (
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
              </ContentScroll>
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
                    jobAds: data.counts.unansweredQuotes,
                    myJobAds: data.counts.unansweredQuotes,
                    work:
                      data.counts.invites +
                      data.counts.quotesDeclined +
                      data.counts.quotesAccepted,
                    myWork: data.counts.quotesAccepted,
                    invites: data.counts.invites,
                    inviteList: data.counts.invites,
                    quotes: 0,
                    history: data.counts.quotesDeclined,
                    messages: data.counts.messages,
                  });
                }}
                fetchPolicy="network-only"
              >
                {({ data }) => {
                  return null;
                }}
              </Query>
            </MainWrapper>
          </CountContext.Provider>
        </UserContext.Provider>
      </ProfileContext.Provider>
    </HistoryContext.Provider>
  );
}
