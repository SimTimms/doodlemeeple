import React from 'react';
import { Row } from '../';
import { Query } from 'react-apollo';
import { COUNTS } from '../../data/queries';
import preferencesSet from '../../utils/preferencesSet';
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
} from '../../modules/tasks';

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
                <TaskUnreadMessages data={data} history={history} />
              )}
              {data.counts.jobs > 0 && (
                <TaskCheckProject data={data} history={history} />
              )}
              {!preferencesSet(profile) && <TaskRole history={history} />}
              {!profile.summary && <TaskSummary history={history} />}
              {!profile.profileImg && <TaskAvatar history={history} />}
              {!profile.profileBG && <TaskFeature history={history} />}
              {data.counts.skills === 0 && <TaskSkill history={history} />}
              {data.counts.jobs === 0 && profile.creatorTrue && (
                <TaskPostJob history={history} />
              )}
              {data.counts.socials === 0 && <TaskSocials history={history} />}
              {data.counts.contact === 0 && <TaskContact history={history} />}
            </Row>
          );
        }}
      </Query>
    </Row>
  );
}
