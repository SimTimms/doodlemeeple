import React from 'react';
import { useStyles } from './styles';
import {
  MenuButtonStandard,
  FieldBox,
  Column,
  Uploader,
  DividerMini,
  Divider,
} from '../../components';
import { Mutation, Query } from 'react-apollo';
import { CREATE_GAME, UPDATE_GAME, REMOVE_GAME, GAME_BY_ID } from './data';
import { toaster } from '../../utils/toaster';
import { MenuContext } from '../../context';
import Webshop from './webshop';

export default function GameForm() {
  const classes = useStyles();
  const [game, setGame] = React.useState({
    name: '',
    logo: '',
    featuredImage: '',
    summary: '',
    url: '',
    showreel: '',
    price: '',
    webshop: null,
    _id: 'new',
  });
  const [deleteConfirm, setDeleteConfirm] = React.useState(false);
  return (
    <MenuContext.Consumer>
      {(menu) => (
        <div className={classes.menuRoot}>
          <div style={{ padding: 10, maxWidth: 400, margin: 'auto' }}>
            <Column a="center" j="center">
              <div
                className={classes.image}
                style={{
                  backgroundImage: `url(${game.featuredImage})`,
                }}
              >
                <Uploader
                  cbImage={(url) => {
                    setGame({
                      ...game,
                      featuredImage: url,
                    });
                  }}
                  styleOverride={null}
                  className={null}
                  cbDelete={null}
                  hasFile={false}
                  size="2MB PNG JPG GIF"
                  imageCategory="game"
                />
              </div>
              <FieldBox
                value={game.name}
                title="Project Name"
                maxLength={86}
                onChangeEvent={(e) => {
                  setGame({
                    ...game,
                    name: e,
                  });
                }}
                replaceMode="loose"
                placeholder="Example: Mouse Stompa"
                info="What's this project or game called?"
                warning=""
                size="s"
                multiline={false}
              />
              <FieldBox
                value={game.summary}
                title="Summary"
                maxLength={512}
                onChangeEvent={(e) => {
                  setGame({
                    ...game,
                    summary: e,
                  });
                }}
                replaceMode="loose"
                placeholder="Example: Mouse Stompa"
                info="What's this project or game called?"
                warning=""
                size="s"
                multiline={true}
              />
              <FieldBox
                value={game.url}
                title="URL"
                maxLength={512}
                onChangeEvent={(e) => {
                  setGame({
                    ...game,
                    url: e,
                  });
                }}
                replaceMode="loose"
                placeholder="Example: Mouse Stompa"
                info="What's this project or game called?"
                warning=""
                size="s"
                multiline={false}
              />

              <FieldBox
                value={game.showreel}
                title="showreel"
                maxLength={512}
                onChangeEvent={(e) => {
                  setGame({
                    ...game,
                    showreel: e,
                  });
                }}
                replaceMode="loose"
                placeholder="Example: Mouse Stompa"
                info="What's this project or game called?"
                warning=""
                size="s"
                multiline={false}
              />
              <Divider />
              {game.webshop &&
                game.webshop.map((webshop) => (
                  <Webshop webshopIn={webshop} setGame={setGame} game={game} />
                ))}
              <Webshop
                webshopIn={{ name: '', url: '', price: '' }}
                setGame={setGame}
                game={game}
                newMode={true}
              />

              <Divider />
              {game._id === 'new' ? (
                <Mutation
                  mutation={CREATE_GAME}
                  variables={{
                    ...game,
                  }}
                  onCompleted={() => {
                    toaster('Saved');
                    menu.updateMenuContext({
                      ...menu,
                      primaryPage: 'games',
                      secondaryPage: 'my_games',
                      gameId: null,
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
                <Column mw={200}>
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
                        primaryPage: 'games',
                        secondaryPage: 'my_games',
                        gameId: null,
                      });
                    }}
                  >
                    {(deleteMutation) => {
                      return (
                        <MenuButtonStandard
                          title={deleteConfirm ? 'Confirm Deletion' : 'Delete'}
                          type="delete"
                          onClickEvent={() => {
                            deleteConfirm
                              ? deleteMutation()
                              : setDeleteConfirm(true);
                          }}
                        />
                      );
                    }}
                  </Mutation>
                </Column>
              )}
            </Column>
          </div>
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
        </div>
      )}
    </MenuContext.Consumer>
  );
}
