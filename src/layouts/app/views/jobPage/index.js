import React, { useEffect } from 'react';
import { TabPage } from '../../../../components';
import { HistoryContext, CountContext } from '../../../../context';
import {
  jobMenu,
  jobMenuSecondary,
  jobDashboardSecondary,
  quoteViewMenu,
  jobBoardMenu,
} from '../../../menuArray';
import { CreateJob } from '../../../../widgets';
import { MenuContext } from '../../../../context';
import JobDashboardPage from './jobDashboardPage';
import JobHistory from './jobHistory';
import JobPosts from './components/jobPosts';
import JobBoardPage from './jobBoardPage';

export default function JobPage({ jumpTo }) {
  const [pageValues, setPageValues] = React.useState({
    primaryPage: 'job_board',
    secondaryPage: 'dashboard',
    jobId: null,
    inviteId: null,
    contractId: null,
  });

  useEffect(() => {
    jumpTo &&
      setPageValues({
        ...pageValues,
        primaryPage: jumpTo.split(':')[0],
        secondaryPage: jumpTo.split(':')[1],
        jobId: null,
        inviteId: null,
        contractId: null,
      });
  }, [jumpTo]);

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
            <TabPage
              title={null}
              primaryMenu={jobMenu(counts, pageValues, setPageValues)}
              secondaryMenu={
                (pageValues.primaryPage === 'editing_job' &&
                  pageValues.secondaryPage === 'view_quote') ||
                pageValues.secondaryPage === 'contract'
                  ? quoteViewMenu(pageValues, setPageValues)
                  : pageValues.primaryPage === 'editing_job'
                  ? jobDashboardSecondary(counts, pageValues, setPageValues)
                  : pageValues.primaryPage === 'job_posts'
                  ? jobMenuSecondary(counts, pageValues, setPageValues)
                  : pageValues.primaryPage === 'job_board' &&
                    pageValues.jobId &&
                    jobBoardMenu(pageValues, setPageValues)
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
                <JobBoardPage pageValues={pageValues} />
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
          );
        }}
      </CountContext.Consumer>
    </MenuContext.Provider>
  );
}
