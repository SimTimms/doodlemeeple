import React from 'react';
import { Typography, Button, Icon, Card, Link } from '@material-ui/core';
import { useStyles } from './styles';
import { Mutation } from 'react-apollo';
import { DECLINE_INVITE } from '../../../../../../data/mutations';
import { IconTitle, InlineHeader } from '../../../../../../components';

export function InviteComponent({ invite, removeInvite, history }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <InlineHeader>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <IconTitle icon={'thumb_up'} title={`Invite from`} />
          <Link
            href={`/public-preview/${invite.user.id}`}
            style={{ textDecoration: 'none', color: '#fff' }}
            variant="button"
          >
            {invite.user.name}
          </Link>
        </div>
      </InlineHeader>
      <div className={classes.cardSummaryWrapper}>
        <Typography
          variant="body2"
          component="p"
          className={classes.cardSummary}
        >
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
          <div style={{ width: '100%' }}>
            {invite.job.name} for{' '}
            <Link
              href={`/app/view-game/${invite.game.id}`}
              style={{ textDecoration: 'none' }}
              variant="button"
            >
              {invite.game.name}
            </Link>
          </div>
        </Typography>
      </div>
      <div className={classes.cardActionArea}>
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
                style={{ width: 140 }}
              >
                Decline
              </Button>
            );
          }}
        </Mutation>
        <Button
          variant="contained"
          color="primary"
          style={{ width: 140 }}
          onClick={() => {
            history.push(`/app/view-job/${invite.job.id}`);
          }}
        >
          Find Out More
        </Button>
      </div>
    </Card>
  );
}
