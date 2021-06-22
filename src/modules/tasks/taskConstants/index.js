import React from 'react';
import { TaskButton } from '../';
//import { Mutation } from 'react-apollo';
import { toaster } from '../../../utils/toaster';

export function TaskUnreadMessages({ data, history }) {
  return (
    <TaskButton
      title={`Read Message${data.counts.jobs > 1 ? 's' : ''}`}
      subTitle="Messages"
      icon="mail"
      color="warning"
      clickSound={true}
      zoom={true}
      onClickEvent={() => history.push('/app/conversations')}
    />
  );
}

export function TaskPatreon({ data, history }) {
  return (
    <TaskButton
      title="Perk up your account"
      subTitle="Patreon"
      icon="work"
      color="primary"
      clickSound={true}
      zoom={true}
      onClickEvent={() =>
        (window.location = process.env.REACT_APP_PATREON_LINK)
      }
    />
  );
}

export function TaskCheckProject({ data, history }) {
  return (
    <TaskButton
      title={
        data.counts.jobs === 1 ? 'Check your project' : 'Check your projects'
      }
      subTitle="Project"
      icon="work"
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
      subTitle="Project"
      icon="work"
      color="secondary"
      clickSound={true}
      zoom={true}
      onClickEvent={() => history.push('/app/projects')}
    />
  );
}

export function TaskCloseProject({ data, history }) {
  return (
    <TaskButton
      title="Close inactive project"
      subTitle="Project"
      icon="work"
      color="secondary"
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
      subTitle="Optional"
      icon="alt_route"
      color="grey"
      clickSound={true}
      zoom={true}
      onClickEvent={() => setTabNbr(7)}
    />
  );
}

export function TaskOpenQuote({ setOpenQuoteId }) {
  return (
    <TaskButton
      title="Reply to a Quote"
      subTitle="Project"
      icon="work"
      color="secondary"
      clickSound={true}
      zoom={true}
      onClickEvent={() => setOpenQuoteId()}
    />
  );
}

export function UnansweredQuotes({ history }) {
  return (
    <TaskButton
      title="You have a Quote"
      subTitle="Project"
      icon="work"
      color="secondary"
      clickSound={true}
      zoom={true}
      onClickEvent={() => history.push('/app/projects')}
    />
  );
}

export function TaskRole({ history }) {
  return (
    <TaskButton
      title="Client or Creative"
      subTitle="Preference"
      icon="work"
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
      subTitle="Project"
      icon="work"
      color="primary"
      clickSound={true}
      zoom={true}
      onClickEvent={() => history.push('/app/edit-job/new')}
    />
  );
}

export function TaskContinueWithJobDraft({ jobId, history }) {
  return (
    <TaskButton
      title="Submit this Project"
      subTitle="Project"
      icon="work"
      color="primary"
      clickSound={true}
      zoom={true}
      onClickEvent={() => history.push(`/app/edit-job/${jobId}`)}
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
{
  /*
export function TaskQuote({ history, jobId }) {
  return (
    <Mutation
      mutation={CREATE_CONTRACT}
      variables={{ currency: 'GBP', cost: '100', jobId, status: 'draft' }}
      onCompleted={(data) => {
        toaster('Created');
        history.push(`/app/edit-quote/${data.contractCreateOne.recordId}`);
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
*/
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
      icon="alt_route"
      color="grey"
      clickSound={true}
      zoom={true}
      onClickEvent={() => setTabNbr(6)}
    />
  );
}

export function TaskCommunity({ drawerButtonChange }) {
  return (
    <TaskButton
      title="Check out the community page"
      subTitle="Optional"
      icon="alt_route"
      color="grey"
      clickSound={true}
      zoom={true}
      onClickEvent={() => drawerButtonChange('/app/community', 'Community')}
    />
  );
}
