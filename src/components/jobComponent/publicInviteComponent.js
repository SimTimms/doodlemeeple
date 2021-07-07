import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { MenuButtonShortcut, Column, Row } from '../';
import clsx from 'clsx';
import { Mutation } from 'react-apollo';
import { UPDATE_INVITE } from '../../data/mutations';
import { nameShortener } from '../../utils';

export default function PublicInviteComponent({ invite, history }) {
  const classes = useStyles();
  const declined = invite.status === 'declined';
  const unopened = invite.status === 'unopened';
  const opened = invite.status === 'read';
  const quoted = invite.status === 'quote_sent';
  const rejected = invite.status === 'rejected';
  const draft = invite.status === 'draft';
  const accepted = invite.status === 'accepted';
  const inviteJob = invite.job ? invite.job : null;
  const completed = inviteJob ? inviteJob.submitted === 'complete' : false;

  return !inviteJob ? (
    <Typography>Deleted</Typography>
  ) : (
    <Mutation
      mutation={UPDATE_INVITE}
      variables={{
        status: 'read',
        _id: invite._id,
      }}
    >
      {(mutation) => {
        return (
          <div
            style={{ width: '100%', cursor: 'pointer' }}
            onClick={() => {
              invite.status === 'unopened' && mutation();
              history.push(`/app/job-description/${invite.job._id}`);
            }}
          >
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
                      {`Invite from ${invite.sender.name} for ${nameShortener(
                        invite.job.name,
                        30
                      )}`}
                    </Typography>
                    <Typography
                      style={{ fontSize: 12 }}
                      className={clsx({
                        [classes.dull]: true,
                        [classes.red]:
                          unopened || declined || rejected || draft || opened,
                      })}
                    >
                      {draft
                        ? 'Task: Complete your quote'
                        : completed
                        ? 'Completed'
                        : declined
                        ? 'Declined'
                        : unopened
                        ? 'Task: Open this Invite'
                        : opened
                        ? 'Task: Respond to Invite'
                        : quoted
                        ? 'Quote Submitted'
                        : rejected
                        ? 'Rejected'
                        : accepted && 'Accepted'}
                    </Typography>
                  </Column>
                </Row>

                <MenuButtonShortcut
                  text={{
                    name: 'Open',
                    color: 'light',
                    icon: completed
                      ? ''
                      : unopened || opened || quoted || accepted || draft
                      ? 'local_post_office'
                      : '',
                    count: invite.messages,
                    back: 'primary',
                  }}
                  onClickEvent={() => {
                    invite.status === 'unopened' && mutation();
                    history.push(`/app/job-description/${invite.job._id}`);
                  }}
                  active={false}
                  countIcon="star"
                />
              </Row>
            </Column>
          </div>
        );
      }}
    </Mutation>
  );
}
