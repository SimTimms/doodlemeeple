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
        <div style={{ width: '100%' }}>
          <Query
            query={JOB}
            variables={{
              jobId: menu.jobPage.jobId,
            }}
            fetchPolicy="network-only"
          >
            {({ data }) => {
              return !data ? null : menu.jobPage.secondaryPage ===
                'job_dashboard' ? (
                <JobDashboard jobData={data.jobById} page="job_dashboard" />
              ) : pageValues.secondaryPage === 'job_details' ? (
                <JobDashboard jobData={data.jobById} page="job_details" />
              ) : pageValues.secondaryPage === 'quotes_in' ? (
                <QuoteInWidget jobId={menu.jobPage.jobId} />
              ) : pageValues.secondaryPage === 'view_quote' ? (
                <QuoteViewWidget quoteId={menu.workPage.contractId} />
              ) : pageValues.secondaryPage === 'contract' ? (
                <FullContractWidget contractId={menu.workPage.contractId} />
              ) : (
                pageValues.secondaryPage === 'edit_job' && (
                  <UpdateJob jobId={menu.jobPage.jobId} />
                )
              );
            }}
          </Query>
        </div>
      )}
    </MenuContext.Consumer>
  );
}
