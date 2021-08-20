import React from 'react';
import { TabPage } from '../../../../components';
import { HistoryContext, MenuContext } from '../../../../context';
import {
  homeMenu,
  gameMenu,
  kickstarterMenu,
  communityMenu,
} from '../../../menuArray';
import CommunityPage from '../communityPage';
import { Games, CreativeRosterWidget, Kickstarters } from '../../../../widgets';

export default function HomePage() {
  const [pageValues, setPageValues] = React.useState({
    primaryPage: 'community',
    secondaryPage: 'dashboard',
    kickstarterId: null,
    gameId: null,
  });

  return (
    <MenuContext.Provider
      value={{
        homePage: {
          primaryPage: pageValues.primaryPage,
          secondaryPage: pageValues.secondaryPage,
          kickstarterId: pageValues.kickstarterId,
          gameId: pageValues.gameId,
        },
        updateMenuContext: setPageValues,
      }}
    >
      <HistoryContext.Consumer>
        {(history) => (
          <TabPage
            title={null}
            primaryMenu={homeMenu(pageValues, setPageValues)}
            secondaryMenu={
              pageValues.primaryPage === 'games'
                ? gameMenu(pageValues, setPageValues)
                : pageValues.primaryPage === 'community'
                ? communityMenu(pageValues, setPageValues)
                : pageValues.primaryPage === 'kickstarters' &&
                  kickstarterMenu(pageValues, setPageValues)
            }
            menu={null}
            activePrimary={pageValues.primaryPage}
            activeSecondary={pageValues.secondaryPage}
          >
            {pageValues.primaryPage === 'community' &&
            pageValues.secondaryPage === 'dashboard' ? (
              <CommunityPage />
            ) : (
              pageValues.secondaryPage === 'profiles' && (
                <CreativeRosterWidget />
              )
            )}
            {pageValues.primaryPage === 'games' && <Games />}
            {pageValues.primaryPage === 'kickstarters' && <Kickstarters />}
          </TabPage>
        )}
      </HistoryContext.Consumer>
    </MenuContext.Provider>
  );
}
