import React, { useEffect } from 'react';
import { Row } from '../';
import { useQuery } from '@apollo/client';
import { COUNTS } from '../../data/queries';
import TaskGenerator from './taskGenerator';

export default function TaskComponent({
  history,
  profile,
  drawerButtonChange,
}) {
  const [counts, setCounts] = React.useState({});
  const [countData, setCountData] = React.useState();

  const [query, { loading }] = useQuery(COUNTS, {
    onCompleted({ counts }) {
      setCountData(counts);
      setCounts({
        messages: counts.messages,
        jobs: counts.jobs,
        skills: counts.skills,
        socials: counts.socials,
        contact: counts.contact,
        draftQuotes: counts.draftQuotes,
        invites: counts.invites,
        totalDeclined: counts.totalDeclined,
        draftJobs: counts.draftJobs,
        unansweredQuotes: counts.unansweredQuotes,
      });
    },
  });
  useEffect(() => {
    query();
  }, [query]);
  return (
    <Row bg="#fff" j="space-between">
      <Row wrap="wrap" pb={5}>
        <TaskGenerator
          messages={counts.messages}
          profile={profile}
          data={countData}
          history={history}
          skills={counts.skills}
          jobs={counts.jobs}
          socials={counts.socials}
          contact={counts.contact}
          draftQuotes={counts.draftQuotes}
          invites={counts.invites}
          totalDeclined={counts.totalDeclined}
          draftJobs={counts.draftJobs}
          unansweredQuotes={counts.unansweredQuotes}
          drawerButtonChange={drawerButtonChange}
        />
      </Row>
    </Row>
  );
}
