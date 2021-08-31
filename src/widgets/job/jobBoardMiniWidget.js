import React from 'react';
import { Query } from 'react-apollo';
import { JOB_BOARD_MINI_WIDGET } from './data';
import { JobProfileMini } from './profileCard';
import { Grid } from '../../components';

export default function JobBoardMiniWidget({ ...props }) {
  const { history } = props;
  return (
    <Grid>
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
    </Grid>
  );
}
