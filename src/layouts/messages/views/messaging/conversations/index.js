import React from 'react';
import { Slide } from '@material-ui/core';
import { useStyles } from './styles';
import { Query } from 'react-apollo';
import { CONVERSATIONS } from '../../../../../data/queries';
import {
  Divider,
  MessageComponent,
  LoadIcon,
  HeaderTwo,
} from '../../../../../components';
import Cookies from 'js-cookie';

export default function Conversations({ history, setConversationArgs }) {
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
                title={conversation.job.name}
                onClickEvent={() => {
                  history.replace(`/app/conversations/${conversation.job._id}`);
                  setConversationArgs({
                    jobId: conversation.job._id,
                    conversationUser:
                      conversation.sender._id !== userId
                        ? conversation.sender
                        : conversation.receiver,
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
