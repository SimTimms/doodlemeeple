import React from 'react';
import { Card, Slide, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import {
  ContentHeader,
  IconTitle,
  InlineHeader,
  IconButton,
  SectionWrapper,
} from '../../../../../components';
import ViewConversation from '../../../../messages/views/messaging/viewConversation';
import { Query } from 'react-apollo';
import { JOB, DETERMINE_CONVERSATION_ID } from '../../../../../data/queries';

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
  const [conversationId, setConversationId] = React.useState(null);
  const [chatOpen, setChatOpen] = React.useState(false);

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <ContentHeader
          title={job.name}
          subTitle=""
          subTitleExtra={null}
          button={null}
        />
        <div style={{ width: '100%' }}>
          <SectionWrapper header="Job Details" button={null}>
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
                    secondaryColor={false}
                    disabled={false}
                    icon="keyboard_arrow_right"
                    title="View Game"
                  />
                )}
              </div>
            </Card>
            <div className={classes.actionWrapper}>
              <IconButton
                disabled={false}
                secondaryColor={true}
                icon={chatOpen ? 'keyboard_arrow_down' : 'chat'}
                title={chatOpen ? 'Close Chat' : 'Open Chat'}
                onClickEvent={() => setChatOpen(chatOpen ? false : true)}
              />
              <IconButton
                disabled={false}
                secondaryColor={false}
                icon="check_circle_outline"
                title="Accept"
                onClickEvent={() => setChatOpen(chatOpen ? false : true)}
              />
            </div>
            {chatOpen && (
              <Card className={classes.card}>
                <InlineHeader>
                  <IconTitle icon="chat" title="Chat" />
                </InlineHeader>
                <div
                  style={{
                    padding: 10,
                    boxSizing: 'border-box',
                    display: 'flex',
                    justifyContent: 'center',
                    background: '#efeff5',
                  }}
                >
                  {conversationId && (
                    <ViewConversation
                      history={history}
                      conversationId={conversationId}
                      titles={false}
                    />
                  )}
                </div>
              </Card>
            )}
          </SectionWrapper>
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
            setConversationId(data.determineConversationId);
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
