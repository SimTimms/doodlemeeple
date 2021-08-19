import React from 'react';
import { TabPage } from '../../../../components';
import { HistoryContext, CountContext } from '../../../../context';
import {
  jobMenu,
  jobMenuSecondary,
  jobDashboardSecondary,
  quoteViewMenu,
} from '../../../menuArray';
import { CreateJob, JobBoardWidget } from '../../../../widgets';
import { MenuContext } from '../../../../context';
import JobDashboardPage from './jobDashboardPage';
import JobHistory from './jobHistory';
import JobPosts from './components/jobPosts';

export default function JobPage() {
  const [pageValues, setPageValues] = React.useState({
    primaryPage: 'job_board',
    secondaryPage: 'dashboard',
    jobId: null,
  });

  console.log(pageValues);

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
      <CountContext.Consumer>
        {(counts) => {
          return (
            <HistoryContext.Consumer>
              {(history) => (
                <TabPage
                  title={null}
                  primaryMenu={jobMenu(counts, pageValues, setPageValues)}
                  secondaryMenu={
                    pageValues.primaryPage === 'editing_job' &&
                    pageValues.secondaryPage === 'view_quote'
                      ? quoteViewMenu(pageValues, setPageValues)
                      : pageValues.primaryPage === 'editing_job'
                      ? jobDashboardSecondary(counts, pageValues, setPageValues)
                      : pageValues.primaryPage === 'job_posts' &&
                        jobMenuSecondary(counts, pageValues, setPageValues)
                  }
                  menu={null}
                  activePrimary={pageValues.primaryPage}
                  activeSecondary={pageValues.secondaryPage}
                >
                  {pageValues.primaryPage === 'editing_job' ? (
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
          );
        }}
      </CountContext.Consumer>
    </MenuContext.Provider>
  );
}
