import React from 'react';
import { Query } from 'react-apollo';
import { GAME_WIDGET_BY_USER } from './data';
import { GameProfile } from '../../../../widgets/games/profileCard';
import { Grid } from '../../../../components';
import { randomKey } from '../../../../utils';
export default function GamesPage({ userId }) {
  return (
    <Grid>
      <Query
        query={GAME_WIDGET_BY_USER}
        variables={{ userId }}
        fetchPolicy="network-only"
      >
        {({ data }) => {
          if (data)
            return data.gameMany.map((game) => (
              <GameProfile game={game} key={`game_${randomKey()}`} />
            ));
          return null;
        }}
      </Query>
    </Grid>
  );
}
