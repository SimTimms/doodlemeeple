import React from 'react';
import { Slide, Button, Icon, Typography, Link } from '@material-ui/core';
import { useStyles } from './styles';
import { Query } from 'react-apollo';
import { CONVERSATION } from '../../../../../data/queries';
import { ContentHeader, LoadIcon } from '../../../../../components';
import Messages from './components/messages';

export default function ViewConversation({ history, conversationId, titles }) {
  const classes = useStyles();
  const [pageNbr, setPageNbr] = React.useState(1);
  const [messages, setMessages] = React.useState([]);

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        {titles && (
          <ContentHeader
            title="Chat"
            subTitle={null}
            subTitleExtra={null}
            button={null}
          />
        )}
        <div style={{ width: '100%' }}>
          <Query
            query={CONVERSATION}
            fetchPolicy="network-only"
            variables={{ conversationId: conversationId, page: pageNbr }}
            onCompleted={(data) =>
              setMessages([
                ...data.getConversation.messages.reverse(),
                ...messages,
              ])
            }
          >
            {({ data, loading, subscribeToMore }) => {
              return data ? (
                <div style={{ width: '100%' }}>
                  <div
                    style={{
                      display: 'flex',
                      width: '100%',
                      flexDirection: 'row',
                      flexWrap: 'nowrap',
                      justifyContent: 'center',
                    }}
                  >
                    {data.getConversation.participants.map((user, index) => {
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
                  <Messages
                    messageArrayIn={messages}
                    classes={classes}
                    history={history}
                    conversationId={conversationId}
                    subscribe={subscribeToMore}
                    moreButton={
                      <Button
                        onClick={() => {
                          setPageNbr(pageNbr + 1);
                        }}
                      >
                        <Icon>more_horiz</Icon>
                      </Button>
                    }
                  />
                  }
                </div>
              ) : (
                loading && <LoadIcon />
              );
            }}
          </Query>
        </div>
      </div>
    </Slide>
  );
}
