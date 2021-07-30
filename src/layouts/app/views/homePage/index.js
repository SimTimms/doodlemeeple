import React from 'react';
import { TabPage } from '../../../../components';
import { HistoryContext } from '../../../../context';
import {
  mainMenu,
  gameMenu,
  kickstarterMenu,
  communityMenu,
} from '../../../menuArray';
import CommunityPage from '../communityPage';
import { Games, CreativeRosterWidget, Kickstarters } from '../../../../widgets';

export default function HomePage() {
  const [primaryPage, setPrimaryPage] = React.useState('community');
  const [secondaryPage, setSecondaryPage] = React.useState('dashboard');

  function setPages(primaryPage) {
    setPrimaryPage(primaryPage);
    setSecondaryPage(
      primaryPage === 'community'
        ? 'dashboard'
        : primaryPage === 'games'
        ? 'games'
        : primaryPage === 'kickstarters' && 'kickstarters'
    );
  }

  return (
    <HistoryContext.Consumer>
      {(history) => (
        <TabPage
          title={null}
          primaryMenu={
            mainMenu(history, {}, setPages).filter(
              (item) => item.machineName === 'home'
            )[0].postsMenu
          }
          secondaryMenu={
            primaryPage === 'games'
              ? gameMenu(setSecondaryPage)
              : primaryPage === 'community'
              ? communityMenu(setSecondaryPage)
              : primaryPage === 'kickstarters' &&
                kickstarterMenu(setSecondaryPage)
          }
          menu={null}
          activePrimary={primaryPage}
          activeSecondary={secondaryPage}
        >
          {primaryPage === 'community' && secondaryPage === 'dashboard' ? (
            <CommunityPage />
          ) : (
            secondaryPage === 'profiles' && (
              <CreativeRosterWidget
                setSecondaryPage={setSecondaryPage}
                secondaryPage={secondaryPage}
              />
            )
          )}
          {primaryPage === 'games' && (
            <Games
              setSecondaryPage={setSecondaryPage}
              secondaryPage={secondaryPage}
            />
          )}
          {primaryPage === 'kickstarters' && (
            <Kickstarters
              setSecondaryPage={setSecondaryPage}
              secondaryPage={secondaryPage}
            />
          )}
        </TabPage>
      )}
    </HistoryContext.Consumer>
  );
}
