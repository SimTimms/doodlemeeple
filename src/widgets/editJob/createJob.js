import React from 'react';
import { Slide } from '@material-ui/core';
import { useStyles } from './styles';
import { Column, NoticeBoardSecondary,  } from '../../components';
import { Mutation } from 'react-apollo';
import { CREATE_JOB } from './data';
import { toaster } from '../../utils/toaster';
import NewJobName from './components/newJobName';
import { initialState } from './initialState';

export default function CreateJob({ menu, cb }) {
  const classes = useStyles();
  const [job, setJob] = React.useState(initialState);

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <Column j="center">
          <Mutation
            mutation={CREATE_JOB}
            variables={{
              name: job.name,
              summary: job.summary,
              creativeSummary: '',
              location: job.location,
              showreel: job.showreel,
              type: job.type,
              submitted: job.submitted,
              isPublic: true,
              approved: true,
            }}
            onCompleted={(data) => {
              toaster('Saved');
              setJob(initialState);
              cb();
            }}
          >
            {(mutation) => {
              return (
                <NoticeBoardSecondary
                  subTitle="Summarise the job you're offering"
                  onClickEvent={() => mutation()}
                  buttonLocked={job.name.length < 10 || job.summary.length < 10}
                  lockedMsg={`${
                    job.name.length < 10
                      ? 10 - job.name.length
                      : job.summary.length < 10 && 10 - job.summary.length
                  } characters required `}
                  buttonTitle="Post this Job"
                  buttonIcon="thumb_up"
                  minimisable={true}
                >
                  <NewJobName setJob={setJob} job={job} />
                </NoticeBoardSecondary>
              );
            }}
          </Mutation>
        </Column>
      </div>
    </Slide>
  );
}
