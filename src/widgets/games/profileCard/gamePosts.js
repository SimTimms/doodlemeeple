import React from 'react';
import { Column, HrefLink, DividerWithBorder } from '../../../components';
import { Typography } from '@material-ui/core';

export default function GamePosts({ gamePosts }) {
  return (
    <Column w="100%">
      <DividerWithBorder />

      {gamePosts.map((gamePost, index) => (
        <Column w={300}>
          <Typography>{gamePost.name}</Typography>
          {gamePost.url && <HrefLink />}
        </Column>
      ))}
    </Column>
  );
}
