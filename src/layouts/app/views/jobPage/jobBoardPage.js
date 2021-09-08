import React from 'react';
import { JobBoardWidget, JobDescriptionWidget } from '../../../../widgets';
import { MenuContext } from '../../../../context';

export default function JobBoardPage() {
  return (
    <MenuContext.Consumer>
      {(menu) =>
        menu.jobPage.primaryPage === 'job_board' && !menu.jobPage.jobId ? (
          <JobBoardWidget />
        ) : (
          <JobDescriptionWidget jobId={menu.jobPage.jobId} />
        )
      }
    </MenuContext.Consumer>
  );
}
