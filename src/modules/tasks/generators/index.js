import { Typography } from '@material-ui/core';
import React from 'react';
import {
  TaskCloseThisProject,
  TaskContinueWithJobDraft,
} from '../../../modules/tasks';

export default function TaskGeneratorClient({
  setTabNbr,
  job,
  contracts,
  history,
}) {
  const elementArray = [];
  const noContracts = contracts.length === 0;
  const isDraft = job.submitted === 'draft';

  isDraft &&
    elementArray.push(
      <TaskContinueWithJobDraft history={history} jobId={job._id} />
    );
  (noContracts || job.submitted === 'totalDecline') &&
    elementArray.push(<TaskCloseThisProject setTabNbr={setTabNbr} />);

  return elementArray.length > 0 ? (
    elementArray
  ) : (
    <Typography style={{ fontStyle: 'italic' }}>You have no tasks</Typography>
  );
}
