import React from 'react';
import { useStyles } from './styles';
import { Query } from 'react-apollo';
import { CONVERSATIONS } from '../../../data/queries';
import {
  MessageComponent,
  LoadIcon,
  Column,
  Divider,
} from '../../../components';
import Cookies from 'js-cookie';

export default function Conversations({ history, setConversationObj }) {
  const [conversationArray, setConversationArray] = React.useState([]);
  const userId = Cookies.get('userId');
  return (
    <Column j="flex-start">
      <Divider />
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
    </Column>
  );
}
