import React from 'react';
import { TabPage } from '../../../../components';
import { HistoryContext, MenuContext } from '../../../../context';
import { viewProfileMenu } from '../../../menuArray';
import FullProfile from './fullProfile';
import GamesPage from './gamesPage';

export function PreviewProfile({ history, profileId, publicView, ...props }) {
  const { setFullProfile } = props;
  const [pageValues, setPageValues] = React.useState({
    primaryPage: 'profile',
    kickstarterId: null,
    myPostId: null,
    gameId: null,
  });

  return (
    <MenuContext.Provider
      value={{
        profilePage: {
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
            primaryMenu={viewProfileMenu(pageValues, setPageValues)}
            secondaryMenu={null}
            menu={null}
            activePrimary={pageValues.primaryPage}
            activeSecondary={pageValues.secondaryPage}
          >
            {pageValues.primaryPage === 'profile' && (
              <FullProfile
                profileId={profileId}
                publicView={publicView}
                setFullProfile={setFullProfile}
              />
            )}
            {pageValues.primaryPage === 'user_games' && (
              <GamesPage userId={profileId} />
            )}
          </TabPage>
        )}
      </HistoryContext.Consumer>
    </MenuContext.Provider>
  );
}
