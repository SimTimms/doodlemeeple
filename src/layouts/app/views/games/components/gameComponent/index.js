import React from 'react';
import { Typography, Button, Icon, Card } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';

export function GameComponent({ game }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div
        style={{
          background: `url(${game.backgroundImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          marginRight: 20,
        }}
        className={classes.gameImg}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          width: '100%',
          paddingLeft: 10,
        }}
      >
        <Typography
          variant="body1"
          component="p"
          style={{ width: '100%' }}
          className={classes.cardSummary}
        >
          {game.name}
        </Typography>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'nowrap',
            background: '#e34d4d',
            padding: 5,
            borderRadius: 5,
          }}
          title={`${game.jobs.length} job${
            game.jobs.length === 1 ? '' : 's'
          } linked to this game`}
        >
          <Icon style={{ color: '#fff' }}>work</Icon>
          <Typography variant="body1" component="p" style={{ color: '#fff' }}>
            x {game.jobs.length}
          </Typography>
        </div>
      </div>

      <Link
        to={`/app/edit-game/${game.id}`}
        className={classes.cardLink}
        style={{ textDecoration: 'none' }}
      >
        <Button variant="contained" color="primary">
          Edit
        </Button>
      </Link>
    </Card>
  );
}

export function EmptyGameComponent() {
  const classes = useStyles();
  return (
    <Link to={`/app/edit-game/new`} className={classes.cardLink}>
      <div className={classes.flexCenter}>
        <Icon style={{ fontSize: 32, color: '#444' }}>add_circle</Icon>
        <Typography
          variant="body1"
          component="p"
          style={{ width: '100%', paddingLeft: 10, color: '#444' }}
          className={classes.cardSummary}
        >
          Add a Game
        </Typography>
      </div>
    </Link>
  );
}
