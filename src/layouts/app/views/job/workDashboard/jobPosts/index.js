import React from 'react';

import { Column, Divider } from '../../../../../../components';
import AllJobs from './allJobs';

export default function JobPosts({ setJobId }) {
  return (
    <Column a="center" j="flex-start">
      <Divider />
      <AllJobs setJobId={setJobId} />
    </Column>
  );
}
