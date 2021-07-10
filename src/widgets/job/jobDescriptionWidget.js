import React from 'react';
import { Query } from 'react-apollo';
import { JOB_WIDGET } from './data';
import JobDescription from './jobDescription';
import { Row } from '../../components';

export default function JobDescriptionWidget({ jobId, ...props }) {
  const { history } = props;
  return (
    <Row wrap="wrap">
      <Query
        query={JOB_WIDGET}
        variables={{ jobId }}
        fetchPolicy="network-only"
      >
        {({ data }) => {
          if (data) {
            return <JobDescription job={data.jobWidget} history={history} />;
          }

          return null;
        }}
      </Query>
    </Row>
  );
}
