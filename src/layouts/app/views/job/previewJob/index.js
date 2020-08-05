import React, { useEffect } from 'react';
import { Slide, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import {
  IconButton,
  ColumnWrapper,
  HeaderTwo,
  Column,
  Text,
  TextDivider,
  Meta,
  UnlockInfoReverse,
  Row,
} from '../../../../../components';
import { timeDifferenceForDate } from '../../../../../utils/dates';
import ViewConversation from '../../../../messages/views/messaging/viewConversation';
import { Query } from 'react-apollo';
import { JOB, DETERMINE_CONVERSATION_ID } from '../../../../../data/queries';
import ProposalForm from './components/proposalForm';
import Cookies from 'js-cookie';
import { Mutation } from 'react-apollo';
import { toaster } from '../../../../../utils/toaster';

import { UPDATE_JOB } from '../../../../../data/mutations';

export default function PreviewJob({ theme, jobId, history }) {
  const classes = useStyles();
  const [job, setJob] = React.useState({
    _id: null,
    name: '',
    img: '',
    summary: '',
    location: '',
    createdAt: '',
    gallery: {
      images: [],
    },
    game: { name: '', _id: '', backgroundImg: '', summary: '' },
    showreel: '',
    type: 'job',
    creativeSummary: '',
    gameId: '',
    submitted: '',
    user: { name: '', _id: '' },
    invites: [
      {
        status: '',
        receiver: {
          _id: '',
          name: '',
          profileImg: '',
        },
      },
    ],
  });
  const [conversationId, setConversationId] = React.useState(null);
  const [chatOpen, setChatOpen] = React.useState(false);
  const [proposalOpen, setProposalOpen] = React.useState(false);
  const [messagesEnd, setMessagesEnd] = React.useState(null);
  const [closeConfirm, setCloseConfirm] = React.useState(false);
  const loggedInUser = Cookies.get('userId');

  useEffect(() => {
    messagesEnd && messagesEnd.scrollIntoView({ behavior: 'smooth' });
  });

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.rootRow}>
        <div className={classes.root}>
          <ColumnWrapper>
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
            {job.submitted === 'closed' && (
              <UnlockInfoReverse str="This project has been closed by the owner" />
            )}
            {loggedInUser === job.user._id && (
              <Column j="center" a="center">
                <HeaderTwo str="Invites" />
                {job.invites.map((invite, index) => (
                  <div style={{ width: '100%' }}>
                    <Row j="flex-start" a="center">
                      <Row j="flex-start" a="center">
                        <div
                          style={{
                            backgroundImage: `url(${invite.receiver.profileImg})`,
                          }}
                          className={classes.profileThumb}
                          key={`profile_${index}`}
                        ></div>
                        <Typography>
                          {invite.receiver.name}{' '}
                          {invite.status
                            ? `(${invite.status})`
                            : '(no response)'}
                        </Typography>
                      </Row>
                      <IconButton
                        disabled={invite.status === 'declined'}
                        color={
                          invite.status === 'declined'
                            ? 'text-white'
                            : 'text-dark'
                        }
                        icon="chat"
                        title="Discuss"
                        onClickEvent={() =>
                          setChatOpen(chatOpen ? false : true)
                        }
                        styleOverride={{
                          color: invite.status === 'declined' && '#fff',
                        }}
                        type="button"
                        iconPos="left"
                      />
                    </Row>
                  </div>
                ))}
              </Column>
            )}
          </ColumnWrapper>

          {/*
          <ColumnWrapper>
            <HeaderTwo str="The Project" />
            <TextLink
              str={job.game.name}
              onClickEvent={() => {
                history.push(`/app/view-game/${job.game._id}`);
              }}
            />
            <Text str={job.game.summary} />
            </ColumnWrapper>*/}
          <ColumnWrapper>
            {job.submitted !== 'closed' && loggedInUser !== job.user._id && (
              <div>
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
              </div>
            )}
            <TextDivider />
            {job.submitted === 'closed' ? null : loggedInUser ===
              job.user._id ? (
              <div className={classes.actionWrapper}>
                {!closeConfirm ? (
                  <IconButton
                    color="warning"
                    disabled={false}
                    icon="close"
                    title="Close Job"
                    onClickEvent={() => setCloseConfirm(true)}
                    styleOverride={{ width: '100%' }}
                    type="button"
                    iconPos="right"
                  />
                ) : (
                  <div
                    style={{
                      background: '#fff',
                      padding: 20,
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant="h6" style={{ marginBottom: 20 }}>
                      This will permanently close the project. Your chosen
                      creatives will be unable to send a quote or discuss this
                      job further.
                    </Typography>
                    <Typography variant="h6">
                      Do you want to continue?
                    </Typography>
                    <Mutation
                      mutation={UPDATE_JOB}
                      variables={{
                        _id: jobId,
                        submitted: 'closed',
                      }}
                      onCompleted={(data) => {
                        toaster('Project Closed');
                      }}
                    >
                      {(mutation) => {
                        return (
                          <IconButton
                            color="warning"
                            disabled={false}
                            icon="warning"
                            title="Confirm"
                            onClickEvent={() => {
                              setJob({ ...job, submitted: 'closed' });
                              mutation();
                            }}
                            styleOverride={{ width: '100%' }}
                            type="button"
                            iconPos="right"
                          />
                        );
                      }}
                    </Mutation>
                    <IconButton
                      color="text-mini"
                      disabled={false}
                      icon=""
                      title="Cancel"
                      onClickEvent={() => setCloseConfirm(false)}
                      styleOverride={{ width: '100%' }}
                      type="button"
                      iconPos="right"
                    />
                  </div>
                )}
              </div>
            ) : (
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
            )}
          </ColumnWrapper>
          <Query
            query={JOB}
            variables={{ jobId: jobId }}
            fetchPolicy="network-only"
            onCompleted={(data) => {
              data.jobById && setJob({ ...data.jobById });
            }}
          >
            {({ data }) => {
              return null;
            }}
          </Query>
          {job._id && (
            <Query
              query={DETERMINE_CONVERSATION_ID}
              variables={{ jobId: jobId, userId: job.user._id }}
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
