import React from 'react';
import { Query } from 'react-apollo';
import { JOB_WIDGET } from './data';
import { JobProfile } from './profileCard';
import { Row } from '../../components';

export default function JobWidget({ jobId }) {
  return (
    <Row wrap="wrap">
      <Query
        query={JOB_WIDGET}
        variables={{ jobId }}
        fetchPolicy="network-only"
      >
        {({ data }) => {
          if (data) {
            return <JobProfile job={data.jobWidget} key={`jobWidget_1`} />;
          }
          return null;
        }}
      </Query>
    </Row>
  );
}
