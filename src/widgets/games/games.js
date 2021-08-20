import React, { useEffect } from 'react';
import { Query } from 'react-apollo';
import { GAME_WIDGET, MY_GAMES } from './data';
import { GameProfile } from './profileCard';
import { GameForm } from './';
import { Row, Column, Divider } from '../../components';
import GameComponent from './component';
import { HistoryContext, MenuContext } from '../../context';

export default function Games() {
  const [game, setGame] = React.useState(null);

  useEffect(() => {}, []);

  return (
    <MenuContext.Consumer>
      {(menu) => (
        <HistoryContext.Consumer>
          {(history) => (
            <Row wrap="wrap" a="flex-start" j="space-around" w="100%">
              {menu.homePage.secondaryPage === 'create_game' ? (
                <GameForm gameData={game} setGameData={setGame} />
              ) : game ? (
                <GameForm gameData={game} setGameData={setGame} />
              ) : menu.homePage.secondaryPage === 'games' ? (
                <Row
                  wrap="wrap"
                  j="space-around"
                  a="flex-start"
                  pb="20px"
                  pl="20px"
                  pr="20px"
                >
                  <Query query={GAME_WIDGET} fetchPolicy="network-only">
                    {({ data, loading }) => {
                      if (data)
                        return data.gameWidget.map((game) => (
                          <GameProfile game={game} />
                        ));
                      return null;
                    }}
                  </Query>
                </Row>
              ) : (
                menu.homePage.secondaryPage === 'my_games' && (
                  <Column>
                    <Divider />
                    <Query query={MY_GAMES} fetchPolicy="network-only">
                      {({ data }) => {
                        if (data)
                          return data.myGames.map((game) => (
                            <GameComponent game={game} setGame={setGame} />
                          ));
                        return null;
                      }}
                    </Query>
                  </Column>
                )
              )}
            </Row>
          )}
        </HistoryContext.Consumer>
      )}
    </MenuContext.Consumer>
  );
}
