import React from 'react';
import { TaskButton, Row } from '../';
import { Query } from 'react-apollo';
import { COUNTS } from '../../data/queries';
import preferencesSet from '../../utils/preferencesSet';

export default function MiniDashCreator({ history, profile }) {
  return (
    <Row bg="#fff" j="space-between">
      <Query query={COUNTS} fetchPolicy="network-only">
        {({ data, loading }) => {
          if (loading) {
            return null;
          }
          return (
            <Row wrap="wrap" pb={5}>
              {data.counts.messages > 0 && (
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
                  styleOverride={{ marginLeft: 10 }}
                />
              )}
              {data.counts.jobs > 0 && (
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
                  styleOverride={{ marginLeft: 10 }}
                />
              )}
              {!preferencesSet(profile) && (
                <TaskButton
                  title="Client or Contractor"
                  subTitle="Preference"
                  icon="settings"
                  color="secondary"
                  clickSound={true}
                  zoom={true}
                  onClickEvent={() =>
                    history.push('/app/edit-profile/preference')
                  }
                  styleOverride={{ marginLeft: 10 }}
                />
              )}
              {!profile.summary && (
                <TaskButton
                  title="Describe Yourself"
                  subTitle="Profile"
                  icon="face"
                  color="warning"
                  clickSound={true}
                  zoom={true}
                  onClickEvent={() => history.push('/app/edit-profile/summary')}
                  styleOverride={{ marginLeft: 10 }}
                />
              )}
              {!profile.profileImg && (
                <TaskButton
                  title="Upload a Profile Picture"
                  subTitle="Profile"
                  icon="face"
                  color="warning"
                  clickSound={true}
                  zoom={true}
                  onClickEvent={() => history.push('/app/edit-profile/avatar')}
                  styleOverride={{ marginLeft: 10 }}
                />
              )}
              {!profile.profileBG && (
                <TaskButton
                  title="Add Feature Image"
                  subTitle="Profile"
                  icon="face"
                  color="warning"
                  clickSound={true}
                  zoom={true}
                  onClickEvent={() => history.push('/app/edit-profile/feature')}
                  styleOverride={{ marginLeft: 10 }}
                />
              )}
              {data.counts.skills === 0 && (
                <TaskButton
                  title="Add a Skill"
                  subTitle="Profile"
                  icon="face"
                  color="warning"
                  clickSound={true}
                  zoom={true}
                  onClickEvent={() => history.push('/app/edit-profile/skill')}
                  styleOverride={{ marginLeft: 10 }}
                />
              )}
              {data.counts.jobs === 0 && profile.creatorTrue && (
                <TaskButton
                  title="Post a Job"
                  subTitle="Projects"
                  icon="work"
                  color="primary"
                  clickSound={true}
                  zoom={true}
                  onClickEvent={() => history.push('/app/edit-job/new')}
                  styleOverride={{ marginLeft: 10 }}
                />
              )}
              {data.counts.socials === 0 && (
                <TaskButton
                  title="Add Socials"
                  subTitle="Contact"
                  icon="mail"
                  color="secondary"
                  clickSound={true}
                  zoom={true}
                  onClickEvent={() => history.push('/app/edit-profile/social')}
                  styleOverride={{ marginLeft: 10 }}
                />
              )}
              {data.counts.contact === 0 && (
                <TaskButton
                  title="Add Contact"
                  subTitle="Contact"
                  icon="mail"
                  color="secondary"
                  clickSound={true}
                  zoom={true}
                  onClickEvent={() => history.push('/app/edit-profile/contact')}
                  styleOverride={{ marginLeft: 10 }}
                />
              )}
            </Row>
          );
        }}
      </Query>
    </Row>
  );
}
