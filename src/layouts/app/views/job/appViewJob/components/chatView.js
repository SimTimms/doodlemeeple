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
  setConversationUser,
  setMessages,
  messages,
  history,
}) {
  const classes = useStyles();
  const [refreshCount, setRefreshCount] = React.useState(0);

  return (
    <Query
      query={GET_MESSAGES}
      variables={{
        jobId: jobId,
        userId: conversationUser._id,
        pageNbr: pageNbr,
        count: refreshCount,
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
                setConversationUser(null);
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
                refreshCount={refreshCount}
                setRefreshCount={setRefreshCount}
              />
            )}
          </div>
        ) : null;
      }}
    </Query>
  );
}
