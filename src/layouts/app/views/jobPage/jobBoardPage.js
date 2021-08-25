import React from 'react';
import { JobBoardWidget, JobDescriptionWidget } from '../../../../widgets';

export default function JobBoardPage({ pageValues }) {
  return pageValues.primaryPage === 'job_board' && !pageValues.jobId ? (
    <JobBoardWidget />
  ) : (
    <JobDescriptionWidget jobId={pageValues.jobId} />
  );
}
