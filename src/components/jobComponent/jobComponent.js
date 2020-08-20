import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import Icon from '@material-ui/core/Icon';
import { IconButton, CardComponent } from '../';
import clsx from 'clsx';

export default function JobComponent({ job, game, history }) {
  const classes = useStyles();
  const contractsArr = job.contracts.map((contract) => contract.user._id);

  return (
    <CardComponent>
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
          className={clsx({
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
        return (
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
      <IconButton
        disabled={false}
        title={
          job.submitted === 'submitted' || job.submitted === 'closed'
            ? 'View'
            : job.submitted === 'accepted' || job.submitted === 'paid'
            ? ''
            : 'Edit'
        }
        color="text-dark"
        type="button"
        iconPos="right"
        icon={
          job.submitted === 'submitted' || job.submitted === 'closed'
            ? 'preview'
            : job.submitted === 'accepted' || job.submitted === 'paid'
            ? 'chevron_right'
            : 'edit'
        }
        styleOverride={{ marginRight: 10, marginLeft: 30 }}
        onClickEvent={() => {
          job.submitted
            ? history.push(`/app/view-job/${job._id}`)
            : history.push(`/app/edit-job/${job._id}`);
        }}
      />
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