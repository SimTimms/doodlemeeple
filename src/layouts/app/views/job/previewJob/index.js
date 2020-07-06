import React, { useEffect } from 'react';
import { Card, Slide } from '@material-ui/core';
import { useStyles } from './styles';
import {
  IconTitle,
  InlineHeader,
  IconButton,
  ColumnWrapper,
  HeaderTwo,
  Text,
  TextDivider,
  TextLink,
  Meta,
  Header,
} from '../../../../../components';
import { timeDifferenceForDate } from '../../../../../utils/dates';
import ViewConversation from '../../../../messages/views/messaging/viewConversation';
import { Query } from 'react-apollo';
import { JOB, DETERMINE_CONVERSATION_ID } from '../../../../../data/queries';
import ProposalForm from './components/proposalForm';

export default function PreviewJob({ theme, jobId, history }) {
  const classes = useStyles();
  const [job, setJob] = React.useState({
    id: null,
    name: '',
    img: '',
    summary: '',
    location: '',
    createdAt: '',
    gallery: {
      images: [],
    },
    game: { name: '', id: '', backgroundImg: '', summary: '' },
    showreel: '',
    type: 'job',
    creativeSummary: '',
    gameId: '',
    submitted: false,
    user: { name: '', id: '' },
  });
  const [conversationId, setConversationId] = React.useState(null);
  const [chatOpen, setChatOpen] = React.useState(false);
  const [proposalOpen, setProposalOpen] = React.useState(false);
  const [messagesEnd, setMessagesEnd] = React.useState(null);
  useEffect(() => {
    messagesEnd && messagesEnd.scrollIntoView({ behavior: 'smooth' });
  });

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.rootRow}>
        <div className={classes.root}>
          <ColumnWrapper>
            <Header str="Job Details" />
            <HeaderTwo str={job.name} />
            <Meta
              str={`${timeDifferenceForDate(job.createdAt)} | ${job.user.name}`}
            />
            <Text str={job.summary} />
          </ColumnWrapper>
          <ColumnWrapper>
            <HeaderTwo str="Ideal Creative" />
            <Text str={job.creativeSummary} />
          </ColumnWrapper>
          <ColumnWrapper>
            <HeaderTwo str="The Project" />
            <TextLink
              str={job.game.name}
              onClickEvent={() => {
                history.push(`/app/view-game/${job.game.id}`);
              }}
            />
            <Text str={job.game.summary} />
          </ColumnWrapper>
          <ColumnWrapper>
            <HeaderTwo str="Discuss" />
            <Text
              str={`You've probably got some questions, please feel free to start a discussion with ${job.user.name}`}
            />
            <div
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <IconButton
                disabled={false}
                color="text-dark"
                icon={chatOpen ? 'chat' : 'chat'}
                title={chatOpen ? 'Minimise Chat' : 'Chat'}
                onClickEvent={() => setChatOpen(chatOpen ? false : true)}
                styleOverride={null}
                type="button"
                iconPos="left"
              />
            </div>
            {chatOpen && (
              <div
                style={{
                  padding: 10,
                  boxSizing: 'border-box',
                  display: 'flex',
                  justifyContent: 'center',
                  background: '#efeff5',
                  position: 'relative',
                  width: '100%',
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
            )}
            <TextDivider />
            <div className={classes.actionWrapper}>
              <IconButton
                color="primary"
                disabled={false}
                icon={proposalOpen ? 'fact_check' : 'fact_check'}
                title={proposalOpen ? 'Minimise Quote' : 'Quote'}
                onClickEvent={() =>
                  setProposalOpen(proposalOpen ? false : true)
                }
                styleOverride={{ width: '100%' }}
                type="button"
                iconPos="right"
              />
            </div>

            <div className={classes.actionWrapper}>
              <IconButton
                color="warning"
                disabled={false}
                icon="thumb_down"
                title="Decline"
                onClickEvent={() =>
                  setProposalOpen(proposalOpen ? false : true)
                }
                styleOverride={{ width: '100%' }}
                type="button"
                iconPos="right"
              />
            </div>
          </ColumnWrapper>

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
          {job.id && (
            <Query
              query={DETERMINE_CONVERSATION_ID}
              variables={{ jobId: jobId, userId: job.user.id }}
              fetchPolicy="network-only"
              onCompleted={(data) => {
                setConversationId(data.determineConversationId);
              }}
            >
              {({ data }) => {
                return null;
              }}
            </Query>
          )}
        </div>
        {proposalOpen && (
          <div className={classes.root}>
            <div
              ref={(ele) => {
                setMessagesEnd(ele);
              }}
              style={{ marginTop: -60, paddingTop: 60 }}
            ></div>
            <ColumnWrapper>
              <ProposalForm jobId={jobId} setProposalOpen={setProposalOpen} />
            </ColumnWrapper>
          </div>
        )}
      </div>
    </Slide>
  );
}
