import React from 'react';
import { Typography, Button, Card, Link } from '@material-ui/core';
import { useStyles } from './styles';
import {
  InlineHeader,
  DeclineInvite,
  IconTitle,
  IconButton,
} from '../../../../../../components';

export function InviteComponent({ invite, removeInvite, history }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <InlineHeader>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
          }}
        >
          <IconTitle icon={'thumb_up'} title={`Invite from`} />
          <Link
            href={`/public-preview/${invite.user.id}`}
            style={{
              textDecoration: 'none',
              color: '#fff',
              width: '100%',
            }}
            variant="button"
          >
            {invite.user.name}
          </Link>
        </div>
      </InlineHeader>
      <div className={classes.cardSummaryWrapper}>
        <div className={classes.cardSummary}>
          <div
            style={{
              backgroundImage: `url(${invite.game.backgroundImg})`,
              width: 150,
              height: 80,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              marginRight: 20,
            }}
          ></div>
          <Typography variant="body2" component="p" style={{ width: '100%' }}>
            {invite.job.name} for{' '}
            <Link
              href={`/app/view-game/${invite.game.id}`}
              style={{ textDecoration: 'none' }}
              variant="button"
            >
              {invite.game.name}
            </Link>
          </Typography>
        </div>
      </div>
      <div className={classes.cardActionArea}>
        <DeclineInvite invite={invite} removeInvite={removeInvite} />
        <IconButton
          disabled={false}
          secondaryColor={false}
          warning={false}
          icon="more_horiz"
          title="Find Out More"
          onClickEvent={() => history.push(`/app/view-job/${invite.job.id}`)}
          styleOverride={null}
        />
      </div>
    </Card>
  );
}
