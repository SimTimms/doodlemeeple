import React from 'react';
import { Query } from 'react-apollo';
import { JOB_BOARD_WIDGET } from './data';
import { JobProfile } from './profileCard';
import { Row } from '../../components';

export default function JobBoardWidget({ ...props }) {
  const { history } = props;
  return (
    <Row wrap="wrap">
      <Query query={JOB_BOARD_WIDGET} fetchPolicy="network-only">
        {({ data }) => {
          if (data)
            return data.jobBoardWidget.map((job, index) => (
              <JobProfile
                job={job}
                key={`jobWidget_${index}`}
                history={history}
              />
            ));
          return null;
        }}
      </Query>
    </Row>
  );
}
