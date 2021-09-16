import React from 'react';
import { useStyles } from '../styles';
import { MenuButtonStandard } from '../../../../../../components';
import { Mutation } from 'react-apollo';
import { toaster } from '../../../../../../utils/toaster';
import { PUBLISH_JOB } from './data';

export default function PublishJobButton({ job, setJobData }) {
  const classes = useStyles();

  return (
    <div className={classes.actionWrapper}>
      <Mutation
        mutation={PUBLISH_JOB}
        variables={{
          _id: job._id,
          approved: job.approved ? false : true,
        }}
        onCompleted={(data) => {
          setJobData({
            ...job,
            approved: job.approved ? false : true,
          });
          toaster(job.approved ? 'Job Removed' : 'Job Posted');
        }}
      >
        {(mutation) => {
          return (
            <MenuButtonStandard
              title={
                job.approved ? 'Remove from Job Board' : 'Post to Job Board'
              }
              onClickEvent={() => {
                mutation();
              }}
              fullWidth={true}
            />
          );
        }}
      </Mutation>
    </div>
  );
}
