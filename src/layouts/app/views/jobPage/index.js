import React from 'react';
import { TabPage } from '../../../../components';
import { HistoryContext } from '../../../../context';
import {
  jobMenu,
  jobMenuSecondary,
  jobDashboardSecondary,
} from '../../../menuArray';
import { CreateJob, JobBoardWidget } from '../../../../widgets';
import { MenuContext } from '../../../../context';
import JobDashboardPage from './jobDashboardPage';
import JobHistory from './jobHistory';
import JobPosts from './components/jobPosts';

export default function JobPage() {
  const [pageValues, setPageValues] = React.useState({
    primaryPage: 'job_board',
    secondaryPage: null,
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
            primaryMenu={jobMenu(pageValues, setPageValues)}
            secondaryMenu={
              pageValues.primaryPage === 'job_posts'
                ? jobMenuSecondary(pageValues, setPageValues)
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
            ) : pageValues.primaryPage === 'job_board' ? (
              <JobBoardWidget />
            ) : pageValues.primaryPage === 'job_posts' &&
              pageValues.secondaryPage === 'job_ads' ? (
              <JobPosts />
            ) : pageValues.primaryPage === 'job_posts' &&
              pageValues.secondaryPage === 'create_job_ad' ? (
              <CreateJob
                pageValues={pageValues}
                setPageValues={setPageValues}
              />
            ) : (
              pageValues.primaryPage === 'job_history' && (
                <JobHistory
                  pageValues={pageValues}
                  setPageValues={setPageValues}
                />
              )
            )}
          </TabPage>
        )}
      </HistoryContext.Consumer>
    </MenuContext.Provider>
  );
}
