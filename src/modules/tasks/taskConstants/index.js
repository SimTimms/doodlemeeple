import React from 'react';
import { TaskButton } from '../';

export function TaskUnreadMessages({ data, history }) {
  return (
    <TaskButton
      title={
        data.counts.jobs === 1
          ? 'You have an unread message'
          : 'You have unread messages'
      }
      subTitle="Messages"
      icon="mail"
      color="warning"
      clickSound={true}
      zoom={true}
      onClickEvent={() => history.push('/messages/conversations')}
    />
  );
}

export function TaskCheckProject({ data, history }) {
  return (
    <TaskButton
      title={
        data.counts.jobs === 1
          ? 'Check in on your project'
          : 'Check in on your projects'
      }
      subTitle="Projects"
      icon="casino"
      color="warning"
      clickSound={true}
      zoom={true}
      onClickEvent={() => history.push('/app/projects')}
    />
  );
}

export function TaskRole({ history }) {
  return (
    <TaskButton
      title="Client or Contractor"
      subTitle="Preference"
      icon="settings"
      color="secondary"
      clickSound={true}
      zoom={true}
      onClickEvent={() => history.push('/app/edit-profile/preference')}
    />
  );
}

export function TaskSummary({ data, history }) {
  return (
    <TaskButton
      title="Describe Yourself"
      subTitle="Profile"
      icon="face"
      color="warning"
      clickSound={true}
      zoom={true}
      onClickEvent={() => history.push('/app/edit-profile/summary')}
    />
  );
}

export function TaskAvatar({ history }) {
  return (
    <TaskButton
      title="Upload a Profile Picture"
      subTitle="Profile"
      icon="face"
      color="warning"
      clickSound={true}
      zoom={true}
      onClickEvent={() => history.push('/app/edit-profile/avatar')}
    />
  );
}
export function TaskFeature({ history }) {
  return (
    <TaskButton
      title="Add Feature Image"
      subTitle="Profile"
      icon="face"
      color="warning"
      clickSound={true}
      zoom={true}
      onClickEvent={() => history.push('/app/edit-profile/feature')}
    />
  );
}
export function TaskSkill({ history }) {
  return (
    <TaskButton
      title="Add a Skill"
      subTitle="Profile"
      icon="face"
      color="warning"
      clickSound={true}
      zoom={true}
      onClickEvent={() => history.push('/app/edit-profile/skill')}
    />
  );
}
export function TaskPostJob({ history }) {
  return (
    <TaskButton
      title="Post a Job"
      subTitle="Projects"
      icon="work"
      color="primary"
      clickSound={true}
      zoom={true}
      onClickEvent={() => history.push('/app/edit-job/new')}
    />
  );
}

export function TaskSocials({ history }) {
  return (
    <TaskButton
      title="Add Socials"
      subTitle="Contact"
      icon="mail"
      color="secondary"
      clickSound={true}
      zoom={true}
      onClickEvent={() => history.push('/app/edit-profile/social')}
    />
  );
}
export function TaskContact({ history }) {
  return (
    <TaskButton
      title="Add Contact"
      subTitle="Contact"
      icon="mail"
      color="secondary"
      clickSound={true}
      zoom={true}
      onClickEvent={() => history.push('/app/edit-profile/contact')}
    />
  );
}

export function TaskQuote({ setTabNbr }) {
  return (
    <TaskButton
      title="Create a Quote"
      subTitle="Invites"
      icon="mail"
      color="warning"
      clickSound={true}
      zoom={true}
      onClickEvent={() => setTabNbr(6)}
    />
  );
}
