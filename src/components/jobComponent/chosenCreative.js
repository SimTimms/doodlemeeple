import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { Column, Row, IconButton } from '../';
import clsx from 'clsx';

export default function ChosenCreative({ user, history, setConversationUser }) {
  const classes = useStyles();

  return (
    <div style={{ width: '100%', cursor: 'pointer' }}>
      <Column>
        <Row j="space-between" a="center">
          <Row a="center" j="flex-start">
            <div
              style={{
                backgroundImage: `url(${user.profileImg})`,
              }}
              className={classes.profileThumb}
            ></div>
            <Column a="flex-start">
              <Typography
                style={{ fontSize: 12 }}
                onClick={() => {
                  history.push(`/app/public-preview/${user._id}`);
                }}
              >
                {user.name}
              </Typography>
              <Typography
                style={{ fontSize: 12 }}
                className={clsx({
                  [classes.dull]: true,
                  [classes.red]: false,
                })}
              >
                {user.email}
              </Typography>
            </Column>
            <IconButton
              icon="chat"
              color="text-dark"
              title="Chat"
              onClickEvent={() => setConversationUser(user)}
              active={false}
              styleOverride={{ marginRight: 10 }}
            />
          </Row>
        </Row>
      </Column>
    </div>
  );
}
