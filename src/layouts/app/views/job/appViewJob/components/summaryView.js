import React, { useEffect } from 'react';
import { Slide, Typography } from '@material-ui/core';
import { useStyles } from '../styles';
import {
  HeaderTwo,
  HeaderThree,
  Column,
  Meta,
  UnlockInfoReverse,
  MenuButtonShortcut,
  TopMenuWrapper,
  BorderBox,
  Paper,
  IconButton,
  Divider,
} from '../../../../../../components';
import CreatorDashboard from './creatorDashboard/';
import CreativeView from '../components/creativeView';
import CreativeActions from '../components/creativeActions';
import ClientView from '../components/clientView';
import CloseButton from '../components/closeButton';
import ChosenCreative from '../components/chosenCreative';
import PaymentsView from '../components/paymentsView';
import ClientNotifications from '../components/clientNotifications';
import CreativeNotifications from '../components/creativeNotifications';
import ChatView from '../components/chatView';
import { timeDifferenceForDate } from '../../../../../../utils/dates';
import Cookies from 'js-cookie';
import stripeButton from '../../../../../../assets/stripe_button.png';
import { requestStripe } from '../../../../../../utils/stripe';

export default function SummaryView({
  job,
  history,
  jobId,
  inviteId,
  setJob,
  messagesEnd,
  inviteStatus,
  setInviteStatus,
  contracts,
  proposalOpen,
  setProposalOpen,
  stripeID,
}) {
  const classes = useStyles();
  const [conversationUser, setConversationUser] = React.useState(null);
  const [chatOpen, setChatOpen] = React.useState(false);
  const [loadingStripe, setLoadingStripe] = React.useState(false);
  const loggedInUser = Cookies.get('userId');
  const [pageNbr, setPageNbr] = React.useState(0);
  const [tabNbr, setTabNbr] = React.useState(-1);
  const [messages, setMessages] = React.useState([]);
  const isCreator = loggedInUser === job.user._id;
  useEffect(() => {
    messagesEnd && messagesEnd.scrollIntoView({ behavior: 'smooth' });
  });

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <TopMenuWrapper j="center">
          <MenuButtonShortcut
            text={{
              name: 'Dashboard',
              color: '#222',
              icon: 'chevron_right',
              count: 0,
            }}
            onClickEvent={() => {
              setTabNbr(0);
            }}
            column={true}
            active={tabNbr === 0}
          />
          <MenuButtonShortcut
            text={{
              name: 'Summary',
              color: '#222',
              icon: 'list_alt',
              count: 0,
            }}
            onClickEvent={() => {
              setTabNbr(1);
            }}
            column={true}
            active={tabNbr === 1}
          />
          {isCreator && (
            <MenuButtonShortcut
              text={{
                name: 'Creative',
                color: '#222',
                icon: 'brush',
                count: 0,
              }}
              onClickEvent={() => {
                setTabNbr(2);
              }}
              column={true}
              active={tabNbr === 2}
            />
          )}
          {!isCreator && (
            <MenuButtonShortcut
              text={{
                name: 'Client',
                color: '#222',
                icon: 'account_box',
                count: 0,
              }}
              onClickEvent={() => {
                setTabNbr(2);
              }}
              column={true}
              active={tabNbr === 2}
            />
          )}
          {!isCreator && inviteStatus === 'quote_sent' && (
            <MenuButtonShortcut
              text={{
                name: 'My Quote',
                color: '#222',
                icon: 'request_quote',
                count: 0,
              }}
              onClickEvent={() => {
                setTabNbr(6);
              }}
              column={true}
              active={tabNbr === 6}
            />
          )}
          <MenuButtonShortcut
            text={{
              name: 'Payments',
              color: '#222',
              icon: 'credit_card',
              count: 0,
            }}
            onClickEvent={() => {
              setTabNbr(4);
            }}
            column={true}
            active={tabNbr === 4}
          />
        </TopMenuWrapper>

        {isCreator && tabNbr === -1 && (
          <Column>
            <CreatorDashboard job={job} />
          </Column>
        )}

        {!isCreator && (tabNbr === 1 || tabNbr === 0) && (
          <Column>
            <Divider />
            <Paper p={'0'}>
              <CreativeNotifications
                inviteStatus={inviteStatus}
                jobStatus={job.submitted}
                setTabNbr={setTabNbr}
              />
            </Paper>
          </Column>
        )}

        {(tabNbr === 0 || tabNbr === 1) && (
          <Paper pt={16}>
            <Column>
              {loggedInUser === job.user._id && (
                <ClientNotifications
                  jobStatus={job.submitted}
                  job={job}
                  history={history}
                />
              )}

              <HeaderTwo str={job.name} />
              <Meta
                str={`${timeDifferenceForDate(job.createdAt)} | ${
                  job.user.name
                }`}
              />
              <Divider />
              <Typography>{job.summary}</Typography>
              <Divider />
              <Divider />
              <HeaderThree str="Creative Summary" />
              <Divider />
              <Typography>{job.creativeSummary}</Typography>
            </Column>
          </Paper>
        )}

        {job.submitted === 'closed' && (
          <Paper pt={10}>
            <Column>
              <UnlockInfoReverse str="This project has been closed by the owner" />
            </Column>
          </Paper>
        )}
        {job.submitted !== 'accepted' &&
          job.submitted !== 'paid' &&
          loggedInUser === job.user._id && (
            <Paper pt={10}>
              <HeaderTwo str="Invites" />
              <ClientView
                job={job}
                history={history}
                setConversationUser={setConversationUser}
                setChatOpen={setChatOpen}
                chatOpen={chatOpen}
                contracts={job.contracts}
              />
            </Paper>
          )}

        {(tabNbr === 0 || tabNbr === 2) &&
          (job.submitted === 'accepted' || job.submitted === 'paid') &&
          loggedInUser === job.user._id && (
            <Paper pt={10}>
              <Column>
                <ChosenCreative
                  job={job}
                  setProposalOpen={setProposalOpen}
                  contracts={contracts}
                  setConversationUser={setConversationUser}
                  history={history}
                  setChatOpen={setChatOpen}
                  chatOpen={chatOpen}
                />
              </Column>
            </Paper>
          )}
        {!isCreator && (tabNbr === 0 || tabNbr === 2) && (
          <CreativeView
            job={job}
            history={history}
            setConversationUser={setConversationUser}
            setChatOpen={setChatOpen}
            chatOpen={chatOpen}
            displayChat={inviteStatus !== 'declined'}
          />
        )}

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
        {(tabNbr === 0 || tabNbr === 4) && job.submitted === 'paid' && (
          <PaymentsView job={job} />
        )}
        {inviteStatus === 'quote_sent' ? (
          <Column>
            <BorderBox w={300}>
              <Meta str="View your quote for this job " />
              <IconButton
                color="primary"
                icon="preview"
                title="View"
                onClickEvent={() =>
                  history.push(`/app/view-proposal/${job._id}`)
                }
                styleOverride={{ width: '100%' }}
                iconPos="right"
              />
            </BorderBox>
          </Column>
        ) : job.submitted === 'closed' ||
          job.submitted === 'paid' ? null : job.submitted ===
          'accepted' ? null : loggedInUser === job.user._id ? (
          <CloseButton job={job} jobId={jobId} setJob={setJob} />
        ) : inviteStatus !== 'declined' ? (
          <Column>
            <BorderBox w={300}>
              {!stripeID && (
                <Meta str="Setup your STRIPE account to continue." />
              )}
              {loadingStripe ? (
                <Typography
                  variant="h6"
                  style={{ color: '#fff', marginTop: 20 }}
                >
                  Please Wait
                </Typography>
              ) : (
                !stripeID && (
                  <img
                    src={stripeButton}
                    style={{
                      width: 200,
                      marginTop: 20,
                      cursor: 'pointer',
                    }}
                    alt=""
                    onClick={() => {
                      requestStripe();
                      setLoadingStripe(true);
                    }}
                  />
                )
              )}
              {stripeID && (
                <Meta str="Create a quote for this job or decline if it's not for you" />
              )}
              {stripeID && (
                <CreativeActions
                  proposalOpen={proposalOpen}
                  setProposalOpen={setProposalOpen}
                  inviteId={inviteId}
                  setInviteStatus={setInviteStatus}
                />
              )}
            </BorderBox>
          </Column>
        ) : null}
      </div>
    </Slide>
  );
}
