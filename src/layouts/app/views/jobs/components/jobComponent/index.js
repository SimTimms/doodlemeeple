import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import { useStyles } from './styles';
import Icon from '@material-ui/core/Icon';

export function JobComponent({ job }) {
  const classes = useStyles();
  console.log(job);
  return (
    <Card className={classes.card}>
      <div
        style={{
          background: `url(${job.game.backgroundImg})`,
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
          {job.name}
        </Typography>

        <Typography
          variant="body2"
          component="p"
          style={{ width: '100%', paddingLeft: 10 }}
          className={classes.cardSummary}
        >
          {job.game.name}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          style={{ width: '100%', paddingLeft: 10 }}
          className={classes.cardSummary}
        >
          {job.submitted ? 'Submitted' : 'Draft'}
        </Typography>
      </div>

      <Link
        to={`/app/edit-job/${job.id}`}
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

export function EmptyJobComponent() {
  const classes = useStyles();
  return (
    <Link to={`/app/edit-job/new`} className={classes.cardLink}>
      <div className={classes.flexCenter}>
        <Icon style={{ fontSize: 32, color: '#444' }}>add_circle</Icon>
        <Typography
          variant="body1"
          component="p"
          style={{ width: '100%', paddingLeft: 10, color: '#444' }}
          className={classes.cardSummary}
        >
          Add a Job
        </Typography>
      </div>
    </Link>
  );
}
