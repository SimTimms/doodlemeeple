import React from 'react';
import { Query } from 'react-apollo';
import { Typography } from '@material-ui/core';
import { GAME_WIDGET, MY_GAMES } from './data';
import { GameProfile } from './profileCard';
import { GameForm } from './';
import { Row, Column, Grid, CardComponent } from '../../components';
import GameComponent from './component';
import { MenuContext } from '../../context';
import { randomKey } from '../../utils';

export default function Games() {
  const [game, setGame] = React.useState(null);
  return (
    <MenuContext.Consumer>
      {(menu) => (
        <Row w="100%">
          {menu.homePage.secondaryPage === 'create_game' ? (
            <GameForm gameData={game} setGameData={setGame} />
          ) : menu.homePage.secondaryPage === 'games' ? (
            <Grid cols={3}>
              <Query query={GAME_WIDGET}>
                {({ data }) => {
                  if (data)
                    return data.gameWidget.map((game, index) => (
                      <GameProfile game={game} key={randomKey()} />
                    ));
                  return null;
                }}
              </Query>
            </Grid>
          ) : (
            menu.homePage.secondaryPage === 'my_games' && (
              <Column w="100%">
                <Query query={MY_GAMES} fetchPolicy="network-only">
                  {({ data }) => {
                    if (data)
                      if (data.myGames.length === 0) {
                        return (
                          <CardComponent type="dark">
                            <Typography>
                              Use this space to post your games or your game
                              concepts.
                            </Typography>
                          </CardComponent>
                        );
                      } else {
                        return data.myGames.map((game) => (
                          <GameComponent game={game} />
                        ));
                      }

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
