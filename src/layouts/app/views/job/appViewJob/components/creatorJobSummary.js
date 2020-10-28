import React from 'react';
import { Slide, Typography } from '@material-ui/core';
import { useStyles } from '../styles';
import {
  HeaderTwo,
  HeaderThree,
  Column,
  Meta,
  Paper,
  Divider,
} from '../../../../../../components';
import { timeDifferenceForDate } from '../../../../../../utils/dates';
import CloseJobButton from './closeJobButton';
import EndJobButton from './endJobButton';

export default function CreatorJobSummary({ jobData, setTabNbr }) {
  const classes = useStyles();
  const job = jobData.data;

  return (
    <Slide direction="up" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <Paper pt={16}>
          <Column>
            <HeaderTwo str={job.name} />
            <Meta
              str={`${timeDifferenceForDate(job.createdAt)} | ${job.user.name}`}
            />
            <Divider />
            <Typography>{job.summary}</Typography>
            <Divider />
            <Divider />
            <HeaderThree str="Creative Summary" />
            <Divider />
            <Typography>{job.creativeSummary}</Typography>
            <Divider />
            <Divider />
          </Column>
          {job.submitted !== 'closed' &&
            job.submitted !== 'paid' &&
            job.submitted !== 'accepted' &&
            job.submitted !== 'complete' && (
              <CloseJobButton job={jobData} setTabNbr={setTabNbr} />
            )}
          {job.submitted === 'paid' && (
            <EndJobButton job={jobData} setTabNbr={setTabNbr} />
          )}
        </Paper>
      </div>
    </Slide>
  );
}