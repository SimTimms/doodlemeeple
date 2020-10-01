import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { IconButton, Column, Row } from '../';

export default function CreatorComponentDash({ user, setConversationUser }) {
  const classes = useStyles();
  return (
    <div style={{ width: '100%' }}>
      <Row j="space-between" a="center">
        <Row a="center" j="flex-start">
          <div
            style={{
              backgroundImage: `url(${user.profileImg})`,
            }}
            className={classes.profileThumb}
          ></div>
          <Column a="flex-start">
            <Typography style={{ fontSize: 12 }}>{user.name}</Typography>
            <Typography style={{ fontSize: 12 }}>Creator</Typography>
          </Column>
        </Row>
        <IconButton
          title=""
          icon="chat"
          color="text-dark"
          onClickEvent={() => setConversationUser(user)}
        />
      </Row>
    </div>
  );
}
