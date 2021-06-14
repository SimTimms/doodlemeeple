import React from 'react';
import { useStyles } from '../styles';
import {
  IconButton,
  BorderBox,
  LoadIcon,
  Meta,
  Divider,
} from '../../../components/sharedComponents';
import { Mutation } from 'react-apollo';
import { toaster } from '../../sharedUtils';
import { COMPLETE_JOB } from '../../../data';

export default function EndJobButton({ job, setTabNbr }) {
  const classes = useStyles();
  const [closeConfirm, setCloseConfirm] = React.useState(false);
  const [deleting, setDeleting] = React.useState(false);

  return deleting ? (
    <LoadIcon />
  ) : (
    <div className={classes.actionWrapper}>
      {!closeConfirm ? (
        <BorderBox w={300}>
          <Meta str="Is this job complete?" />
          <IconButton
            color="warning"
            icon="local_post_office"
            title="Yes"
            onClickEvent={() => setCloseConfirm(true)}
            styleOverride={{ width: '100%' }}
            iconPos="right"
          />
        </BorderBox>
      ) : (
        <BorderBox w={300}>
          <Meta
            str="
            This will permanently close the project. Are you sure this project is complete?"
          />
          <Divider />
          <Meta
            str="
        Continue?"
          />
          <Mutation
            mutation={COMPLETE_JOB}
            variables={{
              _id: job.data._id,
            }}
            onCompleted={(data) => {
              job.setData({ ...job.data, submitted: 'complete' });
              setTabNbr(-1);
              toaster('Project Complete');
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
