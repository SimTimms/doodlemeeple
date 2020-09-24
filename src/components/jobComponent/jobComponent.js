import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import Icon from '@material-ui/core/Icon';
import { CardComponent } from '../';
import clsx from 'clsx';

export default function JobComponent({ job, game, history }) {
  const classes = useStyles();
  const contractsArr = job.contracts.map((contract) => contract.user._id);

  return (
    <CardComponent
      onClickEvent={() => {
        job.submitted
          ? history.push(`/app/view-job/${job._id}`)
          : history.push(`/app/edit-job/${job._id}`);
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          width: '100%',
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
          className={clsx({
            [classes.cardSummaryNeutral]: true,
            [classes.cardSummary]: true,
            [classes.cardSummaryWarning]: job.submitted === 'accepted',
            [classes.cardSummaryGood]:
              job.submitted === 'paid' || job.submitted === 'submitted',
          })}
        >
          {job.submitted === 'submitted'
            ? 'Invites sent'
            : job.submitted === 'closed'
            ? 'Closed'
            : job.submitted === 'accepted'
            ? 'Awaiting Payment'
            : job.submitted === 'paid'
            ? 'Paid & Active'
            : 'Draft'}
        </Typography>
      </div>
      {job.invites.map((invite, index) => {
        return !invite.receiver ? (
          <div
            className={classes.profileThumb}
            title="User account no longer available"
          >
            X
          </div>
        ) : (
          <div
            key={`invite_${index}`}
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
              {contractsArr.indexOf(invite.receiver._id) > -1 && (
                <Typography
                  variant="body1"
                  component="p"
                  className={classes.countsStyle}
                >
                  1
                </Typography>
              )}
            </div>
          </div>
        );
      })}
    </CardComponent>
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
