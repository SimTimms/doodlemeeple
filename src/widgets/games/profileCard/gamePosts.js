import React from 'react';
import {
  Column,
  HrefLink,
  DividerWithBorder,
  DividerMini,
  Row,
  Avatar,
} from '../../../components';
import { Typography } from '@material-ui/core';

export default function GamePosts({ gamePosts, profile }) {
  return (
    <Column w="100%">
      <DividerWithBorder />

      {gamePosts.map((gamePost, index) => (
        <Column a="flex-start">
          <Row key={`game_post_${index}`} a="flex-start">
            <Column w={60} a="flex-start">
              <Avatar profileImg={profile.profileImg} size={40} />
            </Column>
            <Column w={300} a="flex-start">
              <Typography align="left">{gamePost.name}</Typography>
              <DividerMini />
              <Typography align="left">{gamePost.summary}</Typography>
              {gamePost.url && (
                <Column>
                  <DividerMini />
                  <HrefLink url={gamePost.url} title={gamePost.url} />
                </Column>
              )}
            </Column>
          </Row>
          <DividerWithBorder />
        </Column>
      ))}
    </Column>
  );
}
