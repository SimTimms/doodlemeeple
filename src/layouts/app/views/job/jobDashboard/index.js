import React from 'react';
import SummaryViewCreator from './components/summaryViewCreator';
import SummaryViewCreative from './components/summaryViewCreative';
import { Query } from 'react-apollo';
import { JOB, JOB_CREATIVE } from '../../../../../data/queries';
import Cookies from 'js-cookie';
import { MenuContext, HistoryContext } from '../../../../../context';

export default function JobDashboard() {
  const [refreshCount, setRefreshCount] = React.useState(0);

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
                  refreshCount: refreshCount,
                }}
                fetchPolicy="network-only"
              >
                {({ data }) => {
                  return data ? (
                    <SummaryViewCreator
                      job={data.jobById}
                      history={history}
                      refreshCount={refreshCount}
                      setRefreshCount={setRefreshCount}
                    />
                  ) : null;
                }}
              </Query>
            </div>
          )}
        </HistoryContext.Consumer>
      )}
    </MenuContext.Consumer>
  );
}
