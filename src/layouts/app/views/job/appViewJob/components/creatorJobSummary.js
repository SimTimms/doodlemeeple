import React from 'react';
import { Slide } from '@material-ui/core';
import { useStyles } from '../styles';
import { Column } from '../../../../../../components';
import CloseJobButton from './closeJobButton';
import EndJobButton from './endJobButton';
import RequestCloseButton from './requestCloseButton';
import { JobDescriptionWidget } from '../../../../../../widgets';

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
        <Column>
          <JobDescriptionWidget jobId={job._id} />
        </Column>
        {job.submitted !== 'closed' &&
          job.submitted !== 'complete' &&
          job.submitted !== 'accepted' && (
            <CloseJobButton job={jobData} setTabNbr={setTabNbr} />
          )}
        {job.submitted === 'paid' && allPaid && (
          <EndJobButton job={jobData} setTabNbr={setTabNbr} />
        )}
        {job.submitted === 'paid' && !allPaid && (
          <RequestCloseButton job={jobData} setTabNbr={setTabNbr} />
        )}
      </div>
    </Slide>
  );
}
