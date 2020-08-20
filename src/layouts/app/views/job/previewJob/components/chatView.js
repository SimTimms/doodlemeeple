import React from 'react';
import { useStyles } from '../styles';
import { IconButton } from '../../../../../../components';
import ViewConversation from '../../../../../messages/views/messaging/viewConversation';
import { Query } from 'react-apollo';
import { GET_MESSAGES } from '../../../../../../data/queries';

export default function ChatView({
  job,
  setPageNbr,
  jobId,
  conversationUser,
  pageNbr,
  setChatOpen,
  setMessages,
  messages,
  history,
}) {
  const classes = useStyles();

  return (
    <Query
      query={GET_MESSAGES}
      variables={{
        jobId: jobId,
        userId: conversationUser._id,
        pageNbr: pageNbr,
      }}
      fetchPolicy="network-only"
      onCompleted={(data) =>
        setMessages([...data.getMessages.reverse(), ...messages])
      }
    >
      {({ data }) => {
        return data ? (
          <div className={classes.wrapperTen}>
            <IconButton
              title="Close"
              icon=""
              iconPos="right"
              color="warning"
              type="button"
              styleOverride={{
                top: 60,
                position: 'fixed',
                zIndex: 10,
              }}
              disabled={false}
              onClickEvent={() => {
                setChatOpen(false);
              }}
            />
            {conversationUser && (
              <ViewConversation
                history={history}
                receiver={conversationUser}
                jobId={job._id}
                messages={messages}
                pageNbr={pageNbr}
                setPageNbr={setPageNbr}
                setMessages={setMessages}
              />
            )}
          </div>
        ) : null;
      }}
    </Query>
  );
}
