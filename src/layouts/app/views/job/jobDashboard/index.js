import React from 'react';
import SummaryViewCreator from './components/summaryViewCreator';
import { MenuContext, HistoryContext } from '../../../../../context';

export default function JobDashboard({ jobData, page }) {
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
                menu={menu}
              />
            </div>
          )}
        </HistoryContext.Consumer>
      )}
    </MenuContext.Consumer>
  );
}
