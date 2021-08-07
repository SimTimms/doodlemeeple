import React from 'react';
import SummaryViewCreator from './components/summaryViewCreator';
import { MenuContext, HistoryContext } from '../../../../../context';

export default function JobDashboard({
  setPageValues,
  jobData,
  page,
  pageValues,
}) {
  const [refreshCount, setRefreshCount] = React.useState(0);

  return (
    <MenuContext.Consumer>
      {(menu) => (
        <HistoryContext.Consumer>
          {(history) => (
            <div style={{ width: '100%' }}>
              <SummaryViewCreator
                job={jobData}
                history={history}
                refreshCount={refreshCount}
                setRefreshCount={setRefreshCount}
                page={page}
                setPageValues={setPageValues}
                pageValues={pageValues}
              />
            </div>
          )}
        </HistoryContext.Consumer>
      )}
    </MenuContext.Consumer>
  );
}
