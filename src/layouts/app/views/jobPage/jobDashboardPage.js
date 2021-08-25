import React from 'react';
import JobDashboard from '../job/jobDashboard';
import { MenuContext, HistoryContext } from '../../../../context';
import { Query } from 'react-apollo';
import { JOB } from '../../../../data/queries';
import {
  UpdateJob,
  QuoteInWidget,
  QuoteViewWidget,
  FullContractWidget,
} from '../../../../widgets/';

export default function JobDashboardPage({ pageValues, setPageValues }) {
  return (
    <MenuContext.Consumer>
      {(menu) => (
        <HistoryContext.Consumer>
          {(history) => (
            <div style={{ width: '100%' }}>
              <Query
                query={JOB}
                variables={{
                  jobId: menu.jobPage.jobId,
                }}
                fetchPolicy="network-only"
              >
                {({ data }) => {
                  return !data ? null : pageValues.secondaryPage ===
                    'job_dashboard' ? (
                    <JobDashboard
                      setPageValues={setPageValues}
                      pageValues={pageValues}
                      jobData={data.jobById}
                      page="job_dashboard"
                    />
                  ) : pageValues.secondaryPage === 'job_details' ? (
                    <JobDashboard
                      setPageValues={setPageValues}
                      pageValues={pageValues}
                      jobData={data.jobById}
                      page="job_details"
                    />
                  ) : pageValues.secondaryPage === 'quotes_in' ? (
                    <QuoteInWidget jobId={pageValues.jobId} />
                  ) : pageValues.secondaryPage === 'view_quote' ? (
                    <QuoteViewWidget quoteId={pageValues.contractId} />
                  ) : pageValues.secondaryPage === 'contract' ? (
                    <FullContractWidget contractId={pageValues.contractId} />
                  ) : (
                    pageValues.secondaryPage === 'edit_job' && (
                      <UpdateJob jobId={pageValues.jobId} />
                    )
                  );
                }}
              </Query>
            </div>
          )}
        </HistoryContext.Consumer>
      )}
    </MenuContext.Consumer>
  );
}
