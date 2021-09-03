import React from 'react';
import { Query } from 'react-apollo';
import { GAME_POSTS_WIDGET } from './data';
import { MyPostProfile } from './profileCard';
import { Column, Grid } from '../../components';
import GamePostForm from './gamePostForm';
import { randomKey } from '../../utils';

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
          ? comments.map((myPost, index) => (
              <MyPostProfile
                key={`post_${randomKey()}`}
                myPost={myPost}
                onDeleteEvent={() => {
                  setComments([
                    ...comments.filter((item) => item._id !== myPost._id),
                  ]);
                }}
              />
            ))
          : null}
      </Grid>
    </Column>
  );
}
