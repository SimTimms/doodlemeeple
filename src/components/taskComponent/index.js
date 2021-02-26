import React from 'react';
import { Row, LoadIcon } from '../';
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
  SubmitQuote,
} from '../../modules/tasks';

export default function TaskComponent({ history, profile }) {
  return (
    <Row bg="#fff" j="space-between">
      <Query query={COUNTS} fetchPolicy="network-only">
        {({ data, loading }) => {
          if (loading) {
            return null;
          }

          const { messages, jobs, skills, socials, contact, draftQuotes } =
            data && data.counts ? data.counts : {};

          console.log(data);
          return data ? (
            <Row wrap="wrap" pb={5}>
              {messages > 0 && (
                <TaskUnreadMessages data={data} history={history} />
              )}
              {jobs > 0 && <TaskCheckProject data={data} history={history} />}
              {!preferencesSet(profile) && <TaskRole history={history} />}
              {!profile.summary && <TaskSummary history={history} />}
              {!profile.profileImg && <TaskAvatar history={history} />}
              {!profile.profileBG && <TaskFeature history={history} />}
              {skills === 0 && <TaskSkill history={history} />}
              {jobs === 0 && profile.creatorTrue && (
                <TaskPostJob history={history} />
              )}
              {socials === 0 && <TaskSocials history={history} />}
              {contact === 0 && <TaskContact history={history} />}
              {draftQuotes > 0 && <SubmitQuote history={history} />}
            </Row>
          ) : (
            <LoadIcon />
          );
        }}
      </Query>
    </Row>
  );
}
