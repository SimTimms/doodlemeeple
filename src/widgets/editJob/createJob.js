import React from 'react';
import { Slide } from '@material-ui/core';
import { useStyles } from './styles';
import { Column, NoticeBoardSecondary } from '../../components';
import { Mutation } from 'react-apollo';
import { CREATE_JOB } from './data';
import { toaster } from '../../utils/toaster';
import NewJobName from './components/newJobName';
import { initialState } from './initialState';
import { HistoryContext } from '../../context';

export default function CreateJob() {
  const classes = useStyles();
  const [job, setJob] = React.useState(initialState);

  return (
    <HistoryContext.Consumer>
      {(history) => (
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
          <div className={classes.root}>
            <Column j="center">
              <Mutation
                mutation={CREATE_JOB}
                variables={{
                  name: job.name,
                  summary: '',
                  creativeSummary: '',
                  location: job.location,
                  showreel: job.showreel,
                  type: job.type,
                  submitted: job.submitted,
                }}
                onCompleted={(data) => {
                  toaster('Saved');
                  history.push(`/app/update-job/${data.jobCreateOne.recordId}`);
                }}
              >
                {(mutation) => {
                  return (
                    <NoticeBoardSecondary
                      subTitle="Summarise the job you're offering"
                      onClickEvent={() => mutation()}
                      buttonLocked={job.name.length < 10}
                      lockedMsg={`${10 - job.name.length} characters required `}
                    >
                      <NewJobName setJob={setJob} job={job} />
                    </NoticeBoardSecondary>
                  );
                }}
              </Mutation>
            </Column>
          </div>
        </Slide>
      )}
    </HistoryContext.Consumer>
  );
}
