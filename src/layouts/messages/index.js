import React, { useEffect } from 'react';
import { useStyles } from './styles';
import { useMediaQuery } from '@material-ui/core';
import clsx from 'clsx';
import { AppMenu } from '../menus';
import { AppDrawer } from '../menus/appDrawer';
import { Conversations, ViewConversation } from './views/messaging';
import { ToastContainer } from 'react-toastify';
import { Query } from 'react-apollo';
import { GET_MESSAGES } from '../../data/queries';
import { ContentTop, StyledNavBar } from '../../components';

function MessagesLayout(props) {
  const [page, setPage] = React.useState('home');
  const pageJump = props.match ? props.match.params.page : null;
  const mobile = useMediaQuery('(max-width:800px)');
  const [messages, setMessages] = React.useState([]);
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

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
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
        open={open}
        history={props.history}
      />
      <main
        className={clsx({
          [classes.content]: true,
          [classes.contentMobile]: !open && mobile,
          [classes.contentShift]: open,
        })}
      >
        <ContentTop style={{ width: '100%' }}>
          {!pathParam ? (
            <Conversations
              history={props.history}
              setConversationArgs={setConversationArgs}
            />
          ) : (
            <Query
              query={GET_MESSAGES}
              variables={{
                jobId: conversationArgs.jobId,
                userId: conversationArgs.conversationUser,
                pageNbr: conversationArgs.pageNbr,
              }}
              fetchPolicy="network-only"
              onCompleted={(data) =>
                setMessages([...data.getMessages.reverse(), ...messages])
              }
            >
              {({ data }) => {
                return data ? (
                  <div
                    style={{
                      padding: 10,
                      boxSizing: 'border-box',
                      display: 'flex',
                      justifyContent: 'center',
                      background: '#efeff5',
                      position: 'fixed',
                      zIndex: 10,
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      overflow: 'auto',
                    }}
                  >
                    {conversationArgs.conversationUser && (
                      <ViewConversation
                        history={props.history}
                        receiver={conversationArgs.conversationUser}
                        jobId={conversationArgs.jobId}
                        messages={messages}
                        pageNbr={conversationArgs.pageNbr}
                        setPageNbr={setPageNbr}
                        setMessages={setMessages}
                      />
                    )}
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
