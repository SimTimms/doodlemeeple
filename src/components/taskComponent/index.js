import React from 'react';
import { Row, Column, LoadIcon } from '../';
import { Query } from 'react-apollo';
import { COUNTS } from '../../data/queries';
import TaskGenerator from './taskGenerator';
import { Typography } from '@material-ui/core';

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
          const {
            messages,
            jobs,
            skills,
            socials,
            contact,
            draftQuotes,
            invites,
            totalDeclined,
            quotesDeclined,
            quotesAccepted,
            draftJobs,
            unansweredQuotes,
          } = data && data.counts ? data.counts : {};
          return data ? (
            <Row wrap="wrap" a="flex-start">
              <Column m={10} j="flex-start" w="20%">
                <Typography>Messages</Typography>
                <TaskGenerator
                  messages={messages}
                  data={data}
                  history={history}
                  drawerButtonChange={drawerButtonChange}
                />
              </Column>
              <Column m={10} j="flex-start" w="20%">
                <Typography>Jobs</Typography>
                <TaskGenerator
                  data={data}
                  history={history}
                  jobs={jobs}
                  unansweredQuotes={unansweredQuotes}
                  drawerButtonChange={drawerButtonChange}
                />
              </Column>
              <Column m={10} j="flex-start" w="20%">
                <Typography>Invites and Quotes</Typography>
                <TaskGenerator
                  data={data}
                  history={history}
                  draftQuotes={draftQuotes}
                  invites={invites}
                  quotesDeclined={quotesDeclined}
                  quotesAccepted={quotesAccepted}
                  drawerButtonChange={drawerButtonChange}
                />
              </Column>
              <Column m={10} j="flex-start" w="20%">
                <Typography>Profile</Typography>
                <TaskGenerator
                  profile={profile}
                  data={data}
                  history={history}
                  skills={skills}
                  socials={socials}
                  contact={contact}
                  drawerButtonChange={drawerButtonChange}
                />
              </Column>
            </Row>
          ) : (
            <LoadIcon />
          );
        }}
      </Query>
    </Row>
  );
}
