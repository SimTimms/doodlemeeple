import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { Column, Row, MenuButtonShortcut } from '../';

export default function CreatorComponentDash({
  user,
  setConversationUser,
  declined,
  history,
  messages,
}) {
  const classes = useStyles();
  return (
    <div
      style={{
        width: '100%',
        border: '1px dashed #ddd',
        borderRadius: 5,
        padding: 4,
        boxSizing: 'border-box',
      }}
    >
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
        <MenuButtonShortcut
          text={{
            name: '',
            color: '',
            icon: 'face',
            count: 0,
            back: 'primary',
          }}
          onClickEvent={() => {
            history.push(`/public-preview/${user._id}`);
          }}
          active={false}
        />

        {!declined && (
          <MenuButtonShortcut
            text={{
              name: '',
              color: '',
              icon: 'chat',
              count: messages,
              back: 'primary',
            }}
            onClickEvent={() => setConversationUser(user)}
            active={false}
          />
        )}
      </Row>
    </div>
  );
}
