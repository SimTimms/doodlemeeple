import React, { useEffect } from 'react';
import {
  FieldBox,
  Column,
  CardComponent,
  MenuButtonStandard,
  Row,
  DividerMini,
} from '../../components';
import { Typography } from '@material-ui/core';

export default function GamePost({
  gamePostIn,
  game,
  setGame,
  newMode,
  setPost,
  index,
}) {
  const [gamePost, setGamePost] = React.useState({
    name: '',
    summary: '',
    url: '',
    video: '',
    img: '',
  });
  const [editMode, setEditMode] = React.useState(false);
  useEffect(() => {
    setGamePost({ index: index, ...gamePostIn });
    newMode && setEditMode(true);
  }, [gamePostIn, newMode, index]);

  if (!editMode) {
    return (
      <Column w="100%">
        <Row w="100%" j="space-between">
          <Row w="100%" j="space-between" pr={10}>
            <Typography>{gamePost.name}</Typography>
            <Typography>{gamePost.summary}</Typography>
          </Row>
          <MenuButtonStandard
            icon="edit"
            mr={true}
            onClickEvent={() => setPost({ ...gamePost, index: index })}
          />
          <MenuButtonStandard
            icon="delete"
            type="delete"
            onClickEvent={() =>
              setGame({
                ...game,
                gamePost: [
                  ...game.gamePost.filter(
                    (value, arrIndex) => index !== arrIndex
                  ),
                ],
              })
            }
          />
        </Row>
        <DividerMini />
      </Column>
    );
  }
  return (
    <CardComponent>
      <Column a="center" j="center">
        <FieldBox
          value={gamePost.name}
          title="Header"
          maxLength={26}
          onChangeEvent={(e) => {
            setGamePost({
              ...gamePost,
              name: e,
            });
          }}
          replaceMode="loose"
          placeholder="Example: New Features!!"
          info="A header for your post"
          warning=""
          size="s"
          multiline={false}
        />
        <FieldBox
          value={gamePost.summary}
          title="Content"
          maxLength={1026}
          onChangeEvent={(e) => {
            setGamePost({
              ...gamePost,
              summary: e,
            });
          }}
          replaceMode="loose"
          placeholder="Example: We've introduced spherical dice to our game......"
          info="The content of your post"
          warning=""
          size="s"
          multiline={true}
        />
        <FieldBox
          value={gamePost.url}
          title="URL"
          maxLength={512}
          onChangeEvent={(e) => {
            setGamePost({
              ...gamePost,
              url: e,
            });
          }}
          replaceMode="loose"
          placeholder="Example: https://amazon.co.uk/my_game"
          info="Provide an external link  if you want."
          warning=""
          size="s"
          multiline={false}
        />

        <DividerMini />
        {gamePost.index === null ? (
          <MenuButtonStandard
            title="Create"
            onClickEvent={() => {
              setGame({
                ...game,
                gamePost: [
                  ...game.gamePost,
                  {
                    name: gamePost.name,
                    summary: gamePost.summary,
                    url: gamePost.url,
                  },
                ],
              });
              setPost(null);
            }}
          />
        ) : (
          <MenuButtonStandard
            title="Save"
            onClickEvent={() => {
              let newArr = [...game.gamePost];
              newArr.splice(gamePost.index, 1, {
                name: gamePost.name,
                summary: gamePost.summary,
                url: gamePost.url,
              });
              setGame({
                ...game,
                gamePost: newArr,
              });
              setPost(null);
            }}
          />
        )}
      </Column>
    </CardComponent>
  );
}
