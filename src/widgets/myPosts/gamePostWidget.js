import React from 'react';
import { Query } from 'react-apollo';
import { GAME_POSTS_WIDGET } from './data';
import { MyPostProfile } from './profileCard';
import { Grid } from '../../components';

export default function gamePostWidget({ gameId }) {
  return (
    <Grid cols={3}>
      <Query
        query={GAME_POSTS_WIDGET}
        variables={{ gameId }}
        fetchPolicy="network-only"
      >
        {({ data }) => {
          if (data) {
            return data.myPostMany.map((myPost) => (
              <MyPostProfile myPost={myPost} />
            ));
          }
          return null;
        }}
      </Query>
    </Grid>
  );
}
