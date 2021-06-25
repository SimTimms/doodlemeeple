import React from 'react';
import { useStyles } from '../styles';
import {
  IconButton,
  BorderBox,
  LoadIcon,
  Meta,
  Divider,
} from '../../../../imports/sharedComponents';
import { Mutation } from 'react-apollo';
import { toaster } from '../../sharedUtils';
import { CLOSE_JOB } from '../../../../data';

export default function CloseJobButton({ job, setTabNbr }) {
  const classes = useStyles();
  const [closeConfirm, setCloseConfirm] = React.useState(false);
  const [deleting, setDeleting] = React.useState(false);

  return deleting ? (
    <LoadIcon />
  ) : (
    <div className={classes.actionWrapper}>
      {!closeConfirm ? (
        <BorderBox w={300}>
          <Meta str="Permanently close this job?" />
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
        <BorderBox w={300}>
          <Meta
            str="
            This will permanently close the project. Your chosen creatives will
            be unable to send a quote or discuss this job further."
          />
          <Divider />
          <Meta
            str="
        Continue?"
          />
          <Mutation
            mutation={CLOSE_JOB}
            variables={{
              _id: job.data._id,
            }}
            onCompleted={(data) => {
              job.setData({ ...job.data, submitted: 'closed' });
              setTabNbr(-1);
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
                    setDeleting(true);
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
        </BorderBox>
      )}
    </div>
  );
}
