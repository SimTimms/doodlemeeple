import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { IconButton, CardComponent, Column, Row, ProfileAvatar } from '../';
import clsx from 'clsx';

export default function InviteComponent({ invite, history }) {
  const classes = useStyles();

  return (
    <CardComponent>
      <Row>
        {invite.sender && (
          <ProfileAvatar
            profilePage={`/app/public-preview/${invite.sender._id}`}
            title={invite.sender.name}
            bgImg={invite.sender.profileImg}
            history={history}
            declined={invite.status === 'declined'}
          />
        )}
        <Column>
          <Typography
            variant="body1"
            component="p"
            style={{ width: '100%' }}
            className={classes.cardSummary}
          >
            {invite.job.name}
          </Typography>

          <Typography
            variant="body2"
            component="p"
            style={{ width: '100%' }}
            className={clsx({
              [classes.cardSummaryWarning]: true,
            })}
          >
            {!invite.sender
              ? 'Creator no longer exists'
              : invite.status === 'paid'
              ? 'Active '
              : 'Waiting'}
          </Typography>
        </Column>
      </Row>

      <IconButton
        title={invite.sender ? 'View' : 'Not Available'}
        color="text-dark"
        disabled={!invite.sender}
        type="button"
        iconPos="right"
        icon={
          !invite.sender
            ? ''
            : invite.status === 'submitted' || invite.status === 'closed'
            ? 'preview'
            : invite.status === 'accepted' || invite.status === 'paid'
            ? 'chevron_right'
            : 'edit'
        }
        styleOverride={{ marginLeft: 30 }}
        onClickEvent={() => {
          history.push(`/app/view-job/${invite.job._id}/${invite._id}`);
        }}
      />
    </CardComponent>
  );
}
