import React from 'react';
import { Query } from 'react-apollo';
import { FEATURED_KICKSTARTER_WIDGET } from './data';
import { KickstarterProfile } from './profileCard';
import { Grid, Divider } from '../../components';
import { randomKey } from '../../utils';
export default function FeaturedKickstarters() {
  return (
    <Grid cols={3}>
      <Query query={FEATURED_KICKSTARTER_WIDGET} fetchPolicy="network-only">
        {({ data }) => {
          if (data)
            return data.featuredKickstarterWidget.map((kickstarter) => (
              <KickstarterProfile kickstarter={kickstarter} key={randomKey()} />
            ));
          return null;
        }}
      </Query>
      <Divider />
      <Divider />
      <Divider />
      <Divider />
    </Grid>
  );
}
