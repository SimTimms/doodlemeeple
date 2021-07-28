import React, { useEffect } from 'react';
import { useStyles } from './styles';
import {
  MenuButtonStandard,
  FieldBox,
  Column,
  Uploader,
  Divider,
} from '../../components';
import { Mutation } from 'react-apollo';
import { CREATE_GAME, UPDATE_GAME, REMOVE_GAME } from './data';
import { toaster } from '../../utils/toaster';

export default function GameForm({ ...props }) {
  const classes = useStyles();
  const { gameData, setGameData } = props;
  const [game, setGame] = React.useState({
    name: '',
    logo: '',
    featuredImage: '',
    summary: '',
    url: '',
    showreel: '',
    _id: 'new',
  });
  const [deleteConfirm, setDeleteConfirm] = React.useState(false);

  useEffect(() => {
    gameData && game != gameData && setGame({ ...gameData });
  }, [gameData]);

  return (
    <div className={classes.menuRoot}>
      <div style={{ padding: 10, maxWidth: 400, margin: 'auto' }}>
        <Column a="center" j="center">
          <div
            className={classes.image}
            style={{ backgroundImage: `url(${game.featuredImage})` }}
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

          {game._id === 'new' ? (
            <Mutation
              mutation={CREATE_GAME}
              variables={{
                ...game,
              }}
              onCompleted={(data) => {
                toaster('Saved');
                setGame({
                  ...game,
                  _id: data.gameCreateOne.recordId,
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
              <Divider />
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
              <Mutation
                mutation={REMOVE_GAME}
                variables={{
                  _id: game._id,
                }}
                onCompleted={() => {
                  setGameData(null);
                  toaster('Removed');
                }}
              >
                {(deleteMutation) => {
                  return (
                    <MenuButtonStandard
                      title={deleteConfirm ? 'Confirm' : 'Delete'}
                      icon="delete"
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
    </div>
  );
}
