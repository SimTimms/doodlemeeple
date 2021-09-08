import React from 'react';
import { Typography, Icon } from '@material-ui/core';
import { useStyles } from './styles';
import { CardComponent, Column, Row, MenuButtonStandard } from '../';
import clsx from 'clsx';
import { HistoryContext, MenuContext } from '../../context';
import { nameShortener } from '../../utils';

export default function JobComponent({ job }) {
  const classes = useStyles();
  const contractsArr = job.contracts
    ? job.contracts.map((contract) =>
        contract.user ? contract.user._id : 'deleted'
      )
    : [];
  const contractsIn = job.contracts ? job.contracts.length > 0 : false;
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
    <MenuContext.Consumer>
      {(menu) => {
        return (
          <HistoryContext.Consumer>
            {() => (
              <CardComponent>
                <Row>
                  <Column j="flex-start" a="flex-start">
                    <Typography
                      variant="body1"
                      component="p"
                      style={{ width: '100%' }}
                      className={classes.cardSummary}
                    >
                      {nameShortener(job.name, 24)}
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
                          status === 'newQuote',
                        [classes.cardSummaryGood]: status === 'jobAccepted',
                      })}
                    >
                      {hasNewQuote.length > 0
                        ? 'Quote Recieved'
                        : complete
                        ? 'Completed'
                        : submitted && !job.isPublic && contractsIn === false
                        ? 'Invites sent'
                        : submitted && job.isPublic && !job.approved
                        ? 'Waiting for Approval'
                        : submitted && job.isPublic && job.approved
                        ? 'Job is Live'
                        : closed
                        ? 'Closed'
                        : accepted
                        ? 'In Progress'
                        : paid
                        ? 'Paid & Active'
                        : contractsIn
                        ? 'Quotes Received'
                        : totalDecline
                        ? 'All invites declined'
                        : draft && 'Draft'}
                    </Typography>
                  </Column>

                  {assignedCreative ? (
                    <div
                      key={`invite_1`}
                      title={`${assignedCreative.name} Active`}
                    >
                      <div
                        style={{
                          backgroundImage: `url(${assignedCreative.profileImg})`,
                        }}
                        className={classes.profileThumb}
                      ></div>
                    </div>
                  ) : job.invites ? (
                    job.invites.map((invite, index) => {
                      const contractFromArray =
                        invite.receiver &&
                        contractsArr.indexOf(invite.receiver._id);
                      const thisContract =
                        invite.receiver && job.contracts[contractFromArray];
                      const thisStatus =
                        invite.receiver && thisContract
                          ? thisContract.status
                          : null;
                      return (
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
                            className={clsx({
                              [classes.profileThumb]: true,
                              [classes.profileThumbNotification]:
                                (contractFromArray > -1 &&
                                  thisStatus === 'submitted') ||
                                invite.messages,
                            })}
                          >
                            {invite.status === 'declined' && (
                              <div className={classes.declined}>
                                <Typography
                                  style={{
                                    fontSize: 46,
                                    marginTop: '-2px',
                                  }}
                                >
                                  X
                                </Typography>
                              </div>
                            )}
                            {contractFromArray > -1 &&
                              thisStatus === 'submitted' && (
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
                  ) : null}
                  <Column a="center">
                    <Row j="flex-end">
                      <MenuButtonStandard
                        title="View Job"
                        onClickEvent={() => {
                          menu.updateMenuContext({
                            ...menu,
                            jobPage: {
                              ...menu.jobPage,
                              primaryPage: 'editing_job',
                              secondaryPage: 'job_dashboard',
                              jobId: job._id,
                            },
                          });
                        }}
                      />
                    </Row>
                  </Column>
                </Row>
              </CardComponent>
            )}
          </HistoryContext.Consumer>
        );
      }}
    </MenuContext.Consumer>
  );
}
