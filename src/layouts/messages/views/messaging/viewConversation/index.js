import React from 'react';
import { Slide, Button, Icon } from '@material-ui/core';
import { Message } from './components/message';
import { useStyles } from './styles';
import { Query } from 'react-apollo';
import { CONVERSATION } from '../../../../../data/queries';
import {
  ContentHeader,
  CreateMessage,
  LoadIcon,
  DividerWithBorder,
  Uploader,
} from '../../../../../components';
import Cookies from 'js-cookie';

export default function ViewConversation({ history, conversationId }) {
  const classes = useStyles();
  const [messageArray, setMessageArray] = React.useState([]);
  const [pageNbr, setPageNbr] = React.useState(1);
  const [participantArray, setParticipantArray] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const thisUserId = Cookies.get('userId');

  function updateMessageArray(messageIn) {
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
  }

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <ContentHeader
          title="Conversation"
          subTitle={
            <div
              style={{
                display: 'flex',
                width: '100%',
                flexDirection: 'row',
                flexWrap: 'nowrap',
              }}
            >
              {participantArray.map((user, index) => {
                return (
                  <div
                    style={{
                      display: 'flex',
                      width: '100%',
                      flexDirection: 'row',
                      flexWrap: 'nowrap',
                      alignItems: 'center',
                      background: '#fff',
                      margin: 3,
                      borderRadius: 4,
                      padding: 3,
                    }}
                  >
                    <img src={user.profileImg} style={{ width: 30 }}></img>
                    {
                      <div
                        style={{
                          display: 'flex',
                          width: '100%',
                          flexDirection: 'row',
                          flexWrap: 'nowrap',
                          alignItems: 'center',
                        }}
                      >
                        {user.name}
                      </div>
                    }
                  </div>
                );
              })}
            </div>
          }
          button={null}
        />
        <div
          style={{
            padding: 20,
            background: '#fff',
            borderRadius: 10,
            marginTop: 10,
          }}
        >
          <CreateMessage
            conversationId={conversationId}
            updateMessageArray={updateMessageArray}
          />{' '}
          <Uploader
            cbImage={null}
            styleOverride={null}
            className={null}
            cbDelete={null}
            hasFile={false}
            setImagePosition={null}
            size="2MB PNG JPG"
          />
        </div>
        <DividerWithBorder />
        <div className={classes.cardGrid}>
          {messageArray.map((message, index) => {
            return (
              message.sender && (
                <Message key={`project_${index}`} message={message} />
              )
            );
          })}
        </div>
        {loading ? (
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
        <div>
          <Query
            query={CONVERSATION}
            fetchPolicy="network-only"
            variables={{ conversationId: conversationId, page: pageNbr }}
            onCompleted={(data) => {
              setLoading(false);
              setParticipantArray(data.getConversation.participants);
              setMessageArray([
                ...messageArray,
                ...data.getConversation.messages,
              ]);
            }}
          >
            {({ data }) => {
              return null;
            }}
          </Query>
        </div>
      </div>
    </Slide>
  );
}
