import React, { useEffect } from 'react';
import { Slide } from '@material-ui/core';
import { useStyles } from './styles';

import { checkLength } from './unlock';
import { initialState } from './initialState';

export default function EditQuote({ jobId, history, creativeId }) {
  const classes = useStyles();
  const [job, setJob] = React.useState(initialState);
  const [locked, setLocked] = React.useState(false);
  const [savedCreative, setSavedCreative] = React.useState(false);

  useEffect(() => {
    setLocked(
      !checkLength(job.name, 'name') ||
        !checkLength(job.genre, 'genre') ||
        !checkLength(job.summary, 'summary') ||
        !checkLength(job.creativeSummary, 'creativeSummary') ||
        job.keywords.length === 0
    );
    creativeId && setSavedCreative(creativeId);
  }, [job, setLocked, creativeId]);

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}></div>
    </Slide>
  );
}
