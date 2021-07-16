import React, { useEffect } from 'react';
import { useStyles } from './styles';
import { useMediaQuery } from '@material-ui/core';
import clsx from 'clsx';
import AppDrawer from '../menus/appDrawer';
import AppDashboard from './views/appDashboard';
import TaskDashboard from './views/taskDashboard';
import CommunityPage from './views/communityPage';
import NotificationDashboard from './views/notificationDashboard';
import AppInvites from './views/inviteDashboard';
import AppHelp from './views/appHelp';
import AppProfileEdit from './views/appProfileEdit';
import ConversationModule from './views/conversations';
import PickJobType from './views/job/editJob/components/pickJobType';
import ConfirmJob from './views/job/editJob/components/confirmJob';
import SubmitJob from './views/job/editJob/components/submitJob';
import { Account } from './views/account';
import FullContract from './views/fullContract';
import { ProjectSubmitted } from './views/submitted';
import { EditGame, PreviewGame } from './views/game';
import {
  EditJob,
  Jobs,
  AppViewJob,
  AppViewQuoteJob,
  AppViewJobPublic,
} from './views/job';
import { EditQuote } from '../../modules/quotes';
import { EditContract } from './views/contract';
import Withdraw from './views/withdraw';
import ViewProposal from './views/viewProposal';
import { PickArtist } from './views/pickArtist';
import { NewQuote } from './views/newQuote';
import { ToastContainer } from 'react-toastify';
import { Query } from 'react-apollo';
import { FAVOURITES, PROFILE, PREVIEW_CONTRACT } from '../../data/queries';
import { ContentTop, StyledNavBar, MenuButtonShortcut } from '../../components';
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
  Kickstarters,
  Games,
  InviteDetails,
} from '../../widgets';
import { ProfileContext, HistoryContext, UserContext } from '../../context';
import Cookies from 'js-cookie';

export default function AppLayout(props) {
  const [page, setPage] = React.useState('tasks');
  const [activeButton, setActiveButton] = React.useState('Tasks');
  const [profile, setProfile] = React.useState(null);
  const pageJump = props.match ? props.match.params.page : null;
  const mobile = useMediaQuery('(max-width:800px)');
  const { history } = props;
  const userId = Cookies.get('userId');

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
          <div className={classes.root}>
            <ToastContainer />
            <StyledNavBar open={open} history={history} theme={props.theme}>
              {!mobile && (
                <MenuButtonShortcut
                  text={{
                    name: profile ? profile.name : 'Fetching...',
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
              )}
            </StyledNavBar>
            {profile && (
              <AppDrawer
                handleDrawerClose={handleDrawerClose}
                handleDrawerOpen={handleDrawerOpen}
                open={open}
                activeButton={activeButton}
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
                  <Jobs history={history} tab={pathParam} />
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
                ) : page === 'edit-job' ? (
                  <EditJob
                    jobId={pathParam}
                    history={history}
                    creativeId={pathParam2}
                  />
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
                ) : page === 'kickstarters' ? (
                  <Kickstarters history={history} />
                ) : page === 'games' ? (
                  <Games history={history} />
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
                ) : page === 'community' ? (
                  <CommunityPage />
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
                ) : page === 'choose-job-type' ? (
                  <PickJobType
                    jobId={pathParam}
                    creativeId={pathParam2}
                    history={history}
                  />
                ) : page === 'confirm-job' ? (
                  <ConfirmJob jobId={pathParam} history={history} />
                ) : page === 'submit-job' ? (
                  <SubmitJob jobId={pathParam} history={history} />
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
        </UserContext.Provider>
      </ProfileContext.Provider>
    </HistoryContext.Provider>
  );
}
