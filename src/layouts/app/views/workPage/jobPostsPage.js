import React from 'react';
import JobPosts from '../job/workDashboard/jobPosts';
import CreateJob from '../../../../widgets/editJob/createJob';
import { UpdateJob } from '../../../../widgets/';

export default function JobPostsPage({ pageValues, setPageValues }) {
  return pageValues.secondaryPage === 'job_ads' ? (
    <JobPosts setJobId={setPageValues} />
  ) : pageValues.secondaryPage === 'create_job_ad' &&
    pageValues.jobId === null ? (
    <CreateJob pageValues={pageValues} />
  ) : (
    <UpdateJob jobId={pageValues.jobId} />
  );
}
