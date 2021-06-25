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
import { CLOSE_EARLY } from '../../../../data';

export default function RequestCloseButton({ job, setTabNbr }) {
  const classes = useStyles();
  const [closeConfirm, setCloseConfirm] = React.useState(false);
  const [deleting, setDeleting] = React.useState(false);
  return deleting ? (
    <LoadIcon />
  ) : (
    <div className={classes.actionWrapper}>
      {!closeConfirm ? (
        <BorderBox w={300}>
          <Meta str="Request to close this job early?" />
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
            str={`This will notify ${process.env.REACT_APP_COMPANY_PUBLIC_NAME} that you wish to close this unfinished job`}
          />
          <Divider />
          <Meta
            str="
        Continue?"
          />
          <Mutation
            mutation={CLOSE_EARLY}
            variables={{
              _id: job.data._id,
            }}
            onCompleted={(data) => {
              setTabNbr(-1);
              toaster('Request Sent');
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
