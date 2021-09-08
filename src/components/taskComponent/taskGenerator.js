import React from 'react';
import {
  TaskUnreadMessages,
  TaskRole,
  TaskSummary,
  TaskAvatar,
  TaskFeature,
  TaskSkill,
  TaskQuoteDeclined,
  TaskQuoteAccepted,
  TaskSocials,
  TaskContact,
  TaskSubmitQuote,
  TaskInvites,
  TaskCloseProject,
  TaskSubmitDraftProject,
  TaskCommunity,
  UnansweredQuotes,
  TaskPatreon,
} from '../../modules/tasks';
import preferencesSet from '../../utils/preferencesSet';

export default function TaskGenerator({
  data,
  history,
  drawerButtonChange,
  ...props
}) {
  const elementArray = [];
  const {
    messages,
    profile,
    skills,
    jobs,
    socials,
    contact,
    draftQuotes,
    invites,
    totalDeclined,
    draftJobs,
    unansweredQuotes,
    quotesDeclined,
    quotesAccepted,
  } = props;

  if (messages && !jobs && !draftQuotes && !profile && !invites) {
    if (messages > 0) {
      elementArray.push(<TaskUnreadMessages data={data} history={history} />);
    }
  }

  if (jobs) {
    if (totalDeclined > 0) {
      elementArray.push(<TaskCloseProject data={data} history={history} />);
    }
    if (draftJobs > 0) {
      elementArray.push(
        <TaskSubmitDraftProject data={data} history={history} />
      );
    }
    if (unansweredQuotes > 0) {
      elementArray.push(<UnansweredQuotes history={history} />);
    }
  }

  if (profile) {
    if (!preferencesSet(profile)) {
      elementArray.push(<TaskRole history={history} />);
    }

    if (!profile.summary) {
      elementArray.push(<TaskSummary history={history} />);
    }

    if (!profile.profileImg) {
      elementArray.push(<TaskAvatar history={history} />);
    }

    if (!profile.profileBG) {
      elementArray.push(<TaskFeature history={history} />);
    }

    if (skills === 0) {
      elementArray.push(<TaskSkill history={history} />);
    }

    if (socials === 0) {
      elementArray.push(<TaskSocials history={history} />);
    }

    if (contact === 0) {
      elementArray.push(<TaskContact history={history} />);
    }

    elementArray.push(<TaskPatreon data={data} history={history} />);
  }

  if (draftQuotes || invites || quotesDeclined || quotesAccepted) {
    if (draftQuotes > 0) {
      elementArray.push(<TaskSubmitQuote history={history} />);
    }

    if (quotesDeclined > 0) {
      elementArray.push(<TaskQuoteDeclined history={history} />);
    }

    if (quotesAccepted > 0) {
      elementArray.push(<TaskQuoteAccepted history={history} />);
    }

    if (invites > 0) {
      elementArray.push(<TaskInvites history={history} />);
    }
  }
  return elementArray.length > 0 ? (
    elementArray
  ) : (
    <TaskCommunity drawerButtonChange={drawerButtonChange} />
  );
}
