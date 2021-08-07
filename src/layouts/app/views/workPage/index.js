import React from 'react';
import { TabPage } from '../../../../components';
import { HistoryContext } from '../../../../context';
import {
  workMenu,
  workMenuSecondary,
  jobDashboardSecondary,
} from '../../../menuArray';
import { QuoteOutWidget, UpdateJob } from '../../../../widgets';
import { MenuContext } from '../../../../context';
import JobPostsPage from './jobPostsPage';
import JobDashboardPage from './jobDashboardPage';
import JobHistory from '../job/workDashboard/jobHistory';

export default function WorkPage() {
  const [pageValues, setPageValues] = React.useState({
    primaryPage: 'job_posts',
    secondaryPage: 'job_ads',
    jobId: null,
  });

  return (
    <MenuContext.Provider
      value={{
        jobPage: {
          primaryPage: pageValues.primaryPage,
          secondaryPage: pageValues.secondaryPage,
          jobId: pageValues.jobId,
        },
        updateMenuContext: setPageValues,
      }}
    >
      <HistoryContext.Consumer>
        {(history) => (
          <TabPage
            title={null}
            primaryMenu={workMenu(pageValues, setPageValues)}
            secondaryMenu={
              pageValues.primaryPage === 'job_posts'
                ? workMenuSecondary(pageValues, setPageValues)
                : pageValues.primaryPage === 'job_dashboard' &&
                  jobDashboardSecondary(pageValues, setPageValues)
            }
            menu={null}
            activePrimary={pageValues.primaryPage}
            activeSecondary={pageValues.secondaryPage}
          >
            {pageValues.primaryPage === 'job_dashboard' ? (
              <JobDashboardPage
                pageValues={pageValues}
                setPageValues={setPageValues}
              />
            ) : pageValues.primaryPage === 'job_posts' ? (
              <JobPostsPage
                pageValues={pageValues}
                setPageValues={setPageValues}
              />
            ) : pageValues.primaryPage === 'history' ? (
              <JobHistory
                pageValues={pageValues}
                setPageValues={setPageValues}
              />
            ) : (
              <UpdateJob jobId={pageValues.jobId} />
            )}
          </TabPage>
        )}
      </HistoryContext.Consumer>
    </MenuContext.Provider>
  );
}
