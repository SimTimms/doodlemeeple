import React from 'react';
import { useStyles } from '../styles';
import {
  IconButton,
  BorderBox,
  LoadIcon,
  Meta,
  Divider,
  MenuButtonStandard,
} from '../../../../../../components';
import { Mutation } from 'react-apollo';
import { toaster } from '../../../../../../utils/toaster';
import { CLOSE_JOB } from '../../../../../../data/mutations';

export default function CloseJobButton({ job, setPageValues, pageValues }) {
  const classes = useStyles();
  const [closeConfirm, setCloseConfirm] = React.useState(false);
  const [deleting, setDeleting] = React.useState(false);

  return deleting ? (
    <LoadIcon />
  ) : (
    <div className={classes.actionWrapper}>
      <Mutation
        mutation={CLOSE_JOB}
        variables={{
          _id: job._id,
        }}
        onCompleted={(data) => {
          setPageValues({
            ...pageValues,
            primaryPage: 'job_history',
            jobId: null,
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
            />
          );
        }}
      </Mutation>
    </div>
  );
}
