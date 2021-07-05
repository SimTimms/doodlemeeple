import React from 'react';
import { NoticeBoardSecondary } from '../../../../../../../components';
import { JobWidget } from '../../../../../../../widgets';

export default function ConfirmJob({ jobId, creativeId, history }) {
  return (
    <NoticeBoardSecondary
      title=""
      subTitle="How your job will appear"
      onClickEvent={() => history.push(`/app/submit-job/${jobId}`)}
      buttonLocked={false}
      lockedMsg={''}
    >
      <JobWidget jobId={jobId} />
    </NoticeBoardSecondary>
  );
}
