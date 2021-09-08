import React, { useEffect } from 'react';
import { TabPage } from '../../../../components';
import { CountContext, MenuContext } from '../../../../context';
import {
  jobMenu,
  jobMenuSecondary,
  jobDashboardSecondary,
  quoteViewMenu,
  jobBoardMenu,
} from '../../../menuArray';
import { CreateJob } from '../../../../widgets';
import JobDashboardPage from './jobDashboardPage';
import JobHistory from './jobHistory';
import JobPosts from './components/jobPosts';
import JobBoardPage from './jobBoardPage';

export default function JobPage({ jumpTo }) {
  return (
    <CountContext.Consumer>
      {(counts) => (
        <MenuContext.Consumer>
          {(menu) => {
            return (
              <TabPage
                title={null}
                primaryMenu={jobMenu(counts, menu)}
                secondaryMenu={
                  (menu.jobPage.primaryPage === 'editing_job' &&
                    menu.jobPage.secondaryPage === 'view_quote') ||
                  menu.jobPage.secondaryPage === 'contract'
                    ? quoteViewMenu(menu)
                    : menu.jobPage.primaryPage === 'editing_job'
                    ? jobDashboardSecondary(counts, menu)
                    : menu.jobPage.primaryPage === 'job_posts'
                    ? jobMenuSecondary(counts, menu)
                    : menu.jobPage.primaryPage === 'job_board' &&
                      menu.jobPage.jobId &&
                      jobBoardMenu(menu)
                }
                menu={null}
                activePrimary={menu.jobPage.primaryPage}
                activeSecondary={menu.jobPage.secondaryPage}
              >
                {menu.jobPage.primaryPage === 'editing_job' ? (
                  <JobDashboardPage />
                ) : menu.jobPage.primaryPage === 'job_board' ? (
                  <JobBoardPage />
                ) : menu.jobPage.primaryPage === 'job_posts' &&
                  menu.jobPage.secondaryPage === 'job_ads' ? (
                  <JobPosts />
                ) : menu.jobPage.primaryPage === 'job_posts' &&
                  menu.jobPage.secondaryPage === 'create_job_ad' ? (
                  <CreateJob />
                ) : (
                  menu.jobPage.primaryPage === 'job_history' && <JobHistory />
                )}
              </TabPage>
            );
          }}
        </MenuContext.Consumer>
      )}
    </CountContext.Consumer>
  );
}
