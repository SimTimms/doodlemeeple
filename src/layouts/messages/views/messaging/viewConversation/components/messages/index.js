import React, { useEffect } from 'react';
import { useStyles } from '../../styles';
import { Message } from '../message';
import { Button, Icon, Typography } from '@material-ui/core';

import { CreateMessage, LoadIcon } from '../../../../../../../components';
import { Query } from 'react-apollo';
import { CONVERSATION } from '../../../../../../../data/queries';
import { NEW_MESSAGES } from '../../../../../../../data/subscriptions';
import Cookies from 'js-cookie';

function Messages({ data, subscribeToMore }) {
  const classes = useStyles();
  const [pageNbr, setPageNbr] = React.useState(1);
  const thisUserId = Cookies.get('userId');
  const [messageArray, setMessageArray] = React.useState([]);
  const [loadIcon, setLoading] = React.useState(true);
  const [participantArray, setParticipantArray] = React.useState([]);

  useEffect(() => {
    const _subscribeToNewLinks = (subscribeToMore) => {
      subscribeToMore({
        document: NEW_MESSAGES,
        updateQuery: (prev, { subscriptionData }) => {
          //   console.log(subscriptionData);
          /*
          setMessageArray([...messageArray, subscriptionData.data.newMessage]);*/
        },
      });
    };
  }, [subscribeToMore]);

  return (
    <div className={classes.cardGrid}>
      {data.getConversation.messages.map((message, index) => {
        return (
          message.sender && (
            <Message key={`message_${index}`} message={message} />
          )
        );
      })}
      <div>
        {loadIcon ? (
          <LoadIcon />
        ) : (
          <Button
            onClick={() => {
              setLoading(true);
              setPageNbr(pageNbr + 1);
            }}
          >
            <Icon>more_horiz</Icon>
          </Button>
        )}
      </div>
    </div>
  );
}

export default function MessageList({ conversationId, pageNbr }) {
  /*function updateMessageArray(messageIn) {
    setMessageArray([
      {
        messageStr: messageIn,
        createdAt: new Date(),
        id: 'new',
        reciever: { id: '', name: '', profileImg: '' },
        sender: {
          id: thisUserId,
          name: participantArray.filter((user) => user.id === thisUserId)[0]
            .name,
          profileImg: participantArray.filter(
            (user) => user.id === thisUserId,
          )[0].profileImg,
        },
      },
      ...messageArray,
    ]);
  }*/
  return (
    <div>
      <div
        style={{
          padding: 20,
          background: '#fff',
          borderRadius: 10,
          marginTop: 10,
        }}
      >
        {/*  <CreateMessage
          conversationId={conversationId}
          updateMessageArray={updateMessageArray}
        /> */}
      </div>
      <Query
        query={CONVERSATION}
        fetchPolicy="network-only"
        variables={{ conversationId: conversationId, page: pageNbr }}
      >
        {({ data, subscribeToMore }) => {
          //   console.log(data);
          //  _subscribeToNewLinks(messageArray, subscribeToMore);

          return data ? (
            <Messages data={data} subscribeToMore={subscribeToMore} />
          ) : null;
        }}
      </Query>
    </div>
  );
}
