import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { IconButton, CardComponent, Column, Row, ProfileAvatar } from '../';
import clsx from 'clsx';

export default function InviteComponent({ removeInvite, invite, history }) {
  const classes = useStyles();

  return (
    <CardComponent>
      <Row>
        <ProfileAvatar
          profilePage={`/app/public-preview/${invite.user._id}`}
          title={invite.user.name}
          bgImg={invite.user.profileImg}
          history={history}
          declined={invite.status === 'declined'}
        />
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
            Waiting
          </Typography>
        </Column>
      </Row>
      <IconButton
        disabled={false}
        title={'View'}
        color="text-dark"
        type="button"
        iconPos="right"
        icon={
          invite.status === 'submitted' || invite.status === 'closed'
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
