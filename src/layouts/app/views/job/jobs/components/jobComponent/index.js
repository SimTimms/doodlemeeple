import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import { useStyles } from './styles';
import Icon from '@material-ui/core/Icon';
import { IconButton } from '../../../../../../../components';

export function JobComponent({ job, game, history }) {
  const classes = useStyles();
  return (
    <Card className={classes.card} style={{ paddingLeft: 10 }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          marginLeft: 20,
        }}
      >
        <Typography
          variant="body1"
          component="p"
          style={{ width: '100%' }}
          className={classes.cardSummary}
        >
          {job.name}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          style={{ width: '100%' }}
          className={classes.cardSummary}
        >
          {game.name}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          style={{ width: '100%' }}
          className={classes.cardSummary}
        >
          {job.submitted === 'submitted'
            ? 'Submitted'
            : job.submitted === 'closed'
            ? 'closed'
            : 'Draft'}
        </Typography>
      </div>
      {job.invites.map((invite, index) => (
        <div
          key={`invite_${index}`}
          style={{ marginRight: -10 }}
          title={`${invite.receiver.name} ${
            invite.status === 'declined' ? '(declined)' : ''
          }`}
        >
          <div
            style={{
              backgroundImage: `url(${invite.receiver.profileImg})`,
            }}
            className={classes.profileThumb}
          >
            {invite.status === 'declined' && (
              <div className={classes.declined}></div>
            )}
          </div>
        </div>
      ))}
      <IconButton
        disabled={false}
        title={
          job.submitted === 'submitted' || job.submitted === 'closed'
            ? 'View'
            : 'Edit'
        }
        color="primary"
        type="button"
        iconPos="right"
        icon={
          job.submitted === 'submitted' || job.submitted === 'closed'
            ? 'preview'
            : 'edit'
        }
        styleOverride={{ marginRight: 10, marginLeft: 30 }}
        onClickEvent={() => {
          job.submitted
            ? history.push(`/app/view-job/${job._id}`)
            : history.push(`/app/edit-job/${job._id}`);
        }}
      />
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
          Create a Brief
        </Typography>
      </div>
    </Link>
  );
}
