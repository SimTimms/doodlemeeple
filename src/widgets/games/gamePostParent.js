import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { CardComponent } from '../../components';
import GamePost from './gamePost';

export default function GamePostParent({ game, setGame }) {
  const classes = useStyles();
  const [post, setPost] = React.useState(null);

  return (
    <CardComponent type="premium" premiumId="Game Posts">
      {game.gamePost &&
        game.gamePost.map((gamePost, index) => (
          <GamePost
            gamePostIn={{ ...gamePost }}
            setGame={setGame}
            game={game}
            key={`${index}_${Math.random().toString(36)}`}
            setPost={setPost}
            index={index}
          />
        ))}
      {!post ? (
        <Typography
          className={classes.newStore}
          onClick={() =>
            setPost({
              index: null,
              name: '',
              url: '',
              summary: '',
              video: '',
              img: '',
            })
          }
        >
          + Create a Post
        </Typography>
      ) : (
        <GamePost
          gamePostIn={post}
          setGame={setGame}
          game={game}
          newMode={true}
          setPost={setPost}
          index={null}
        />
      )}
    </CardComponent>
  );
}
