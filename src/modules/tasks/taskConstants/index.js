import React from 'react';
import { TaskButton } from '../';
import { Mutation } from 'react-apollo';
import { CREATE_CONTRACT } from '../../../data/mutations';
import { toaster } from '../../../utils/toaster';

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
      color="secondary"
      clickSound={true}
      zoom={true}
      onClickEvent={() => history.push('/app/projects')}
    />
  );
}

export function TaskSubmitDraftProject({ data, history }) {
  return (
    <TaskButton
      title={
        data.counts.draftJobs === 1
          ? 'Submit your Project'
          : 'Submit your projects'
      }
      subTitle="Projects"
      icon="casino"
      color="secondary"
      clickSound={true}
      zoom={true}
      onClickEvent={() => history.push(`/app/view-job/${'d'}`)}
    />
  );
}

export function TaskCloseProject({ data, history }) {
  return (
    <TaskButton
      title="Close an inactive project"
      subTitle="Projects"
      icon="casino"
      color="warning"
      clickSound={true}
      zoom={true}
      onClickEvent={() => history.push('/app/projects')}
    />
  );
}

export function TaskCloseThisProject({ setTabNbr, history }) {
  return (
    <TaskButton
      title="Close this project"
      subTitle="Projects"
      icon="casino"
      color="warning"
      clickSound={true}
      zoom={true}
      onClickEvent={() => setTabNbr(7)}
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

export function TaskInvites({ history }) {
  return (
    <TaskButton
      title="Respond to Invites"
      subTitle="Invites"
      icon="mail"
      color="warning"
      clickSound={true}
      zoom={true}
      onClickEvent={() => history.push('/app/invites')}
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

export function TaskSubmitQuote({ history, quoteId }) {
  return (
    <TaskButton
      title="Complete your quote"
      subTitle="Quotes"
      icon="request_quote"
      color="secondary"
      clickSound={true}
      zoom={true}
      onClickEvent={() =>
        quoteId
          ? history.push(`/app/edit-quote/${quoteId}`)
          : history.push(`/app/invites`)
      }
    />
  );
}

export function TaskQuote({ history, jobId }) {
  return (
    <Mutation
      mutation={CREATE_CONTRACT}
      variables={{ currency: 'GBP', cost: '100', jobId, status: 'draft' }}
      onCompleted={(data) => {
        toaster('Created');
        history.push(`/app/edit-quote/${data.contractCreateOne._id}`);
      }}
    >
      {(mutation) => {
        return (
          <TaskButton
            title="Create a quote"
            subTitle="Quotes"
            icon="request_quote"
            color="secondary"
            clickSound={true}
            zoom={true}
            onClickEvent={() => {
              mutation();
            }}
          />
        );
      }}
    </Mutation>
  );
}

export function TaskDeclineInvite({ setTabNbr }) {
  return (
    <TaskButton
      title="Decline this Invite"
      subTitle="Quotes"
      icon="request_quote"
      color="warning"
      clickSound={true}
      zoom={true}
      onClickEvent={() => {
        setTabNbr(8);
      }}
    />
  );
}

export function TaskEditQuote({ history, setTabNbr }) {
  return (
    <TaskButton
      title="Edit or Retract your quote"
      subTitle="Optional"
      icon="request_quote"
      color="secondary"
      clickSound={true}
      zoom={true}
      onClickEvent={() => setTabNbr(6)}
    />
  );
}
