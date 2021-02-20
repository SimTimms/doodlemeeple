import React from 'react';
import { TaskButton, Row } from '../';
import { Query } from 'react-apollo';
import { COUNTS } from '../../data/queries';
import profileComplete from '../../utils/profileComplete';
import preferencesSet from '../../utils/preferencesSet';

export default function MiniDashCreator({ history, profile }) {
  console.log(preferencesSet(profile));
  return (
    <Row bg="#fff" j="space-between">
      <Query query={COUNTS} fetchPolicy="network-only">
        {({ data, loading }) => {
          if (loading) {
            return null;
          }
          return (
            <Row wrap="wrap" pb={5}>
              {!preferencesSet(profile) && (
                <TaskButton
                  title="Creator or Creative"
                  subTitle="profile"
                  icon="brush"
                  color="secondary"
                  clickSound={true}
                  zoom={true}
                  onClickEvent={() =>
                    history.push('/app/edit-profile/preference')
                  }
                  styleOverride={{ marginLeft: 10 }}
                />
              )}
              {profileComplete(profile) && (
                <TaskButton
                  title="Preview your Profile"
                  icon="face"
                  color="secondary"
                  clickSound={true}
                  zoom={true}
                  onClickEvent={() =>
                    history.push(`/app/public-preview/${profile._id}`)
                  }
                  styleOverride={{ marginLeft: 10 }}
                />
              )}
              {!profile.summary && (
                <TaskButton
                  title="Describe Yourself"
                  subTitle="Profile"
                  icon="face"
                  color="secondary"
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
                  color="secondary"
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
                  icon="image"
                  color="secondary"
                  clickSound={true}
                  zoom={true}
                  onClickEvent={() => history.push('/app/edit-profile/feature')}
                  styleOverride={{ marginLeft: 10 }}
                />
              )}
              {data.counts.jobs === 0 && profile.creatorTrue && (
                <TaskButton
                  title="Post a Job"
                  subTitle="Profile"
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
                  subTitle="Profile"
                  icon="facebook"
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
                  subTitle="Profile"
                  icon="mail"
                  color="secondary"
                  clickSound={true}
                  zoom={true}
                  onClickEvent={() => history.push('/app/edit-profile/contact')}
                  styleOverride={{ marginLeft: 10 }}
                />
              )}
              {data.counts.skills === 0 && (
                <TaskButton
                  title="Add a Skill"
                  subTitle="Profile"
                  icon="brush"
                  color="secondary"
                  clickSound={true}
                  zoom={true}
                  onClickEvent={() => history.push('/app/edit-profile/skill')}
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
