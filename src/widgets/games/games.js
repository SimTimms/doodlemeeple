import React, { useEffect } from 'react';
import { Query } from 'react-apollo';
import { GAME_WIDGET, MY_GAMES } from './data';
import { GameProfile } from './profileCard';
import { GameForm } from './';
import { Row, Column, Divider, Grid } from '../../components';
import GameComponent from './component';
import { MenuContext } from '../../context';

export default function Games() {
  const [game, setGame] = React.useState(null);

  return (
    <MenuContext.Consumer>
      {(menu) => (
        <Row wrap="wrap" a="flex-start" j="space-around" w="100%">
          {menu.homePage.secondaryPage === 'create_game' ? (
            <GameForm gameData={game} setGameData={setGame} />
          ) : menu.homePage.secondaryPage === 'games' ? (
            <Grid>
              <Query query={GAME_WIDGET} fetchPolicy="network-only">
                {({ data }) => {
                  if (data)
                    return data.gameWidget.map((game) => (
                      <GameProfile game={game} />
                    ));
                  return null;
                }}
              </Query>
            </Grid>
          ) : (
            menu.homePage.secondaryPage === 'my_games' && (
              <Column>
                <Divider />
                <Query query={MY_GAMES} fetchPolicy="network-only">
                  {({ data }) => {
                    if (data)
                      return data.myGames.map((game) => (
                        <GameComponent game={game} />
                      ));
                    return null;
                  }}
                </Query>
              </Column>
            )
          )}
        </Row>
      )}
    </MenuContext.Consumer>
  );
}
