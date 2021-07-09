import React from 'react';
import { Slide } from '@material-ui/core';
import { useStyles } from './styles';
import { Query } from 'react-apollo';
import { CONVERSATIONS } from '../../../data/queries';
import {
  Divider,
  MessageComponent,
  LoadIcon,
  HeaderTwo,
} from '../../../components';
import Cookies from 'js-cookie';

export default function Conversations({ history, setConversationObj }) {
  const classes = useStyles();
  const [conversationArray, setConversationArray] = React.useState([]);
  const userId = Cookies.get('userId');
  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <HeaderTwo str="Conversations" />
        <Divider />
        <div className={classes.cardGrid}>
          {conversationArray.map((conversation, index) => {
            return !conversation.sender ||
              !conversation.receiver ||
              !conversation.job ? null : (
              <MessageComponent
                disabled={false}
                key={`conversationparent_${index}`}
                history={history}
                backgroundImg=""
                subtitle={`${conversation.sender.name}, ${conversation.receiver.name}`}
                profiles={[conversation.sender, conversation.receiver]}
                count={conversation.count}
                title="Conversation"
                onClickEvent={() => {
                  setConversationObj({
                    jobId: conversation.job._id,
                    receiver:
                      userId === conversation.receiver._id
                        ? conversation.sender
                        : conversation.receiver,
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
          onCompleted={(data) => {
            setConversationArray(data.getConversations);
          }}
        >
          {({ data, loading }) => {
            return loading ? <LoadIcon /> : null;
          }}
        </Query>
      </div>
    </Slide>
  );
}
