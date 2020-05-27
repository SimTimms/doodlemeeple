import React from 'react';
import { Slide, Button, Icon, Typography, Link } from '@material-ui/core';
import { useStyles } from './styles';
import { Query } from 'react-apollo';
import { CONVERSATION } from '../../../../../data/queries';
import { ContentHeader, LoadIcon } from '../../../../../components';
import Messages from './components/messages';

export default function ViewConversation({ history, conversationId, titles }) {
  const classes = useStyles();
  const [messageArray, setMessageArray] = React.useState([]);
  const [pageNbr, setPageNbr] = React.useState(1);
  const [participantArray, setParticipantArray] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        {titles && (
          <ContentHeader
            title="Chat"
            subTitle={null}
            subTitleExtra={
              <div
                style={{
                  display: 'flex',
                  width: '100%',
                  flexDirection: 'row',
                  flexWrap: 'nowrap',
                  justifyContent: 'center',
                }}
              >
                {participantArray.map((user, index) => {
                  return (
                    <Link
                      href={`/public-preview/${user.id}`}
                      className={classes.participant}
                      key={`participant_${index}`}
                      target="_blank"
                    >
                      <img
                        src={user.profileImg}
                        alt="profile"
                        style={{ width: 30 }}
                      />
                      {
                        <Typography
                          color="textSecondary"
                          component="p"
                          style={{
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'nowrap',
                            alignItems: 'center',
                            marginLeft: 10,
                          }}
                        >
                          {user.name}
                        </Typography>
                      }
                    </Link>
                  );
                })}
              </div>
            }
            button={null}
          />
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
            {({ data, subscribeToMore }) => {
              return data ? (
                <Messages
                  messageArrayIn={data.getConversation.messages}
                  classes={classes}
                  conversationId={conversationId}
                  subscribe={subscribeToMore}
                />
              ) : null;
            }}
          </Query>
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
      </div>
    </Slide>
  );
}
