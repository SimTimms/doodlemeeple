import React, { useEffect } from 'react';
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
import SubmitJob from '../../widgets/editJob/components/submitJob';
import { Account } from './views/account';
import { ProjectSubmitted } from './views/submitted';
import { AppViewJobPublic } from './views/job';
import UpdateJobDashboard from './views/job/workDashboard/updateJobDashboard';
import { EditQuote } from '../../modules/quotes';
import { EditContract } from './views/contract';
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
  ProfileContext,
  HistoryContext,
  UserContext,
  CreativeContext,
  CountContext,
  MenuContext,
  ParamsContext,
} from '../../context';
import Cookies from 'js-cookie';
import PrimaryMenu from './primaryMenu';
import { mainMenu } from '../menuArray';
import { MainWrapper, ContentScroll } from '../../components';
import Stats from './stats';

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

  const [pageValues, setPageValues] = React.useState({
    savedUserId: null,
    jumpPage: null,
    updateParamsContext: () => {},
  });

  useEffect(() => {
    setPageValues({
      savedUserId: pathParam ? pathParam : null,
      jumpPage: pageJump ? pageJump : null,
    });
  }, [pageJump, pathParam, history]);

  return (
    <ParamsContext.Provider
      value={{
        savedUserId: pageValues.savedUserId,
        jumpPage: pageValues.jumpPage,
        updateParamsContext: setPageValues,
      }}
    >
      <HistoryContext.Provider value={history}>
        <ProfileContext.Provider value={profile}>
          <UserContext.Provider value={userId}>
            <CountContext.Provider value={counts}>
              <MenuContext.Consumer>
                {(menuContext) => (
                  <MainWrapper>
                    <ToastContainer />
                    <PrimaryMenu mainMenu={mainMenu} />
                    <ContentScroll>
                      {menuContext.primaryPage === 'stats' && profile ? (
                        <Stats
                          history={history}
                          profile={profile}
                          setProfile={setProfile}
                        />
                      ) : menuContext.primaryPage === 'dashboard' && profile ? (
                        <AppDashboard
                          history={history}
                          profile={profile}
                          setProfile={setProfile}
                        />
                      ) : menuContext.primaryPage === 'messages' ? (
                        <ConversationModule history={history} />
                      ) : menuContext.primaryPage === 'tasks' && profile ? (
                        <TaskDashboard
                          history={history}
                          profile={profile}
                          setProfile={setProfile}
                          drawerButtonChange={drawerButtonChange}
                        />
                      ) : menuContext.primaryPage === 'notifications' &&
                        profile ? (
                        <NotificationDashboard
                          history={history}
                          profile={profile}
                          setProfile={setProfile}
                        />
                      ) : menuContext.primaryPage === 'help' ? (
                        <AppHelp history={history} />
                      ) : menuContext.primaryPage === 'creative-roster' ? (
                        <Query query={FAVOURITES} fetchPolicy="network-only">
                          {({ data, loading }) => {
                            return loading
                              ? null
                              : data && (
                                  <CreativeRosterWidget history={history} />
                                );
                          }}
                        </Query>
                      ) : menuContext.primaryPage === 'account' ? (
                        <Account history={history} />
                      ) : menuContext.primaryPage === 'invites' ? (
                        <AppInvites history={history} />
                      ) : menuContext.primaryPage === 'submitted' ? (
                        <ProjectSubmitted history={history} />
                      ) : menuContext.primaryPage === 'update-job' ? (
                        <CreativeContext.Provider>
                          <UpdateJobDashboard jobId={pathParam} />
                        </CreativeContext.Provider>
                      ) : menuContext.primaryPage === 'edit-profile' ? (
                        <AppProfileEdit
                          theme={props.theme}
                          history={history}
                          isolate={pathParam}
                        />
                      ) : menuContext.primaryPage === 'edit-quote' ? (
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
                      ) : menuContext.primaryPage === 'view-public-job' ? (
                        <AppViewJobPublic jobId={pathParam} history={history} />
                      ) : menuContext.primaryPage === 'view-contract' ? (
                        <EditContract
                          contractId={pathParam}
                          history={history}
                        />
                      ) : menuContext.primaryPage === 'home' ? (
                        <HomePage />
                      ) : menuContext.primaryPage === 'work' ? (
                        <WorkPage />
                      ) : menuContext.primaryPage === 'jobs' ? (
                        <JobPage jumpTo={pathParam} />
                      ) : menuContext.primaryPage === 'user-profile' ? (
                        <PreviewProfile
                          profileId={pathParam}
                          theme={props.theme}
                          publicView={true}
                          history={history}
                        />
                      ) : menuContext.primaryPage === 'submit-job' ? (
                        <SubmitJob jobId={pathParam} history={history} />
                      ) : null}
                    </ContentScroll>
                    <Query
                      query={PROFILE}
                      onCompleted={(data) => {
                        setProfile(data.profile);
                      }}
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
                )}
              </MenuContext.Consumer>
            </CountContext.Provider>
          </UserContext.Provider>
        </ProfileContext.Provider>
      </HistoryContext.Provider>
    </ParamsContext.Provider>
  );
}
