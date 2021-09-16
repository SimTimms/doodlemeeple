import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { Column, Row, IconButton } from '../';

export default function CreatorComponentDash({
  user,
  setConversationUser,
  declined,
  history,
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
      <Column j="space-between" a="center">
        <div
          className={classes.profileButton}
          title="View full profile"
          onClick={() => history.push(`/app/user-profile/${user._id}`)}
        >
          <Row a="center" j="flex-start">
            <div
              style={{
                backgroundImage: `url(${user.profileImg})`,
              }}
              className={classes.profileThumb}
            ></div>
            <Column a="flex-end">
              <Typography style={{ fontSize: 12 }}>{user.name}</Typography>
              <Typography style={{ fontSize: 12 }}>Project Owner</Typography>
              {accepted && (
                <Typography style={{ fontSize: 12 }}>
                  {user.publicEmail}
                </Typography>
              )}
            </Column>
          </Row>
        </div>

        {!declined && !closed && (
          <IconButton
            icon="chat"
            title="Chat"
            onClickEvent={() => setConversationUser(user)}
            active={false}
            styleOverride={{ width: '100%' }}
          />
        )}
      </Column>
    </div>
  );
}
