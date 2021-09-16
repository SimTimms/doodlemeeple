import React from 'react';
import { Query } from 'react-apollo';
import { KICKSTARTERS_BY_ID } from './data';
import { Grid } from '../../../../components';
import { randomKey } from '../../../../utils';
import KickstarterComponent from '../../../../widgets/kickstarter/component';

export default function kickstarterPage({ userId }) {
  return (
    <Grid>
      <Query
        query={KICKSTARTERS_BY_ID}
        variables={{ userId }}
        fetchPolicy="network-only"
      >
        {({ data }) => {
          if (data)
            return data.kickstarterMany.map((kickstarter) => (
              <KickstarterComponent
                kickstarter={kickstarter}
                key={randomKey()}
              />
            ));
          return null;
        }}
      </Query>
    </Grid>
  );
}
