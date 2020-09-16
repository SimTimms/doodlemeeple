import React, { useEffect } from 'react';
import { useStyles } from './styles';
import { useMediaQuery } from '@material-ui/core';
import clsx from 'clsx';
import { AppMenu } from '../menus';
import { AppDrawer } from '../menus/appDrawer';
import { Conversations, ViewConversation } from './views/messaging';
import { ToastContainer } from 'react-toastify';
import { GET_MESSAGES, PROFILE } from '../../data/queries';
import { ContentTop, StyledNavBar, LoadIcon } from '../../components';
import { Query } from 'react-apollo';

function MessagesLayout(props) {
  const [page, setPage] = React.useState('home');
  const pageJump = props.match ? props.match.params.page : null;
  const mobile = useMediaQuery('(max-width:800px)');
  const [messages, setMessages] = React.useState([]);
  const [profile, setProfile] = React.useState(null);
  const [conversationArgs, setConversationArgs] = React.useState({
    jobId: null,
    conversationUser: null,
    pageNbr: 0,
  });

  function setPageNbr(nbr) {
    setConversationArgs({
      ...conversationArgs,
      pageNbr: nbr,
    });
  }

  //TODO: I guess this is proper dirty
  const pathParam = props
    ? props.match
      ? props.match.params.pathParam
        ? props.match.params.pathParam
        : null
      : null
    : null;

  useEffect(() => {
    !pathParam &&
      setConversationArgs({
        jobId: null,
        conversationUser: null,
        pageNbr: 0,
      });
    !pathParam && setMessages([]);
  }, [pathParam]);

  if (pageJump !== page) {
    setPage(pageJump);
  }

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  //TODO this is sooooo dirty, but until I can reliably produce subscriptions this is the way it will have to be
  const [refreshCount, setRefreshCount] = React.useState(0);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return !profile ? (
    <div>
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
      <LoadIcon />
    </div>
  ) : (
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
        handleDrawerOpen={handleDrawerOpen}
        open={open}
        history={props.history}
        profile={profile}
      />
      <main
        className={clsx({
          [classes.content]: true,
          [classes.contentMobile]: !open && mobile,
          [classes.contentShift]: open,
        })}
      >
        <ContentTop style={{ width: '100%' }}>
          {!pathParam || !conversationArgs.jobId ? (
            <Conversations
              history={props.history}
              setConversationArgs={setConversationArgs}
            />
          ) : (
            <Query
              query={GET_MESSAGES}
              variables={{
                jobId: conversationArgs.jobId,
                userId: conversationArgs.conversationUser._id,
                pageNbr: conversationArgs.pageNbr,
                count: refreshCount,
              }}
              fetchPolicy="network-only"
              onCompleted={(data) =>
                data.getMessages !== null &&
                setMessages([...data.getMessages.reverse(), ...messages])
              }
            >
              {({ data, loading }) => {
                return loading ? (
                  <LoadIcon />
                ) : data ? (
                  <div className={classes.wrapper4}>
                    <ViewConversation
                      history={props.history}
                      receiver={conversationArgs.conversationUser}
                      jobId={conversationArgs.jobId}
                      messages={messages}
                      pageNbr={conversationArgs.pageNbr}
                      setPageNbr={setPageNbr}
                      setMessages={setMessages}
                      refreshCount={refreshCount}
                      setRefreshCount={setRefreshCount}
                    />
                  </div>
                ) : null;
              }}
            </Query>
          )}
        </ContentTop>
      </main>
    </div>
  );
}

export default MessagesLayout;
