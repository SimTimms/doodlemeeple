import React from 'react';
import { Slide } from '@material-ui/core';
import { useStyles } from '../styles';
import { Column } from '../../../../../../components';
import { JobDescriptionWidget } from '../../../../../../widgets';

export default function CreatorJobSummary({ jobData, setTabNbr }) {
  const classes = useStyles();
  const job = jobData.data;

  return (
    <Slide direction="up" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <Column>
          <JobDescriptionWidget jobId={job._id} />
        </Column>
      </div>
    </Slide>
  );
}
