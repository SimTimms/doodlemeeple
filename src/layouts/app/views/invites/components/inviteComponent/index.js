import React from 'react';
import { Typography, Button, Icon, Card } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import { IconBox } from '../../../../../../components';

export function InviteComponent({ invite }) {
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
          for {invite.job.name} on {invite.game.name}
        </Typography>
        <IconBox count="1" icon="work" />
        <IconBox count="1" icon="casino" />
      </div>

      <Link
        to={`/app/edit-job/${invite.id}`}
        className={classes.cardLink}
        style={{ textDecoration: 'none' }}
      >
        <Button variant="contained" color="secondary">
          Accept
        </Button>
        <Button variant="contained" color="error">
          Decline
        </Button>
      </Link>
    </Card>
  );
}
