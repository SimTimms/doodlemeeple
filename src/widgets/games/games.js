import React from 'react';
import { Query } from 'react-apollo';
import { GAME_WIDGET, MY_GAMES } from './data';
import { GameProfile } from './profileCard';
import { GameForm } from './';
import { Row, Column, IconButton } from '../../components';
import GameComponent from './component';
import { HistoryContext } from '../../context';

export default function Games() {
  const [tab, setTab] = React.useState(0);
  const [game, setGame] = React.useState(null);

  return (
    <HistoryContext.Consumer>
      {(history) => (
        <Row wrap="wrap" a="flex-start" j="space-around" w="100%">
          {game ? (
            <GameForm gameData={game} setGameData={setGame} />
          ) : tab === 0 ? (
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
            tab === 1 && (
              <Column>
                <IconButton
                  title="Create Game"
                  icon="add"
                  onClickEvent={() => {
                    setGame({
                      name: '',
                      logo: '',
                      featuredImage: '',
                      summary: '',
                      url: '',
                      showreel: '',
                      _id: 'new',
                    });
                  }}
                />
                <Query query={MY_GAMES} fetchPolicy="network-only">
                  {({ data, loading }) => {
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
  );
}
