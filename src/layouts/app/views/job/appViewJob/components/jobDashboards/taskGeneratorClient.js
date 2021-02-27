import { Typography } from '@material-ui/core';
import React from 'react';
import {
  TaskQuote,
  TaskSubmitQuote,
  TaskEditQuote,
  TaskCloseThisProject,
} from '../../../../../../../modules/tasks';
import { useStyles } from './styles';

export default function TaskGeneratorClient({ setTabNbr, job }) {
  const classes = useStyles();
  const elementArray = [];

  job.submitted === 'totalDecline' &&
    elementArray.push(<TaskCloseThisProject setTabNbr={setTabNbr} />);
  return elementArray.length > 0 ? (
    elementArray
  ) : (
    <Typography className={classes.noTask}>No Tasks</Typography>
  );
}
