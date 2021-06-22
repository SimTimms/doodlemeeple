import { Typography } from '@material-ui/core';
import React from 'react';
import {
  //TaskQuote,
  TaskSubmitQuote,
  TaskEditQuote,
  TaskDeclineInvite,
} from '../../../../../../tasks';
import { useStyles } from './styles';

export default function TaskGenerator({
  history,
  job,
  draft,
  quoted,
  contractData,
  setTabNbr,
  noQuote,
}) {
  const classes = useStyles();
  const elementArray = [];
  if (noQuote) {
    // elementArray.push(<TaskQuote history={history} jobId={job.job._id} />);
  }

  if (draft) {
    elementArray.push(
      <TaskSubmitQuote history={history} quoteId={contractData._id} />
    );
  }

  if (quoted) {
    elementArray.push(
      <TaskEditQuote history={history} setTabNbr={setTabNbr} />
    );
  }
  if (!quoted || draft) {
    elementArray.push(<TaskDeclineInvite setTabNbr={setTabNbr} />);
  }

  return elementArray.length > 0 ? (
    elementArray
  ) : (
    <Typography className={classes.noTask}>No Tasks</Typography>
  );
}
