import React from 'react';
import { Typography } from '@material-ui/core';
import { Mutation } from 'react-apollo';
import { SET_PUBLIC_JOB } from '../../../../../../../data/mutations';
import {
  NoticeBoardSecondary,
  Paper,
  Column,
  IconButton,
} from '../../../../../../../components';
import autosave from '../../../../../../../utils/autosave';
import { toaster } from '../../../../../../../utils/toaster';

export default function PickJobType({ jobId, creativeId, history }) {
  const [isPublic, setIsPublic] = React.useState(false);

  return (
    <Mutation
      mutation={SET_PUBLIC_JOB}
      variables={{
        _id: jobId,
        isPublic,
      }}
      onCompleted={(data) => {
        toaster('Autosave');
      }}
    >
      {(mutation) => (
        <NoticeBoardSecondary
          title=""
          subTitle="Invite Professionals or publish on the Job Board?"
          onClickEvent={() =>
            !isPublic
              ? history.push(`/app/pick-artist/${jobId}/${creativeId}`)
              : history.push(`/app/confirm-job/${jobId}`)
          }
          buttonLocked={false}
          lockedMsg={''}
        >
          <Paper w={400}>
            <Column a="center">
              <IconButton
                color="text-dark"
                title={isPublic ? 'Job Board' : 'Invite Only'}
                icon={isPublic ? 'toggle_on' : 'toggle_off'}
                onClickEvent={() => {
                  setIsPublic(isPublic);
                  isPublic ? setIsPublic(false) : setIsPublic(true);
                  autosave(mutation);
                }}
                styleOverride={{
                  width: 150,
                  border: '1px solid #ccc',
                  marginLeft: 10,
                }}
              />
              <Typography
                variant="body1"
                align="center"
                style={{ fontStyle: 'italic' }}
              >
                {isPublic
                  ? 'This job will be published on the job board, professionals will contact you with quotes'
                  : 'You can invite up to 5 professionals to quote for this job'}
              </Typography>
            </Column>
          </Paper>
        </NoticeBoardSecondary>
      )}
    </Mutation>
  );
}
