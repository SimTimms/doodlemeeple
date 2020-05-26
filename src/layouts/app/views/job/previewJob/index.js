import React from 'react';
import { Card, Slide, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import {
  ContentHeader,
  IconTitle,
  InlineHeader,
  IconButton,
} from '../../../../../components';
import ViewConversation from '../../../../messages/views/messaging/viewConversation';
import { Query } from 'react-apollo';
import {
  JOB,
  MESSAGES,
  DETERMINE_CONVERSATION_ID,
} from '../../../../../data/queries';

export default function PreviewJob({ theme, jobId, history }) {
  const classes = useStyles();
  const [job, setJob] = React.useState({
    name: '',
    img: '',
    summary: '',
    location: '',
    gallery: {
      images: [],
    },
    game: { name: '', id: '', backgroundImg: '', summary: '' },
    showreel: '',
    type: 'job',
    creativeSummary: '',
    id: 'new',
    gameId: '',
    submitted: false,
    user: { name: '', id: '' },
  });
  const [messages, setMessages] = React.useState('');

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <ContentHeader title={job.name} subTitle="" button={null} />
        <div style={{ width: '100%' }}>
          <Card className={classes.card}>
            <InlineHeader>
              <IconTitle icon="work" title="Brief Details" />
            </InlineHeader>
            <div style={{ padding: 10 }}>
              <Typography variant="body1">{job.summary}</Typography>
            </div>
          </Card>
          <Card className={classes.card}>
            <InlineHeader>
              <IconTitle icon="account_box" title="Creative Details" />
            </InlineHeader>
            <div style={{ padding: 10 }}>
              <Typography variant="body1">{job.creativeSummary}</Typography>
            </div>
          </Card>
          <Card className={classes.card}>
            <InlineHeader>
              <IconTitle icon="casino" title="Game Details" />
            </InlineHeader>
            <div style={{ padding: 10 }}>
              <Typography variant="h2">{job.game.name}</Typography>
              <Typography variant="body1">{job.game.summary}</Typography>
              {job.game.id && (
                <IconButton
                  onClickEvent={() => {
                    history.push(`/app/view-game/${job.game.id}`);
                  }}
                  disabled={false}
                  icon="keyboard_arrow_right"
                  title="View Game"
                />
              )}
            </div>
          </Card>
          <Card className={classes.card}>
            <InlineHeader>
              <IconTitle icon="thumb_up" title="Interested?" />
            </InlineHeader>
            <div style={{ padding: 10, boxSizing: 'border-box' }}>
              <Typography variant="h2">{`Is there anything you would like to ask ${job.user.name}?`}</Typography>
              <Card
                className={classes.card}
                style={{ padding: 10, boxSizing: 'border-box' }}
              >
                <ViewConversation history={history} conversationId={0} />
                {messages}
                <Query
                  query={MESSAGES}
                  variables={{ jobId: job.id }}
                  fetchPolicy="network-only"
                  onCompleted={(data) => {
                    const messageArray = data.getMessages.map((message) => (
                      <div style={{ display: 'flex' }}>
                        <Typography
                          variant="body1"
                          className={classes.messageBox}
                        >
                          {message.messageStr}
                        </Typography>
                        <div style={{ width: '100%' }}></div>
                      </div>
                    ));
                    setMessages(messageArray);
                  }}
                >
                  {({ data }) => {
                    return null;
                  }}
                </Query>
              </Card>
            </div>
          </Card>
        </div>

        <Query
          query={JOB}
          variables={{ jobId: jobId }}
          fetchPolicy="network-only"
          onCompleted={(data) => {
            data.getJob &&
              setJob({ ...data.getJob, gameId: data.getJob.game.id });
          }}
        >
          {({ data }) => {
            return null;
          }}
        </Query>
        <Query
          query={DETERMINE_CONVERSATION_ID}
          variables={{ jobId: jobId }}
          fetchPolicy="network-only"
          onCompleted={(data) => {
            console.log(data);
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
