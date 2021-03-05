import React from 'react';
import { Row, LoadIcon } from '../';
import { Query } from 'react-apollo';
import { COUNTS } from '../../data/queries';
import TaskGenerator from './taskGenerator';

export default function TaskComponent({
  history,
  profile,
  drawerButtonChange,
}) {
  return (
    <Row bg="#fff" j="space-between">
      <Query query={COUNTS} fetchPolicy="network-only">
        {({ data, loading }) => {
          if (loading) {
            return null;
          }
          console.log(data);
          const {
            messages,
            jobs,
            skills,
            socials,
            contact,
            draftQuotes,
            invites,
            totalDeclined,
            draftJobs,
            unansweredQuotes,
          } = data && data.counts ? data.counts : {};
          console.log(data);
          return data ? (
            <Row wrap="wrap" pb={5}>
              <TaskGenerator
                messages={messages}
                profile={profile}
                data={data}
                history={history}
                skills={skills}
                jobs={jobs}
                socials={socials}
                contact={contact}
                draftQuotes={draftQuotes}
                invites={invites}
                totalDeclined={totalDeclined}
                draftJobs={draftJobs}
                unansweredQuotes={unansweredQuotes}
                drawerButtonChange={drawerButtonChange}
              />
            </Row>
          ) : (
            <LoadIcon />
          );
        }}
      </Query>
    </Row>
  );
}
