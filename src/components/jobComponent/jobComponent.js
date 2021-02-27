import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';
import Icon from '@material-ui/core/Icon';
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
  const draft = job.submitted === 'draft';

  return (
    <CardComponent
      onClickEvent={() => {
        draft
          ? history.push(`/app/edit-job/${job._id}`)
          : history.push(`/app/view-job/${job._id}`);
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
                contractsIn || totalDecline || draft,
              [classes.cardSummaryGood]: paid || accepted || submitted,
            })}
          >
            {complete
              ? 'Completed'
              : submitted
              ? 'Invites sent'
              : closed
              ? 'Closed'
              : accepted
              ? 'Awaiting Payment'
              : paid
              ? 'Paid & Active'
              : contractsIn
              ? 'Quotes Received'
              : totalDecline
              ? 'Inactive: All invites declined'
              : 'Task: Finish and submit'}
          </Typography>
        </Column>
        {job.invites.map((invite, index) => {
          const contractFromArray =
            invite.reciever && contractsArr.indexOf(invite.receiver._id);
          const thisContract =
            invite.reciever && job.contracts[contractFromArray];
          const thisStatus =
            invite.reciever && thisContract ? thisContract.status : null;
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
        })}
      </Row>
    </CardComponent>
  );
}
