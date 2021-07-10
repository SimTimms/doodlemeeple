import React from 'react';
import { Typography, Icon } from '@material-ui/core';
import { useStyles } from './styles';
import { CardComponent, Column, Row } from '../';
import clsx from 'clsx';

export default function JobComponent({ job, game, history }) {
  const classes = useStyles();
  const contractsArr = job.contracts.map((contract) =>
    contract.user ? contract.user._id : 'deleted'
  );
  const contractsIn = job.contracts.length > 0;
  const submitted = job.submitted === 'submitted';
  const totalDecline = job.submitted === 'totalDecline';
  const accepted = job.submitted === 'accepted';
  const paid = job.submitted === 'paid';
  const closed = job.submitted === 'closed';
  const complete = job.submitted === 'complete';
  const assignedCreative = job.assignedCreative ? job.assignedCreative : null;
  const draft = job.submitted === 'draft';
  const hasNewQuote = contractsArr.filter(
    (item) => item.status === 'submitted'
  );
  const status = totalDecline
    ? 'totalDecline'
    : hasNewQuote.length > 0
    ? 'newQuote'
    : accepted
    ? 'jobAccepted'
    : contractsIn
    ? 'hasContracts'
    : submitted
    ? 'jobSubmitted'
    : closed
    ? 'jobClosed'
    : draft && 'jobDraft ';
  return (
    <CardComponent
      onClickEvent={() => {
        history.push(`/app/view-job/${job._id}`);
      }}
    >
      <Row>
        <Column j="flex-start" a="flex-start">
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
              [classes.cardSummaryWarning]:
                status === 'hasContracts' ||
                status === 'totalDecline' ||
                status === 'jobDraft' ||
                status === 'newQuote' ||
                draft,
              [classes.cardSummaryGood]:
                status === 'jobAccepted' || status === 'jobSubmitted',
            })}
          >
            {hasNewQuote.length > 0
              ? 'Task: Reply to Quote'
              : complete
              ? 'Completed'
              : submitted && !job.isPublic
              ? 'Invites sent'
              : submitted && job.isPublic
              ? 'Submitted'
              : closed
              ? 'Closed'
              : accepted
              ? 'In Progress'
              : paid
              ? 'Paid & Active'
              : contractsIn
              ? 'Quotes Received'
              : totalDecline
              ? 'Inactive: All invites declined'
              : draft && 'Task: Finish and submit'}
          </Typography>
        </Column>
        <Column a="center">
          <Row j="flex-end">
            {job.contracts.map((contract, index) => {
              if (contract.status === 'submitted') {
                return (
                  <div key={`invite_${index}`} title={`${contract.user.name}`}>
                    <div
                      style={{
                        backgroundImage: `url(${contract.user.profileImg})`,
                      }}
                      className={classes.profileThumb}
                    >
                      <Icon className={classes.count}>mail</Icon>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </Row>
        </Column>

        {assignedCreative ? (
          <div key={`invite_1`} title={`${assignedCreative.name} Active`}>
            <div
              style={{
                backgroundImage: `url(${assignedCreative.profileImg})`,
              }}
              className={classes.profileThumb}
            ></div>
          </div>
        ) : (
          job.invites.map((invite, index) => {
            const contractFromArray =
              invite.receiver && contractsArr.indexOf(invite.receiver._id);
            const thisContract =
              invite.receiver && job.contracts[contractFromArray];
            const thisStatus =
              invite.receiver && thisContract ? thisContract.status : null;
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
                  {contractFromArray > -1 && thisStatus === 'submitted' && (
                    <Typography
                      variant="body1"
                      component="p"
                      className={classes.countsStyle}
                    >
                      <Icon style={{ fontSize: 10 }}>star</Icon>
                    </Typography>
                  )}
                  {invite.messages > 0 && (
                    <Typography
                      variant="body1"
                      component="p"
                      className={classes.countsStyle}
                    >
                      <Icon style={{ fontSize: 10 }}>mail</Icon>
                    </Typography>
                  )}
                </div>
              </div>
            );
          })
        )}
      </Row>
    </CardComponent>
  );
}
