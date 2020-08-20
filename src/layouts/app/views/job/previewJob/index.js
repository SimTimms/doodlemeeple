import React, { useEffect } from 'react';
import { Slide } from '@material-ui/core';
import { useStyles } from './styles';
import {
  ColumnWrapper,
  HeaderTwo,
  Column,
  Text,
  TextDivider,
  Meta,
  UnlockInfoReverse,
  NoticeBox,
  BorderBox,
} from '../../../../../components';
import CreativeView from './components/creativeView';
import CreativeActions from './components/creativeActions';
import ClientView from './components/clientView';
import CloseButton from './components/closeButton';
import ChosenCreative from './components/chosenCreative';
import PaymentsView from './components/paymentsView';
import ClientNotifications from './components/clientNotifications';
import CreativeNotifications from './components/creativeNotifications';
import ChatView from './components/chatView';
import { timeDifferenceForDate } from '../../../../../utils/dates';
import { Query } from 'react-apollo';
import { JOB, INVITE_BY_ID } from '../../../../../data/queries';
import ProposalForm from './components/proposalForm';
import Cookies from 'js-cookie';

export default function PreviewJob({ theme, jobId, history, inviteId }) {
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

  const [inviteStatus, setInviteStatus] = React.useState('');
  const [chatOpen, setChatOpen] = React.useState(false);
  const [contracts, setContracts] = React.useState([]);
  const [proposalOpen, setProposalOpen] = React.useState(false);
  const [messagesEnd, setMessagesEnd] = React.useState(null);
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
            {loggedInUser === job.user._id && (
              <ClientNotifications
                jobStatus={job.submitted}
                job={job}
                history={history}
              />
            )}
            {loggedInUser !== job.user._id && (
              <CreativeNotifications
                inviteStatus={inviteStatus}
                history={history}
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
              <ClientView
                job={job}
                history={history}
                setConversationUser={setConversationUser}
                setChatOpen={setChatOpen}
                chatOpen={chatOpen}
                contracts={job.contracts}
              />
            )}
          {(job.submitted === 'accepted' || job.submitted === 'paid') &&
            loggedInUser === job.user._id && (
              <ChosenCreative
                job={job}
                setProposalOpen={setProposalOpen}
                contracts={contracts}
                setConversationUser={setConversationUser}
                history={history}
                setChatOpen={setChatOpen}
                chatOpen={chatOpen}
              />
            )}
          {loggedInUser !== job.user._id && (
            <CreativeView
              job={job}
              history={history}
              setConversationUser={setConversationUser}
              setChatOpen={setChatOpen}
              chatOpen={chatOpen}
              displayChat={inviteStatus !== 'declined'}
            />
          )}
          {job.submitted === 'paid' && <PaymentsView job={job} />}
          <ColumnWrapper>
            <div>
              {chatOpen && conversationUser && inviteStatus !== 'declined' && (
                <ChatView
                  job={job}
                  setPageNbr={setPageNbr}
                  jobId={jobId}
                  conversationUser={conversationUser}
                  pageNbr={pageNbr}
                  setChatOpen={setChatOpen}
                  setMessages={setMessages}
                  messages={messages}
                  history={history}
                />
              )}
            </div>
            <TextDivider />
            {job.submitted === 'closed' ||
            job.submitted === 'paid' ? null : job.submitted ===
              'accepted' ? null : loggedInUser === job.user._id ? (
              <CloseButton job={job} jobId={jobId} setJob={setJob} />
            ) : inviteStatus !== 'declined' ? (
              <Column>
                <BorderBox w={300}>
                  <Meta str="Create a quote for this job or decline if it's not for you" />
                  <CreativeActions
                    proposalOpen={proposalOpen}
                    setProposalOpen={setProposalOpen}
                    inviteId={inviteId}
                    setInviteStatus={setInviteStatus}
                  />
                </BorderBox>
              </Column>
            ) : null}
          </ColumnWrapper>
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
        <Query
          query={INVITE_BY_ID}
          variables={{ _id: inviteId }}
          fetchPolicy="network-only"
          onCompleted={(data) => {
            setInviteStatus(data.inviteById.status);
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
