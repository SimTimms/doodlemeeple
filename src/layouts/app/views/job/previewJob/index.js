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
import { JOB, GET_MESSAGES } from '../../../../../data/queries';
import ProposalForm from './components/proposalForm';
import Cookies from 'js-cookie';
import { Mutation } from 'react-apollo';
import { toaster } from '../../../../../utils/toaster';
import { CLOSE_JOB } from '../../../../../data/mutations';

export default function PreviewJob({ theme, jobId, history }) {
  const classes = useStyles();
  const [conversationUser, setConversationUser] = React.useState(null);
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
    contracts: [],
    user: { name: '', _id: '', profileImg: '' },
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
  const [chatOpen, setChatOpen] = React.useState(false);
  const [contracts, setContracts] = React.useState([]);
  const [proposalOpen, setProposalOpen] = React.useState(false);
  const [messagesEnd, setMessagesEnd] = React.useState(null);
  const [closeConfirm, setCloseConfirm] = React.useState(false);
  const loggedInUser = Cookies.get('userId');
  const [pageNbr, setPageNbr] = React.useState(0);
  const [messages, setMessages] = React.useState([]);

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

          {job.submitted === 'closed' && (
            <ColumnWrapper>
              <UnlockInfoReverse str="This project has been closed by the owner" />
            </ColumnWrapper>
          )}
          {loggedInUser === job.user._id && (
            <ColumnWrapper>
              <Column j="center" a="center">
                <HeaderTwo str="Invites" />
                {job.invites.map((invite, index) => (
                  <div style={{ width: '100%' }} key={`invite-${index}`}>
                    <Row j="flex-start" a="center">
                      <Row j="flex-start" a="center">
                        <div
                          style={{
                            backgroundImage: `url(${invite.receiver.profileImg})`,
                          }}
                          className={classes.profileThumb}
                          key={`profile_${index}`}
                        >
                          {contracts.indexOf(invite.receiver._id) > -1 && (
                            <Typography
                              variant="body1"
                              component="p"
                              className={classes.countsStyle}
                            >
                              1
                            </Typography>
                          )}
                        </div>
                        <Typography>
                          {invite.receiver.name}{' '}
                          {invite.status ? `(${invite.status})` : '(pending)'}
                        </Typography>
                      </Row>
                      {contracts.indexOf(invite.receiver._id) > -1 && (
                        <IconButton
                          disabled={invite.status === 'declined'}
                          color="primary"
                          icon="request_quote"
                          title="Quote"
                          onClickEvent={() => {
                            setConversationUser(invite.receiver);
                            setChatOpen(chatOpen ? false : true);
                          }}
                          styleOverride={{
                            color: invite.status === 'declined' && '#fff',
                          }}
                          type="button"
                          iconPos="left"
                        />
                      )}

                      <IconButton
                        disabled={invite.status === 'declined'}
                        color={
                          invite.status === 'declined'
                            ? 'text-white'
                            : 'primary'
                        }
                        icon="chat"
                        title="Chat"
                        onClickEvent={() => {
                          setConversationUser(invite.receiver);
                          setChatOpen(chatOpen ? false : true);
                        }}
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
            </ColumnWrapper>
          )}
          {loggedInUser !== job.user._id && (
            <ColumnWrapper>
              <Column j="center" a="center">
                <HeaderTwo str="Project Creator" />
                <Row j="flex-start" a="center">
                  <Row j="flex-start" a="center">
                    <div
                      style={{
                        backgroundImage: `url(${job.user.profileImg})`,
                      }}
                      className={classes.profileThumb}
                    ></div>
                    <Typography>{job.user.name}</Typography>
                  </Row>
                  <IconButton
                    disabled={false}
                    color="text-dark"
                    icon="chat"
                    title="Discuss"
                    onClickEvent={() => {
                      setConversationUser(job.user);
                      setChatOpen(chatOpen ? false : true);
                    }}
                    styleOverride={null}
                    type="button"
                    iconPos="left"
                  />
                </Row>
              </Column>
            </ColumnWrapper>
          )}

          <ColumnWrapper>
            <div>
              {chatOpen && conversationUser && (
                <Query
                  query={GET_MESSAGES}
                  variables={{
                    jobId: jobId,
                    userId: conversationUser._id,
                    pageNbr: pageNbr,
                  }}
                  fetchPolicy="network-only"
                  onCompleted={(data) =>
                    setMessages([...data.getMessages.reverse(), ...messages])
                  }
                >
                  {({ data }) => {
                    return data ? (
                      <div
                        style={{
                          padding: 10,
                          boxSizing: 'border-box',
                          display: 'flex',
                          justifyContent: 'center',
                          background: '#efeff5',
                          position: 'fixed',
                          zIndex: 10,
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          overflow: 'auto',
                        }}
                      >
                        <IconButton
                          title="Close"
                          icon=""
                          iconPos="right"
                          color="warning"
                          type="button"
                          styleOverride={{
                            top: 60,
                            position: 'fixed',
                            zIndex: 10,
                          }}
                          disabled={false}
                          onClickEvent={() => {
                            setChatOpen(false);
                          }}
                        />
                        {conversationUser && (
                          <ViewConversation
                            history={history}
                            receiver={conversationUser}
                            jobId={job._id}
                            messages={messages}
                            pageNbr={pageNbr}
                            setPageNbr={setPageNbr}
                            setMessages={setMessages}
                          />
                        )}
                      </div>
                    ) : null;
                  }}
                </Query>
              )}
            </div>
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
                      mutation={CLOSE_JOB}
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
              const contractIds = data.jobById.contracts.map(
                (contract) => contract.user._id
              );
              setContracts(contractIds);
              data.jobById && setJob({ ...data.jobById });
            }}
          >
            {({ data }) => {
              return null;
            }}
          </Query>
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
