import React from 'react';
import { NoticeBoardSecondary } from '../../../../../../../components';
import { SUBMIT_BRIEF } from '../../../../../../../data/mutations';
import { Mutation } from 'react-apollo';

export default function SubmitJob({ jobId, history }) {
  return (
    <Mutation
      mutation={SUBMIT_BRIEF}
      variables={{
        jobId: jobId,
      }}
      onCompleted={() => history.push(`/app/projects`)}
    >
      {(mutation) => {
        return (
          <NoticeBoardSecondary
            title="Submit this job to the job board?"
            subTitle="Click continue to submit this job, it will appear on the job board after approval by DoodleMeeple admin"
            onClickEvent={() => mutation()}
            buttonLocked={false}
            lockedMsg={''}
          ></NoticeBoardSecondary>
        );
      }}
    </Mutation>
  );
}
