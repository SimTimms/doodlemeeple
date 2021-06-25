import React from 'react';
import { Slide } from '@material-ui/core';
import { useStyles } from '../styles';
import { Column, Paper } from '../../../../imports/sharedComponents';
import CloseJobButton from './closeJobButton';
import EndJobButton from './endJobButton';
import RequestCloseButton from './requestCloseButton';
import JobSummaryComponent from './jobSummaryComponent';

export default function CreatorJobSummary({ jobData, setTabNbr }) {
  const classes = useStyles();
  const job = jobData.data;
  const allPaidSuccess = job.activeContract
    ? job.activeContract.paymentTerms.filter((item) => item.paid === 'success')
    : [];
  const allPaid = job.activeContract
    ? allPaidSuccess.length === job.activeContract.paymentTerms.length
    : false;

  return (
    <Slide direction="up" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <Paper pt={16}>
          <Column>
            <JobSummaryComponent job={job} />
          </Column>
          {job.submitted !== 'closed' && job.submitted !== 'complete' && (
            <CloseJobButton job={jobData} setTabNbr={setTabNbr} />
          )}
          {job.submitted === 'paid' && allPaid && (
            <EndJobButton job={jobData} setTabNbr={setTabNbr} />
          )}
          {job.submitted === 'paid' && !allPaid && (
            <RequestCloseButton job={jobData} setTabNbr={setTabNbr} />
          )}
        </Paper>
      </div>
    </Slide>
  );
}
