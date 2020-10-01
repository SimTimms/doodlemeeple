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
import { CreatorDashboard, CreativeDashboard } from './jobDashboards/';
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
  theme,
}) {
  const classes = useStyles();
  const [conversationUser, setConversationUser] = React.useState(null);
  const loggedInUser = Cookies.get('userId');
  const [pageNbr, setPageNbr] = React.useState(0);
  const [tabNbr, setTabNbr] = React.useState(-1);
  const [messages, setMessages] = React.useState([]);
  const isCreator = loggedInUser === job.user._id;
  useEffect(() => {
    messagesEnd && messagesEnd.scrollIntoView({ behavior: 'smooth' });
  });
  console.log(conversationUser);
  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <TopMenuWrapper j="center">
          <MenuButtonShortcut
            text={{
              name: 'Dashboard',
              color: '#222',
              icon: 'dashboard',
              count: 0,
            }}
            onClickEvent={() => {
              setTabNbr(-1);
            }}
            column={true}
            active={tabNbr === -1}
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
          {isCreator && (
            <MenuButtonShortcut
              text={{
                name: 'Cancel Project',
                color: theme.palette.error.main,
                icon: 'close',
                count: 0,
              }}
              onClickEvent={() => {
                setTabNbr(10);
              }}
              column={true}
              active={tabNbr === 10}
            />
          )}
        </TopMenuWrapper>

        {isCreator && tabNbr === -1 && (
          <Column>
            <CreatorDashboard
              job={job}
              setConversationUser={setConversationUser}
            />
          </Column>
        )}

        {!isCreator && tabNbr === -1 && (
          <Column>
            <CreativeDashboard
              job={job}
              setConversationUser={setConversationUser}
            />
          </Column>
        )}

        {conversationUser && (
          <ChatView
            job={job}
            setPageNbr={setPageNbr}
            jobId={jobId}
            conversationUser={conversationUser}
            pageNbr={pageNbr}
            setConversationUser={setConversationUser}
            setMessages={setMessages}
            messages={messages}
            history={history}
          />
        )}

        {tabNbr === 1 && (
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
      </div>
    </Slide>
  );
}
