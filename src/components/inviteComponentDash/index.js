import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { IconButton, Column, Row } from '../';
import { Opacity } from '@material-ui/icons';

export default function InviteComponentDash({
  invite,
  setConversationUser,
  ...props
}) {
  const classes = useStyles();
  const declined = invite.status === 'declined';
  const { jobClosed } = props;
  return (
    <div style={{ width: '100%', opacity: declined && 0.5 }}>
      <Row j="space-between" a="center">
        <Row a="center" j="flex-start">
          <div
            style={{
              backgroundImage: `url(${invite.receiver.profileImg})`,
            }}
            className={classes.profileThumb}
          ></div>
          <Column a="flex-start">
            <Typography style={{ fontSize: 12 }}>
              {invite.receiver.name}
            </Typography>
            <Typography style={{ fontSize: 12 }}>
              {declined
                ? 'Declined'
                : invite.status
                ? `(${invite.status})`
                : ''}
            </Typography>
          </Column>
        </Row>
        {!jobClosed && (
          <IconButton
            title=""
            icon="chat"
            color="text-dark"
            onClickEvent={() => setConversationUser(invite.receiver)}
          />
        )}
      </Row>
    </div>
  );
}
