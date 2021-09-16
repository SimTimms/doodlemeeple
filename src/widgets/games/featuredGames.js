import React from 'react';
import { Query } from 'react-apollo';
import { FEATURED_GAME_WIDGET } from './data';
import { GameProfile } from './profileCard';
import { Row } from '../../components';

export default function FeaturedGames() {
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
      <Query query={FEATURED_GAME_WIDGET} fetchPolicy="network-only">
        {({ data, loading }) => {
          if (data)
            return data.featuredGameWidget.map((game) => (
              <GameProfile game={game} />
            ));
          return null;
        }}
      </Query>
    </Row>
  );
}
