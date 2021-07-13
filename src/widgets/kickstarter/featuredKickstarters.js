import React from 'react';
import { Query } from 'react-apollo';
import { FEATURED_KICKSTARTER_WIDGET } from './data';
import { KickstarterProfile } from './profileCard';
import { Row } from '../../components';

export default function FeaturedKickstarters() {
  return (
    <Row
      j="flex-start"
      a="flex-start"
      pb="40px"
      pl="20px"
      pr="20px"
      of="auto"
      w="100%"
    >
      <Query query={FEATURED_KICKSTARTER_WIDGET} fetchPolicy="network-only">
        {({ data, loading }) => {
          if (data)
            return data.featuredKickstarterWidget.map((kickstarter) => (
              <KickstarterProfile kickstarter={kickstarter} />
            ));
          return null;
        }}
      </Query>
    </Row>
  );
}
