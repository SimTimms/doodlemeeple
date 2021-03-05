import { Typography } from '@material-ui/core';
import React from 'react';
import {
  TaskCloseThisProject,
  TaskOpenQuote,
  TaskContinueWithJobDraft,
} from '../../../../../../../modules/tasks';
import { useStyles } from './styles';

export default function TaskGeneratorClient({
  setTabNbr,
  job,
  contracts,
  setOpenQuoteId,
  history,
}) {
  const classes = useStyles();
  const elementArray = [];
  const noContracts = contracts.length === 0;
  const isDraft = job.submitted === 'draft';

  {
    contracts.map((contract, index) => {
      elementArray.push(
        <TaskOpenQuote
          setOpenQuoteId={() => setOpenQuoteId(contract._id)}
          key={`task_${index}`}
        />
      );
    }, elementArray);
  }
  isDraft &&
    elementArray.push(
      <TaskContinueWithJobDraft history={history} jobId={job._id} />
    );
  (noContracts || job.submitted === 'totalDecline') &&
    elementArray.push(<TaskCloseThisProject setTabNbr={setTabNbr} />);
  return elementArray.length > 0 ? (
    elementArray
  ) : (
    <Typography className={classes.noTask}>No Tasks</Typography>
  );
}
