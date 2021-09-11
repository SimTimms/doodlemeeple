import React from 'react';
import { useStyles } from '../styles';
import { MenuButtonStandard } from '../../../../../../components';
import { Mutation } from 'react-apollo';
import { toaster } from '../../../../../../utils/toaster';
import { CLOSE_JOB } from '../../../../../../data/mutations';

export default function CloseJobButton({ job, menu }) {
  const classes = useStyles();

  return (
    <div className={classes.actionWrapper}>
      <Mutation
        mutation={CLOSE_JOB}
        variables={{
          _id: job._id,
        }}
        onCompleted={(data) => {
          menu.updateMenuContext({
            ...menu,
            jobPage: {
              ...menu.jobPage,
              primaryPage: 'job_history',
              jobId: null,
            },
          });
          toaster('Project Closed');
        }}
      >
        {(mutation) => {
          return (
            <MenuButtonStandard
              title="Close Job"
              onClickEvent={() => {
                mutation();
              }}
              type="delete"
              fullWidth={true}
            />
          );
        }}
      </Mutation>
    </div>
  );
}
