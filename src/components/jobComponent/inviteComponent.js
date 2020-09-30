import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { CardComponent, Column, Row, ProfileAvatar } from '../';
import clsx from 'clsx';

export default function InviteComponent({ invite, history }) {
  const classes = useStyles();

  return (
    <CardComponent
      onClickEvent={() => {
        history.push(`/app/view-job/${invite.job._id}/${invite._id}`);
      }}
    >
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
        <Column a="flex-start">
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
            className={clsx({
              [classes.cardSummaryNeutral]: true,
              [classes.cardSummaryWarning]: invite.status === 'declined',
              [classes.cardSummaryGood]:
                invite.status === 'unopened' || !invite.status,
              [classes.cardSummaryAmber]: invite.status === 'quote_sent',
            })}
          >
            {!invite.sender
              ? 'Creator no longer exists'
              : invite.status === 'paid'
              ? 'Active'
              : invite.status === 'unopened' || !invite.status
              ? 'New'
              : invite.status === 'quote_sent'
              ? 'Quote Sent'
              : 'Waiting'}
          </Typography>
        </Column>
      </Row>
    </CardComponent>
  );
}
