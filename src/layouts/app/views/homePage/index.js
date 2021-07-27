import React from 'react';
import { TabPage } from '../../../../components';
import { HistoryContext } from '../../../../context';
import { mainMenu, gameMenu, communityMenu } from '../../../menuArray';
import CommunityPage from '../communityPage';
import { Games } from '../../../../widgets';

export default function HomePage() {
  const [primaryPage, setPrimaryPage] = React.useState('community');
  const [secondaryPage, setSecondaryPage] = React.useState('dashboard');
  console.log(secondaryPage);
  return (
    <HistoryContext.Consumer>
      {(history) => (
        <TabPage
          title={null}
          primaryMenu={
            mainMenu(history, {}, setPrimaryPage).filter(
              (item) => item.machineName === 'home'
            )[0].postsMenu
          }
          secondaryMenu={
            primaryPage === 'games'
              ? gameMenu(history, {}, setSecondaryPage)
              : primaryPage === 'community' &&
                communityMenu(history, {}, setSecondaryPage)
          }
          menu={null}
          activePrimary={primaryPage}
          activeSecondary={secondaryPage}
        >
          {primaryPage === 'community' && <CommunityPage />}
          {primaryPage === 'games' && <Games />}
        </TabPage>
      )}
    </HistoryContext.Consumer>
  );
}
