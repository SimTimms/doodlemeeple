import React from 'react';
import Typography from '@material-ui/core/Typography';
import { ProjectHeader } from './ProjectHeader';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import { useStyles } from './styles';
import Icon from '@material-ui/core/Icon';

export function GameComponent({ game }) {
  const classes = useStyles();
  return (
    <Card
      className={classes.card}
      style={{ backgroundImage: `url(${game.backgroundImg})` }}
    >
      <div className={classes.cardDiv}>
        <CardContent className={classes.cardContentCenter}>
          <ProjectHeader title={game.name} project={game.name} />
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ textAlign: 'center', width: '100%' }}
            className={classes.cardSummary}
          >
            {game.summary}
          </Typography>
          <Divider style={{ margin: 10, width: '100%' }} />
          <Link
            to={`/app/edit-game/${game.id}`}
            className={classes.cardLink}
            style={{ textDecoration: 'none' }}
          >
            <Button variant="contained" color="primary">
              Edit
            </Button>
          </Link>
        </CardContent>
      </div>
    </Card>
  );
}

export function EmptyGameComponent() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Link to={`/app/edit-game/new`} className={classes.cardLink}>
        <CardContent className={classes.cardContentCenter}>
          <div className={classes.flexCenter}>
            <Icon style={{ fontSize: 32, color: '#fff' }}>add_circle</Icon>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
