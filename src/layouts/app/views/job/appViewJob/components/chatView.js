import React from 'react';
import { useStyles } from '../styles';
import { IconButton, Row } from '../../../../../../components';
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
            <div
              style={{
                position: 'fixed',
                width: '100%',
                background: '#fff',
                top: 0,
                zIndex: 10,
              }}
            >
              <Row>
                <IconButton
                  icon="close"
                  title=""
                  iconPos="right"
                  color="text-mini"
                  styleOverride={{
                    zIndex: 10,
                  }}
                  onClickEvent={() => {
                    setConversationUser(null);
                  }}
                />
                <IconButton
                  icon="more_horiz"
                  title=""
                  iconPos="right"
                  color="text-mini"
                  onClickEvent={() => {
                    setPageNbr(pageNbr + 1);
                  }}
                />
                <IconButton
                  icon="refresh"
                  title=""
                  iconPos="right"
                  color="text-mini"
                  onClickEvent={() => {
                    setMessages([]);
                    setRefreshCount(refreshCount + 1);
                  }}
                />
              </Row>
            </div>
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
