import React from 'react';
import { TabPage } from '../../../../components';
import { HistoryContext } from '../../../../context';
import { workMenu } from '../../../menuArray';
import { MenuContext } from '../../../../context';
import WorkHistory from './workHistory';
import InviteDashboard from '../inviteDashboard';
import MyWorkDashboard from '../myWorkDashboard';

export default function WorkPage() {
  const [pageValues, setPageValues] = React.useState({
    primaryPage: 'invites',
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
            primaryMenu={workMenu(pageValues, setPageValues)}
            secondaryMenu={null}
            menu={null}
            activePrimary={pageValues.primaryPage}
            activeSecondary={pageValues.secondaryPage}
          >
            {pageValues.primaryPage === 'invites' ? (
              <InviteDashboard />
            ) : pageValues.primaryPage === 'my_work' ? (
              <MyWorkDashboard />
            ) : (
              pageValues.primaryPage === 'history' && (
                <WorkHistory
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
