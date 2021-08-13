import React from 'react';
import { TabPage } from '../../../../components';
import { HistoryContext } from '../../../../context';
import {
  workMenu,
  workMenuSecondary,
  inviteMenuSecondary,
  quoteMenuSecondary,
} from '../../../menuArray';
import { MenuContext } from '../../../../context';
import WorkHistory from './workHistory';
import InviteDashboard from '../inviteDashboard';
import QuoteDashboard from '../quoteDashboard';
import MyWorkDashboard from '../myWorkDashboard';

export default function WorkPage() {
  const [pageValues, setPageValues] = React.useState({
    primaryPage: 'invites',
    secondaryPage: 'invite_list',
    jobId: null,
    inviteId: null,
    contractId: null,
  });

  return (
    <MenuContext.Provider
      value={{
        jobPage: {
          primaryPage: pageValues.primaryPage,
          secondaryPage: pageValues.secondaryPage,
          jobId: pageValues.jobId,
          inviteId: pageValues.inviteId,
          contractId: pageValues.contractId,
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
              pageValues.primaryPage === 'my_work'
                ? workMenuSecondary(pageValues, setPageValues)
                : pageValues.primaryPage === 'invites'
                ? inviteMenuSecondary(pageValues, setPageValues)
                : pageValues.primaryPage === 'quotes' &&
                  quoteMenuSecondary(pageValues, setPageValues)
            }
            menu={null}
            activePrimary={pageValues.primaryPage}
            activeSecondary={pageValues.secondaryPage}
          >
            {pageValues.primaryPage === 'invites' ? (
              <InviteDashboard />
            ) : pageValues.primaryPage === 'quotes' ? (
              <QuoteDashboard />
            ) : pageValues.primaryPage === 'my_work' ? (
              <MyWorkDashboard
                pageValues={pageValues}
                setPageValues={setPageValues}
              />
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
