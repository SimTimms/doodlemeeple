import React from 'react';
import { TabPage } from '../../../../components';
import { HistoryContext, MenuContext } from '../../../../context';
import {
  homeMenu,
  gameMenu,
  kickstarterMenu,
  communityMenu,
  myPostsMenu,
  gameProfileMenu,
} from '../../../menuArray';
import CommunityPage from '../communityPage';
import {
  Games,
  CreativeRosterWidget,
  Kickstarters,
  MyPosts,
} from '../../../../widgets';
import GameProfileFull from '../../../../widgets/games/profileCard/gameProfileFull';

export default function HomePage() {
  const [pageValues, setPageValues] = React.useState({
    primaryPage: 'community',
    secondaryPage: 'dashboard',
    kickstarterId: null,
    myPostId: null,
    gameId: null,
  });
  return (
    <MenuContext.Provider
      value={{
        homePage: {
          primaryPage: pageValues.primaryPage,
          secondaryPage: pageValues.secondaryPage,
          kickstarterId: pageValues.kickstarterId,
          myPostId: pageValues.myPostId,
          gameId: pageValues.gameId,
        },
        updateMenuContext: setPageValues,
      }}
    >
      <HistoryContext.Consumer>
        {(history) => (
          <TabPage
            title={null}
            primaryMenu={
              pageValues.primaryPage === 'game_profile'
                ? gameProfileMenu(pageValues, setPageValues)
                : homeMenu(pageValues, setPageValues)
            }
            secondaryMenu={
              pageValues.primaryPage === 'games'
                ? gameMenu(pageValues, setPageValues)
                : pageValues.primaryPage === 'community'
                ? communityMenu(pageValues, setPageValues)
                : pageValues.primaryPage === 'kickstarters'
                ? kickstarterMenu(pageValues, setPageValues)
                : pageValues.primaryPage === 'my_posts' &&
                  myPostsMenu(pageValues, setPageValues)
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
            {pageValues.primaryPage === 'my_posts' && <MyPosts />}
            {pageValues.primaryPage === 'game_profile' && <GameProfileFull />}
          </TabPage>
        )}
      </HistoryContext.Consumer>
    </MenuContext.Provider>
  );
}
