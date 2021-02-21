import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { Column, Row, MenuButtonShortcut } from '../';

export default function ProjectComponentDash({
  user,
  setConversationUser,
  declined,
  history,
  messages,
  closed,
  accepted,
}) {
  const classes = useStyles();
  return (
    <div
      style={{
        width: '100%',
        borderRadius: 5,
        padding: 4,
        boxSizing: 'border-box',
      }}
    >
      <Row j="space-between" a="center">
        <div
          className={classes.profileButton}
          title="View full profile"
          onClick={() => history.push(`/app/public-preview/${user._id}`)}
        >
          <Row a="center" j="flex-start">
            <div
              style={{
                backgroundImage: `url(${user.profileImg})`,
              }}
              className={classes.profileThumb}
            ></div>
            <Column a="flex-start">
              <Typography style={{ fontSize: 12 }}>{user.name}</Typography>
              {accepted && (
                <Typography style={{ fontSize: 12 }}>
                  {user.publicEmail}
                </Typography>
              )}
            </Column>
          </Row>
        </div>

        {!declined && !closed && (
          <MenuButtonShortcut
            text={{
              name: 'Chat',
              color: 'light',
              icon: 'chat',
              count: messages,
              back: 'primary',
            }}
            title="Chat with the project owner"
            onClickEvent={() => setConversationUser(user)}
            active={false}
          />
        )}
      </Row>
    </div>
  );
}
