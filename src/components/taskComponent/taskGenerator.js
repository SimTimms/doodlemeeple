import { Typography } from '@material-ui/core';
import React from 'react';
import {
  TaskUnreadMessages,
  TaskCheckProject,
  TaskRole,
  TaskSummary,
  TaskAvatar,
  TaskFeature,
  TaskSkill,
  TaskPostJob,
  TaskSocials,
  TaskContact,
  TaskSubmitQuote,
  TaskInvites,
} from '../../modules/tasks';
import preferencesSet from '../../utils/preferencesSet';
import { useStyles } from './styles';

export default function TaskGenerator({
  messages,
  profile,
  data,
  history,
  skills,
  jobs,
  socials,
  contact,
  draftQuotes,
  invites,
}) {
  const classes = useStyles();
  const elementArray = [];
  if (messages > 0) {
    elementArray.push(<TaskUnreadMessages data={data} history={history} />);
  }
  if (jobs > 0) {
    elementArray.push(<TaskCheckProject data={data} history={history} />);
  }
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

  if (jobs === 0 && profile.creatorTrue) {
    elementArray.push(<TaskPostJob history={history} />);
  }

  if (socials === 0) {
    elementArray.push(<TaskSocials history={history} />);
  }

  if (contact === 0) {
    elementArray.push(<TaskContact history={history} />);
  }

  if (draftQuotes > 0) {
    elementArray.push(<TaskSubmitQuote history={history} />);
  }

  if (invites > 0) {
    elementArray.push(<TaskInvites history={history} />);
  }
  return elementArray.length > 0 ? (
    elementArray
  ) : (
    <Typography className={classes.noTask}>No Tasks</Typography>
  );
}
