import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { Mutation } from 'react-apollo';
import { SET_PUBLIC_JOB } from '../../../../../../../data/mutations';
import {
  NoticeBoardSecondary,
  Paper,
  Column,
  Row,
  IconButton,
} from '../../../../../../../components';
import autosave from '../../../../../../../utils/autosave';
import { toaster } from '../../../../../../../utils/toaster';
import JobWidget from '../../../../../../../widgets/job';

export default function ConfirmJob({ jobId, creativeId, history }) {
  //  const classes = useStyles();
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
          subTitle="How your job will appear"
          onClickEvent={() =>
            !isPublic
              ? history.push(`/app/pick-artist/${jobId}/${creativeId}`)
              : history.push(`/app/confirm-job/${jobId}`)
          }
          buttonLocked={false}
          lockedMsg={''}
        >
          <JobWidget jobId={jobId} />
        </NoticeBoardSecondary>
      )}
    </Mutation>
  );
}
