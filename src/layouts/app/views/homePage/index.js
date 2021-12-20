import React from 'react';
import { TabPage } from '../../../../components';
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
import { PreviewProfile } from '../../../../layouts/preview/views/previewProfile';
import GamesPage from '../../../../layouts/preview/views/previewProfile/gamesPage';
import { MenuContext } from '../../../../context';

export default function HomePage() {
  return (
    <MenuContext.Consumer>
      {(menu) => {
        return (
          <TabPage
            title={null}
            primaryMenu={homeMenu(menu)}
            secondaryMenu={
              menu.homePage.primaryPage === 'games'
                ? menu.homePage.secondaryPage === 'game_profile'
                  ? gameProfileMenu(menu)
                  : gameMenu(menu)
                : menu.homePage.primaryPage === 'community'
                ? null
                : menu.homePage.primaryPage === 'kickstarters'
                ? kickstarterMenu(menu)
                : menu.homePage.primaryPage === 'my_posts' && myPostsMenu(menu)
            }
            menu={null}
            activePrimary={menu.homePage.primaryPage}
            activeSecondary={menu.homePage.secondaryPage}
          >
            {menu.homePage.primaryPage === 'community' &&
            menu.homePage.secondaryPage === 'dashboard' ? (
              <CommunityPage />
            ) : (
              menu.homePage.secondaryPage === 'profiles' && (
                <CreativeRosterWidget />
              )
            )}
            {(menu.homePage.primaryPage === 'games' &&
              menu.homePage.secondaryPage === 'games') ||
            menu.homePage.secondaryPage === 'my_games' ||
            menu.homePage.secondaryPage === 'create_game' ? (
              <Games />
            ) : menu.homePage.secondaryPage === 'game_profile' ? (
              <GameProfileFull />
            ) : menu.homePage.secondaryPage === 'user_profile' ? (
              <PreviewProfile profileId={menu.homePage.userId} />
            ) : (
              menu.homePage.secondaryPage === 'user_games' && (
                <GamesPage userId={menu.homePage.userId} />
              )
            )}
            {menu.homePage.primaryPage === 'kickstarters' && <Kickstarters />}
            {menu.homePage.primaryPage === 'my_posts' && <MyPosts />}
          </TabPage>
        );
      }}
    </MenuContext.Consumer>
  );
}
