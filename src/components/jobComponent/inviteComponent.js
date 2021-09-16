import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import {
  MenuButtonStandard,
  Column,
  Row,
  DividerWithBorder,
  CardComponent,
  StatusBadge,
} from '../';
import { Mutation } from 'react-apollo';
import { UPDATE_INVITE } from '../../data/mutations';
import { nameShortener } from '../../utils';
import { timeDifferenceForDate } from '../../utils/dates';
import { JobDescriptionWidget } from '../../widgets';

export default function InviteComponent({ invite, onClickEvent }) {
  const classes = useStyles();
  const declined = invite.status === 'declined';
  const unopened = invite.status === 'unopened';
  const opened = invite.status === 'read';
  const quoted = invite.status === 'quote_sent';
  const rejected = invite.status === 'rejected';
  const draft = invite.status === 'draft';
  const accepted = invite.status === 'accepted';
  const jobClosed = invite.status === 'closed';
  const inviteJob = invite.job ? invite.job : null;
  const completed = inviteJob ? inviteJob.submitted === 'complete' : false;
  const [isOpen, setIsOpen] = React.useState(false);

  return !inviteJob ? (
    <CardComponent type="dark">
      <Typography>This Job No Longer Exists</Typography>
    </CardComponent>
  ) : (
    <Mutation
      mutation={UPDATE_INVITE}
      variables={{
        status: 'read',
        _id: invite._id,
      }}
    >
      {(mutation) => {
        return (
          <CardComponent>
            <Column>
              <Row
                j="space-between"
                a="center"
                onClick={() => {
                  invite.status === 'unopened' && mutation();
                  isOpen ? setIsOpen(false) : setIsOpen(true);
                }}
              >
                <Row a="center" j="flex-start">
                  <div
                    style={{
                      backgroundImage: `url(${invite.sender.profileImg})`,
                    }}
                    className={classes.profileThumb}
                  ></div>
                  <Column a="flex-start">
                    <Row j="space-between">
                      <Typography style={{ fontSize: 12 }}>
                        {`Invite from ${invite.sender.name} for ${nameShortener(
                          invite.job.name,
                          30
                        )}`}
                      </Typography>
                      <Typography style={{ fontSize: 12, marginRight: 10 }}>
                        {timeDifferenceForDate(invite.createdAt)}
                      </Typography>
                    </Row>
                    <StatusBadge
                      status={
                        draft
                          ? 'Complete your quote'
                          : completed
                          ? 'Completed'
                          : declined
                          ? 'Declined'
                          : unopened
                          ? 'Open this Invite'
                          : opened
                          ? 'Respond to Invite'
                          : quoted
                          ? 'Quote Submitted'
                          : rejected
                          ? 'Rejected'
                          : jobClosed
                          ? 'Job Closed'
                          : accepted && 'Accepted'
                      }
                      red={null}
                    />
                  </Column>
                </Row>
                {!declined && !jobClosed && (
                  <MenuButtonStandard
                    title={quoted ? 'Quotes' : isOpen ? 'Hide' : 'Show'}
                    color="primary"
                    icon={
                      completed
                        ? ''
                        : unopened || opened || quoted || accepted || draft
                        ? 'local_post_office'
                        : ''
                    }
                    onClickEvent={() => onClickEvent()}
                  />
                )}
              </Row>
              {isOpen && (
                <Column>
                  <DividerWithBorder />
                  <JobDescriptionWidget jobId={invite.job._id} />
                </Column>
              )}
            </Column>
          </CardComponent>
        );
      }}
    </Mutation>
  );
}
