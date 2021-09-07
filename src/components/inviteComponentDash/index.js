import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { MenuButtonShortcut, Column, Row } from '../';

export default function InviteComponentDash({
  setConversationUser,
  history,
  user,
  ...props
}) {
  const classes = useStyles();
  const { jobClosed, invite } = props;
  const declined = invite && invite.status === 'declined';
  const unopened = invite && invite.status === 'unopened';
  const read = invite && invite.status === 'read';
  const quoted = invite && invite.status === 'quote_sent';
  const rejected = invite && invite.status === 'rejected';
  const accepted = invite && invite.status === 'accepted';

  const messageCount = invite ? invite.messages : 0;

  return (
    <div style={{ width: '100%', opacity: declined && 0.5 }}>
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
            <Typography style={{ fontSize: 12 }}>
              {declined
                ? 'Declined'
                : unopened
                ? 'Unopened'
                : read
                ? 'Opened'
                : quoted
                ? 'Quoted'
                : rejected
                ? 'Rejected'
                : accepted && 'Accepted'}
            </Typography>
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
            history.push(`/user-profile/${user._id}`);
          }}
          active={false}
        />

        {!jobClosed && !declined && (
          <MenuButtonShortcut
            text={{
              name: '',
              color: '',
              icon: 'chat',
              count: messageCount,
              back: 'primary',
            }}
            onClickEvent={() => setConversationUser(user)}
            active={false}
            countIcon="mail"
          />
        )}
      </Row>
    </div>
  );
}
