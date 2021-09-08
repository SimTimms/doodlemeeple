import React, { useEffect } from 'react';
import { TabPage } from '../../../../components';
import {
  workMenu,
  workDashboardSecondary,
  inviteMenuSecondary,
  quoteMenuSecondary,
} from '../../../menuArray';
import { MenuContext, CountContext } from '../../../../context';
import WorkHistory from './workHistory';
import InviteDashboard from '../inviteDashboard';
import QuoteDashboard from '../quoteDashboard';
import MyWorkDashboard from '../myWorkDashboard';
import WorkDashboard from './workDashboard';

export default function WorkPage({ jumpTo }) {
  const [pageValues, setPageValues] = React.useState({
    primaryPage: 'my_work',
    secondaryPage: 'active_work',
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
    <CountContext.Consumer>
      {(counts) => (
        <TabPage
          title={null}
          primaryMenu={workMenu(counts, pageValues, setPageValues)}
          secondaryMenu={
            pageValues.primaryPage === 'work_dashboard'
              ? workDashboardSecondary(pageValues, setPageValues)
              : pageValues.primaryPage === 'invites'
              ? inviteMenuSecondary(counts, pageValues, setPageValues)
              : pageValues.primaryPage === 'quotes' &&
                quoteMenuSecondary(counts, pageValues, setPageValues)
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
          ) : pageValues.primaryPage === 'work_dashboard' ? (
            <WorkDashboard />
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
    </CountContext.Consumer>
  );
}
