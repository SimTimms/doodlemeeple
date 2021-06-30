import React from 'react';
import { Query } from 'react-apollo';
import { FEATURED_KICKSTARTER_WIDGET } from './data';
import { KickstarterProfile } from './profileCard';

export default function KickstarterWidget() {
  return (
    <Query query={FEATURED_KICKSTARTER_WIDGET} fetchPolicy="network-only">
      {({ data, loading }) => {
        if (data)
          return data.featuredKickstarterWidget.map((kickstarter) => (
            <KickstarterProfile kickstarter={kickstarter} />
          ));
        return null;
      }}
    </Query>
  );
}
