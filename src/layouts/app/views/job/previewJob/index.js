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
  Divider,
  UnlockInfoReverse,
  Row,
  NoticeBox,
  Payments,
} from '../../../../../components';
import { timeDifferenceForDate } from '../../../../../utils/dates';
import ViewConversation from '../../../../messages/views/messaging/viewConversation';
import { Query } from 'react-apollo';
import { JOB, GET_MESSAGES, PAYMENTS } from '../../../../../data/queries';
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
            {job.submitted === 'accepted' && (
              <NoticeBox
                title="Payment Required"
                color="primary"
                subTitle="Your Creative cannot start work until the deposit has been paid"
                actionTitle="Deposit Funds"
                actionEvent={() => {
                  history.push(`/app/view-contract/${job.contracts[0]._id}`);
                }}
              />
            )}

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
          {job.submitted !== 'accepted' &&
            job.submitted !== 'paid' &&
            loggedInUser === job.user._id && (
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
                            {invite.status ? `(${invite.status})` : ''}
                          </Typography>
                        </Row>
                        {contracts.indexOf(invite.receiver._id) > -1 && (
                          <IconButton
                            disabled={invite.status === 'declined'}
                            color="primary"
                            icon="request_quote"
                            title="Quote"
                            onClickEvent={() => {
                              history.push(
                                `/app/view-contract/${'contractid'}`
                              );
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
          {(job.submitted === 'accepted' || job.submitted === 'paid') &&
            loggedInUser === job.user._id && (
              <ColumnWrapper>
                <Column j="center" a="center">
                  <HeaderTwo str="Your Creative" />
                  <Divider />
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
                            {invite.status ? `(${invite.status})` : ''}
                          </Typography>
                        </Row>
                        {job.submitted === 'paid' && (
                          <IconButton
                            disabled={false}
                            color="primary"
                            icon="request_quote"
                            title="Contract"
                            onClickEvent={() => {
                              history.push(
                                `/app/view-contract/${job.contracts[0]._id}`
                              );
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
                <Divider />
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
                    color="primary"
                    icon="request_quote"
                    title="Contract"
                    onClickEvent={() => {
                      history.push(
                        `/app/view-contract/${job.contracts[0]._id}`
                      );
                    }}
                    type="button"
                    iconPos="left"
                  />
                  <IconButton
                    disabled={false}
                    color="primary"
                    icon="chat"
                    title="Chat"
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
          {job.submitted === 'paid' && (
            <ColumnWrapper>
              <Column j="center" a="center">
                <HeaderTwo str="Payments" />
                <Query
                  query={PAYMENTS}
                  variables={{ contractId: job.contracts[0]._id }}
                  fetchPolicy="network-only"
                >
                  {({ data }) => {
                    data && console.log(data);
                    return data ? (
                      <Payments data={data.paymentMany.reverse()} />
                    ) : null;
                  }}
                </Query>
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
                      <div className={classes.wrapperTen}>
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
            {job.submitted === 'closed' ||
            job.submitted === 'paid' ? null : job.submitted ===
              'accepted' ? null : loggedInUser === job.user._id ? (
              <div className={classes.actionWrapper}>
                {!closeConfirm ? (
                  <IconButton
                    color="warning"
                    icon="close"
                    title="Close Job"
                    onClickEvent={() => setCloseConfirm(true)}
                    styleOverride={{ width: '100%' }}
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
                            icon="warning"
                            title="Confirm"
                            onClickEvent={() => {
                              setJob({ ...job, submitted: 'closed' });
                              mutation();
                            }}
                            styleOverride={{ width: '100%' }}
                            iconPos="right"
                          />
                        );
                      }}
                    </Mutation>
                    <IconButton
                      color="text-mini"
                      icon=""
                      title="Cancel"
                      onClickEvent={() => setCloseConfirm(false)}
                      styleOverride={{ width: '100%' }}
                      iconPos="right"
                    />
                  </div>
                )}
              </div>
            ) : (
              <div className={classes.actionWrapper}>
                <IconButton
                  color="primary"
                  icon={proposalOpen ? 'fact_check' : 'fact_check'}
                  title={proposalOpen ? 'Minimise Quote' : 'Quote'}
                  onClickEvent={() =>
                    setProposalOpen(proposalOpen ? false : true)
                  }
                  styleOverride={{ width: '100%' }}
                  iconPos="right"
                />

                <IconButton
                  color="warning"
                  icon="thumb_down"
                  title="Decline"
                  onClickEvent={() =>
                    setProposalOpen(proposalOpen ? false : true)
                  }
                  styleOverride={{ width: '100%' }}
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
