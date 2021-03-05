import { Typography } from '@material-ui/core';
import React from 'react';
import {
  TaskCloseThisProject,
  TaskOpenQuote,
} from '../../../../../../../modules/tasks';
import { useStyles } from './styles';

export default function TaskGeneratorClient({
  setTabNbr,
  job,
  contracts,
  setOpenQuoteId,
}) {
  const classes = useStyles();
  const elementArray = [];

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

  job.submitted === 'totalDecline' &&
    elementArray.push(<TaskCloseThisProject setTabNbr={setTabNbr} />);
  return elementArray.length > 0 ? (
    elementArray
  ) : (
    <Typography className={classes.noTask}>No Tasks</Typography>
  );
}
