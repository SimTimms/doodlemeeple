import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { MenuButtonShortcut, Column, Row } from '../';
import clsx from 'clsx';
import { Mutation } from 'react-apollo';
import { UPDATE_INVITE } from '../../data/mutations';

export default function InviteComponent({ invite, history }) {
  const classes = useStyles();
  const declined = invite.status === 'declined';
  const unopened = invite.status === 'unopened';
  const opened = invite.status === 'read';
  const quoted = invite.status === 'quote_sent';
  const rejected = invite.status === 'rejected';
  const accepted = invite.status === 'accepted';
  console.log(invite.job);
  return (
    <div style={{ width: '100%', cursor: 'pointer' }}>
      <Column>
        <Row j="space-between" a="center">
          <Row a="center" j="flex-start">
            <div
              style={{
                backgroundImage: `url(${invite.sender.profileImg})`,
              }}
              className={classes.profileThumb}
            ></div>
            <Column a="flex-start">
              <Typography style={{ fontSize: 12 }}>
                {`Invite from ${invite.sender.name} for ${invite.job.name}`}
              </Typography>
              <Typography
                style={{ fontSize: 12 }}
                className={clsx({
                  [classes.dull]: true,
                  [classes.red]: unopened || declined || rejected,
                })}
              >
                {declined
                  ? 'Declined'
                  : unopened
                  ? 'Unread'
                  : opened
                  ? 'Opened'
                  : quoted
                  ? 'Quoted'
                  : rejected
                  ? 'Rejected'
                  : accepted && 'Accepted'}
              </Typography>
            </Column>
          </Row>
          <Mutation
            mutation={UPDATE_INVITE}
            variables={{
              status: 'read',
              _id: invite._id,
            }}
          >
            {(mutation) => {
              return (
                <MenuButtonShortcut
                  text={{
                    name: '',
                    color: '#fff',
                    icon:
                      unopened || opened || quoted || accepted ? 'star' : '',
                    count: 0,
                    back: unopened
                      ? 'warning'
                      : opened || quoted
                      ? 'primary'
                      : accepted
                      ? 'secondary'
                      : '',
                  }}
                  onClickEvent={() => {
                    invite.status === 'unopened' && mutation();
                    history.push(
                      `/app/view-job/${invite.job._id}/${invite._id}`
                    );
                  }}
                  active={false}
                />
              );
            }}
          </Mutation>
        </Row>
      </Column>
    </div>
  );
}
