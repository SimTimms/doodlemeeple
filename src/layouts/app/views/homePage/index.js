import React from 'react';
import { TabPage } from '../../../../components';
import { MenuContext } from '../../../../context';
import {
  homeMenu,
  gameMenu,
  kickstarterMenu,
  communityMenu,
  myPostsMenu,
  gameProfileMenu,
  viewProfileMenu,
} from '../../../menuArray';
import CommunityPage from '../communityPage';
import {
  Games,
  CreativeRosterWidget,
  Kickstarters,
  MyPosts,
} from '../../../../widgets';
import GameProfileFull from '../../../../widgets/games/profileCard/gameProfileFull';
import { PreviewProfile } from '../../../../layouts/preview/views/previewProfile';
import GamesPage from '../../../../layouts/preview/views/previewProfile/gamesPage';

export default function HomePage() {
  const [pageValues, setPageValues] = React.useState({
    primaryPage: 'community',
    secondaryPage: 'dashboard',
    kickstarterId: null,
    myPostId: null,
    gameId: null,
    userId: null,
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
          userId: pageValues.userId,
        },
        updateMenuContext: setPageValues,
      }}
    >
      <TabPage
        title={null}
        primaryMenu={homeMenu(pageValues, setPageValues)}
        secondaryMenu={
          pageValues.primaryPage === 'games'
            ? pageValues.secondaryPage === 'game_profile'
              ? gameProfileMenu(pageValues, setPageValues)
              : gameMenu(pageValues, setPageValues)
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
          pageValues.secondaryPage === 'profiles' && <CreativeRosterWidget />
        )}
        {pageValues.primaryPage === 'games' &&
        pageValues.secondaryPage === 'games' ? (
          <Games />
        ) : pageValues.secondaryPage === 'game_profile' ? (
          <GameProfileFull />
        ) : pageValues.secondaryPage === 'user_profile' ? (
          <PreviewProfile profileId={pageValues.userId} />
        ) : (
          pageValues.secondaryPage === 'user_games' && (
            <GamesPage userId={pageValues.userId} />
          )
        )}
        {pageValues.primaryPage === 'kickstarters' && <Kickstarters />}
        {pageValues.primaryPage === 'my_posts' && <MyPosts />}
      </TabPage>
    </MenuContext.Provider>
  );
}
