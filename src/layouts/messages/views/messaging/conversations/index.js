import React from 'react';
import { Slide, Button, Icon } from '@material-ui/core';
import { useStyles } from './styles';
import { Query, Mutation } from 'react-apollo';
import { CONVERSATIONS } from '../../../../../data/queries';
import { ContentHeader, MessageComponent } from '../../../../../components';
import { MARK_AS_READ } from '../../../../../data/mutations';
import Cookies from 'js-cookie';

export default function Conversations({ history }) {
  const classes = useStyles();
  const [conversationArray, setConversationArray] = React.useState([]);

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <ContentHeader title="Conversations" subTitle="" button={null} />
        <div className={classes.cardGrid}>
          {conversationArray.map((conversation, index) => {
            return (
              <Mutation
                key={`mutation_${index}`}
                mutation={MARK_AS_READ}
                variables={{
                  conversationId: conversation.id,
                }}
                onCompleted={() => {
                  history.push(
                    `/messages/view-conversation/${conversation.id}`,
                  );
                }}
              >
                {(mutation) => {
                  return (
                    <MessageComponent
                      key={`conversationparent_${index}`}
                      history={history}
                      backgroundImg={conversation.job.game.backgroundImg}
                      subtitle={conversation.participants.map(
                        (user) =>
                          user.id !== Cookies.get('userId') && user.name,
                      )}
                      profiles={conversation.participants}
                      count={conversation.unreadMessages}
                      title={conversation.job.name}
                      onClickEvent={() => {
                        mutation();
                      }}
                    />
                  );
                }}
              </Mutation>
            );
          })}
        </div>
        <Query
          query={CONVERSATIONS}
          fetchPolicy="network-only"
          onCompleted={(data) => {
            setConversationArray(data.getConversations);
          }}
        >
          {({ data }) => {
            return null;
          }}
        </Query>
      </div>
    </Slide>
  );
}
