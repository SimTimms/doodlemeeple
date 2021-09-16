import React from 'react';
import { useStyles } from './styles';
import {
  MenuButtonStandard,
  Column,
  DividerMini,
  Divider,
} from '../../components';
import { Mutation, Query } from 'react-apollo';
import { CREATE_GAME, UPDATE_GAME, REMOVE_GAME, GAME_BY_ID } from './data';
import { toaster } from '../../utils/toaster';
import { MenuContext } from '../../context';
import WebshopParent from './webshopParent';
import GameFields from './gameFields';
import GamePostParent from './gamePostParent';

export default function GameForm() {
  const classes = useStyles();
  const [game, setGame] = React.useState({
    _id: 'new',
    name: '',
    summary: '',
    featureImage: '',
    webshop: [],
    url: '',
    showreel: '',
  });

  return (
    <MenuContext.Consumer>
      {(menu) => (
        <div className={classes.menuRoot}>
          <div style={{ padding: 10, maxWidth: 400, margin: 'auto' }}>
            <Column a="center" j="center">
              <GameFields game={game} setGame={setGame} />
              <Divider />
              <WebshopParent game={game} setGame={setGame} />
              <Divider />
              <GamePostParent game={game} setGame={setGame} />
              <Divider />
              {game._id === 'new' ? (
                <Mutation
                  mutation={CREATE_GAME}
                  variables={{
                    ...game,
                    _id: null,
                  }}
                  onCompleted={() => {
                    toaster('Saved');
                    menu.updateMenuContext({
                      ...menu,
                      homePage: {
                        ...menu.homePage,
                        primaryPage: 'games',
                        secondaryPage: 'my_games',
                        gameId: null,
                      },
                    });
                  }}
                >
                  {(mutation) => {
                    return (
                      <MenuButtonStandard
                        title="Create"
                        icon="add"
                        disabled={game.name.length < 1}
                        onClickEvent={() => {
                          mutation();
                        }}
                      />
                    );
                  }}
                </Mutation>
              ) : (
                <Column w={180}>
                  <Mutation
                    mutation={UPDATE_GAME}
                    variables={{
                      ...game,
                    }}
                    onCompleted={(data) => {
                      toaster('Saved');
                    }}
                  >
                    {(updateMutation) => {
                      return (
                        <MenuButtonStandard
                          title="Update"
                          icon="update"
                          fullWidth={true}
                          disabled={false}
                          onClickEvent={() => {
                            updateMutation();
                          }}
                        />
                      );
                    }}
                  </Mutation>
                  <DividerMini />
                  <Mutation
                    mutation={REMOVE_GAME}
                    variables={{
                      _id: game._id,
                    }}
                    onCompleted={() => {
                      toaster('Removed');
                      menu.updateMenuContext({
                        ...menu,
                        homePage: {
                          ...menu.homePage,
                          primaryPage: 'games',
                          secondaryPage: 'my_games',
                          gameId: null,
                        },
                      });
                    }}
                  >
                    {(deleteMutation) => {
                      return (
                        <MenuButtonStandard
                          title="Delete Game"
                          type="delete"
                          icon="delete"
                          fullWidth={true}
                          onClickEvent={() => {
                            deleteMutation();
                          }}
                        />
                      );
                    }}
                  </Mutation>
                  <Divider />
                </Column>
              )}
            </Column>
          </div>
          {menu.homePage.gameId !== 'new' && game._id === 'new' && (
            <Query
              query={GAME_BY_ID}
              fetchPolicy="network-only"
              variables={{ _id: menu.homePage.gameId }}
              onCompleted={(data) =>
                data.gameById !== null && setGame({ ...data.gameById })
              }
            >
              {({ data }) => {
                return null;
              }}
            </Query>
          )}
        </div>
      )}
    </MenuContext.Consumer>
  );
}
