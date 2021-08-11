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
      {!closeConfirm ? (
        <BorderBox w={300}>
          <Meta str="Close this job?" />
          <Divider />
          <MenuButtonStandard
            title="Close Job"
            onClickEvent={() => setCloseConfirm(true)}
            type="delete"
          />
        </BorderBox>
      ) : (
        <BorderBox w={300}>
          <Meta
            str="
            This will close the project. Your chosen creatives will be unable to send a quote or discuss this job further."
          />
          <Divider />
          <Meta
            str="
        Continue?"
          />
          <Divider />

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
                  title="Confirm"
                  onClickEvent={() => {
                    setDeleting(true);
                    mutation();
                  }}
                  type="delete"
                />
              );
            }}
          </Mutation>
          <IconButton
            color="text-mini"
            icon=""
            title="Cancel"
            onClickEvent={() => setCloseConfirm(false)}
            styleOverride={{ width: '100%' }}
            iconPos="right"
          />
        </BorderBox>
      )}
    </div>
  );
}
