import React from 'react';
import { Query } from 'react-apollo';
import { GAME_POSTS_WIDGET } from './data';
import { MyPostProfile } from './profileCard';
import { Column, Grid } from '../../components';
import GamePostForm from './gamePostForm';

export default function GamePostWidget({ gameId, withForm }) {
  const [comments, setComments] = React.useState(null);
  return (
    <Column w="100%">
      {!comments && (
        <Query
          query={GAME_POSTS_WIDGET}
          variables={{ gameId }}
          fetchPolicy="network-only"
          onCompleted={(data) => {
            setComments(data.myPostMany);
          }}
        >
          {({ data }) => {
            return null;
          }}
        </Query>
      )}
      {withForm && (
        <GamePostForm
          type="game"
          objectId={gameId}
          postId={'new'}
          updateEvent={setComments}
          comments={comments}
        />
      )}

      <Grid cols={1}>
        {comments !== null
          ? comments.map((myPost) => <MyPostProfile myPost={myPost} />)
          : null}
      </Grid>
    </Column>
  );
}
