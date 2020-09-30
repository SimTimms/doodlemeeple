import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from '../styles';
import { IconButton, BorderBox } from '../../../../../../components';
import { Mutation } from 'react-apollo';
import { toaster } from '../../../../../../utils/toaster';
import { CLOSE_JOB } from '../../../../../../data/mutations';

export default function CloseButton({ job, jobId, setJob }) {
  const classes = useStyles();
  const [closeConfirm, setCloseConfirm] = React.useState(false);

  return (
    <div className={classes.actionWrapper}>
      {!closeConfirm ? (
        <BorderBox w={300}>
          <IconButton
            color="warning"
            icon="close"
            title="Close Job"
            onClickEvent={() => setCloseConfirm(true)}
            styleOverride={{ width: '100%' }}
            iconPos="right"
          />
        </BorderBox>
      ) : (
        <div
          style={{
            background: '#fff',
            padding: 20,
            textAlign: 'center',
          }}
        >
          <Typography variant="h6" style={{ marginBottom: 20 }}>
            This will permanently close the project. Your chosen creatives will
            be unable to send a quote or discuss this job further.
          </Typography>
          <Typography variant="h6">Do you want to continue?</Typography>
          <Mutation
            mutation={CLOSE_JOB}
            variables={{
              _id: jobId,
              submitted: 'closed',
            }}
            onCompleted={(data) => {
              toaster('Project Closed');
            }}
          >
            {(mutation) => {
              return (
                <IconButton
                  color="warning"
                  icon="warning"
                  title="Confirm"
                  onClickEvent={() => {
                    setJob({ ...job, submitted: 'closed' });
                    mutation();
                  }}
                  styleOverride={{ width: '100%' }}
                  iconPos="right"
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
        </div>
      )}
    </div>
  );
}
