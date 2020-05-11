import React from 'react';
import { Typography, Button, Icon, Card } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import { Mutation } from 'react-apollo';
import { DECLINE_INVITE } from '../../../../../../data/mutations';

export function InviteComponent({ invite, removeInvite }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div
        style={{
          background: `url(${invite.game.backgroundImg})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          marginRight: 20,
        }}
        className={classes.gameImg}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Typography
          variant="body1"
          component="p"
          style={{ width: '100%', paddingLeft: 10 }}
          className={classes.cardSummary}
        >
          Invite from {invite.user.name}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          style={{ width: '100%', paddingLeft: 10 }}
          className={classes.cardSummary}
        >
          for{' '}
          <Link
            to={`/app/view-job/${invite.job.id}`}
            style={{ textDecoration: 'none' }}
          >
            {invite.job.name}
          </Link>{' '}
          on{' '}
          <Link
            to={`/app/view-game/${invite.game.id}`}
            style={{ textDecoration: 'none' }}
          >
            {invite.game.name}
          </Link>
        </Typography>
      </div>
      <Mutation
        mutation={DECLINE_INVITE}
        variables={{
          id: invite.id,
        }}
        onCompleted={() => {
          removeInvite(invite.id);
        }}
      >
        {(mutation) => {
          return (
            <Button
              variant="contained"
              onClick={() => {
                mutation();
              }}
            >
              Decline
            </Button>
          );
        }}
      </Mutation>
      <Button
        variant="contained"
        color="primary"
        style={{ marginLeft: 10, marginRight: 10, width: 140 }}
      >
        Interested
      </Button>
    </Card>
  );
}
