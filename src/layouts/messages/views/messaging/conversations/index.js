import React from 'react';
import { Slide, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { Query, Mutation } from 'react-apollo';
import { CONVERSATIONS } from '../../../../../data/queries';
import { ContentHeader, MessageComponent } from '../../../../../components';
import Cookies from 'js-cookie';

export default function Conversations({ history, setConversationArgs }) {
  const classes = useStyles();
  const [conversationArray, setConversationArray] = React.useState([]);
  const userId = Cookies.get('userId');
  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <ContentHeader
          title="Conversations"
          subTitle=""
          subTitleExtra={null}
          button={null}
        />
        <div className={classes.cardGrid}>
          {conversationArray.map((conversation, index) => {
            return (
              <MessageComponent
                disabled={false}
                key={`conversationparent_${index}`}
                history={history}
                backgroundImg=""
                subtitle={`${conversation.sender.name}, ${conversation.receiver.name}`}
                profiles={[conversation.sender, conversation.receiver]}
                count={conversation.count}
                title={conversation.job.name}
                onClickEvent={() => {
                  history.replace(
                    `/messages/conversations/${conversation.job._id}`
                  );
                  setConversationArgs({
                    jobId: conversation.job._id,
                    conversationUser:
                      conversation.sender._id !== userId
                        ? conversation.sender._id
                        : conversation.receiver._id,
                    pageNbr: 0,
                  });
                }}
                miniProfile={null}
              />
            );
          })}
        </div>
        <Query
          query={CONVERSATIONS}
          variables={{ status: 'submitted' }}
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
