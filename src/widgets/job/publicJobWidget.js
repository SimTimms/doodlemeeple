import React from 'react';
import { Query } from 'react-apollo';
import { JOB_BOARD_MINI_WIDGET } from './data';
import { JobProfileMini } from './profileCard';
import { Row } from '../../components';

export default function PublicJobWidget({ ...props }) {
  const { history } = props;
  return (
    <Row j="flex-start" a="flex-start" pb="20px" pl="20px" pr="20px" of="auto">
      <Query query={JOB_BOARD_MINI_WIDGET} fetchPolicy="network-only">
        {({ data }) => {
          if (data)
            return data.jobBoardMiniWidget.map((job, index) => (
              <JobProfileMini
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
