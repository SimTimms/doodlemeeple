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
import AppProfileEdit from './views/appProfileEdit';
import ConversationModule from './views/conversations';
import CreativeRoster from './views/creativeRoster';
import { Account } from './views/account';
import FullContract from './views/fullContract';
import { ProjectSubmitted } from './views/submitted';
import { EditGame, PreviewGame, Games } from './views/game';
import { EditQuote } from '../../modules/quotes';
import { AppViewContract, EditContract } from './views/contract';
import Withdraw from './views/withdraw';
import ViewProposal from './views/viewProposal';
import { NewQuote } from './views/newQuote';
import { ToastContainer } from 'react-toastify';
import { Query } from 'react-apollo';
import { FAVOURITES, PROFILE, PREVIEW_CONTRACT } from '../../data/queries';
import { ContentTop, StyledNavBar, MenuButtonShortcut } from '../../components';
import { PreviewProfile } from '../../layouts/preview/views/previewProfile';
import { pathParam } from './helpers';

function AppLayout(props) {
  const { history, profile, setProfile } = props;
  const mobile = useMediaQuery('(max-width:800px)');
  const pageJump = props.match ? props.match.params.page : null;
  const pathParams = pathParam(props);

  const [page, setPage] = React.useState('tasks');
  const [activeButton, setActiveButton] = React.useState('Tasks');

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
        {!mobile && (
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
        )}
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
          ) : page === 'conversations' ? (
            <ConversationModule history={history} />
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
                  : data && (
                      <CreativeRoster
                        theme={props.theme}
                        history={history}
                        favourites={data.profile.favourites.map(
                          (fav) => fav.receiver && fav.receiver._id
                        )}
                        groupIn={pathParams.pathParam1 && pathParams.pathParam1}
                      />
                    );
              }}
            </Query>
          ) : page === 'account' ? (
            <Account history={history} />
          ) : page === 'invites' ? (
            <AppInvites history={history} />
          ) : page === 'submitted' ? (
            <ProjectSubmitted history={history} />
          ) : page === 'games' ? (
            <Games history={history} />
          ) : page === 'edit-profile' ? (
            <AppProfileEdit
              theme={props.theme}
              history={history}
              isolate={pathParams.pathParam1}
            />
          ) : page === 'edit-game' ? (
            <EditGame
              theme={props.theme}
              gameId={pathParams.pathParam1}
              autosaveIsOn={true}
              history={history}
            />
          ) : page === 'withdraw' ? (
            <Withdraw contractId={pathParams.pathParam1} history={history} />
          ) : page === 'view-game' ? (
            <PreviewGame
              theme={props.theme}
              gameId={pathParams.pathParam1}
              autosaveIsOn={true}
              history={history}
            />
          ) : page === 'edit-quote' ? (
            <Query
              query={PREVIEW_CONTRACT}
              variables={{ contractId: pathParams.pathParam1 }}
              fetchPolicy="network-only"
            >
              {({ data, loading }) => {
                return loading
                  ? null
                  : data && (
                      <EditQuote
                        history={history}
                        jobId={pathParams.pathParam1}
                        contractData={data.contractById}
                      />
                    );
              }}
            </Query>
          ) : page === 'view-proposal' ? (
            <ViewProposal jobId={pathParams.pathParam1} history={history} />
          ) : page === 'view-contract' ? (
            <AppViewContract
              contractId={pathParams.pathParam1}
              history={history}
            />
          ) : page === 'view-full-contract' ? (
            <FullContract
              contractId={pathParams.pathParam1}
              history={history}
            />
          ) : page === 'edit-contract' ? (
            <EditContract
              contractId={pathParams.pathParam1}
              history={history}
            />
          ) : page === 'community' ? (
            <CommunityPage history={history} />
          ) : page === 'public-preview' ? (
            <PreviewProfile
              profileId={pathParams.pathParam1}
              theme={props.theme}
              publicView={true}
              history={history}
            />
          ) : page === 'create-quote' ? (
            <NewQuote projectId={pathParams.pathParam1} />
          ) : null}
        </ContentTop>
      </main>
    </div>
  );
}

export default AppLayout;
