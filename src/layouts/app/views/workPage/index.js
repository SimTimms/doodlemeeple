import React from 'react';
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

export default function WorkPage() {
  return (
    <CountContext.Consumer>
      {(counts) => (
        <MenuContext.Consumer>
          {(menu) => (
            <TabPage
              title={menu.workPage.primaryPage}
              primaryMenu={workMenu(counts, menu)}
              secondaryMenu={
                menu.workPage.primaryPage === 'work_dashboard'
                  ? workDashboardSecondary(menu)
                  : menu.workPage.primaryPage === 'invites'
                  ? inviteMenuSecondary(counts, menu)
                  : menu.workPage.primaryPage === 'quotes' &&
                    quoteMenuSecondary(counts, menu)
              }
              menu={null}
              activePrimary={menu.workPage.primaryPage}
              activeSecondary={menu.workPage.secondaryPage}
            >
              {menu.workPage.primaryPage === 'invites' ? (
                <InviteDashboard />
              ) : menu.workPage.primaryPage === 'quotes' ? (
                <QuoteDashboard />
              ) : menu.workPage.primaryPage === 'my_work' ? (
                <MyWorkDashboard menu={menu} />
              ) : menu.workPage.primaryPage === 'work_dashboard' ? (
                <WorkDashboard />
              ) : (
                menu.workPage.primaryPage === 'history' && <WorkHistory />
              )}
            </TabPage>
          )}
        </MenuContext.Consumer>
      )}
    </CountContext.Consumer>
  );
}
