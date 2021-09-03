import React from 'react';
import {
  Column,
  HrefLink,
  DividerWithBorder,
  DividerMini,
  Row,
  Avatar,
  Title,
} from '../../../components';
import { Typography } from '@material-ui/core';

export default function GamePosts({ gamePosts, profile }) {
  return (
    <Column w="100%" a="flex-start">
      {gamePosts.map((gamePost, index) => (
        <Column a="flex-start" j="flex-start">
          <Row key={`game_post_${index}`} a="flex-start" j="flex-start">
            <Column w={60} a="flex-start">
              <Avatar profileImg={profile.profileImg} size={40} />
            </Column>
            <Column a="flex-start">
              <Title title={gamePost.name} />
              <DividerMini />
              <Typography align="left">{gamePost.summary}</Typography>
              {gamePost.url && (
                <Column a="flex-start" j="flex-start">
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
