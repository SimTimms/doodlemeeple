import React from 'react';
import { Icon, Card, Slide, TextField, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { ProfileHeader } from './components/profileHeader';
import {
  LoadIcon,
  ContentHeader,
  DeleteButton,
} from '../../../../../components';
import { Query } from 'react-apollo';
import { Mutation } from 'react-apollo';
import {
  UPDATE_GAME,
  CREATE_GAME,
  REMOVE_GAME,
} from '../../../../../data/mutations';
import { GAME } from '../../../../../data/queries';
import { toaster } from '../../../../../utils/toaster';
import autosave from '../../../../../utils/autosave';
import { errorMessages } from '../../../../../utils/readableErrors';

export default function PreviewGame({ theme, gameId, autosaveIsOn, history }) {
  const classes = useStyles();
  const [game, setGame] = React.useState({
    name: '',
    img: '',
    backgroundImg: '',
    summary: '',
    location: '',
    gallery: {
      images: [],
    },
    showreel: '',
    type: 'game',
    id: 'new',
  });
  const [disabledValue, setDisabledValue] = React.useState(false);
  const [deleteError, setDeleteError] = React.useState('');

  function setGameImage(field, url) {
    let gameCopy = { ...game };
    console.log(gameCopy, field, url);
    gameCopy[field] = url;
    setGame({ ...gameCopy });
  }

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <ContentHeader
          title={gameId === 'new' ? 'Create a Game' : 'Edit a Game'}
          subTitle="Create a new game or project listing, then create jobs"
        />

        <Mutation
          mutation={gameId === 'new' ? CREATE_GAME : UPDATE_GAME}
          variables={{
            id: gameId,
            game: {
              name: game.name,
              img: game.img,
              backgroundImg: game.backgroundImg,
              summary: game.summary,
              location: game.location,
              gallery: game.gallery,
              showreel: game.showreel,
              type: game.type,
            },
          }}
          onCompleted={(data) => {
            toaster('Saved');
            const newGameId =
              gameId === 'new' ? data.createGame : data.updateGame;
            setGame({ ...game, id: newGameId });
            history.replace(`/app/edit-game/${newGameId}`);
          }}
        >
          {(mutation) => {
            return (
              <div style={{ width: '100%' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingBottom: 5,
                  }}
                >
                  {/*!autosaveIsOn && (
                    <UpdateGameButton
                      game={game}
                      disabledValue={disabledValue}
                      setDisabledValue={setDisabledValue}
                      toast={() => {
                        toaster('Saved');
                      }}
                      mutation={mutation}
                    />
                    )*/}
                </div>
                <Card className={classes.card}>
                  <ProfileHeader
                    game={game}
                    setGameImage={setGameImage}
                    setGame={setGame}
                    autosaveFunction={() => {
                      autosave && mutation();
                    }}
                    setDisabledValue={setDisabledValue}
                  />
                  <div style={{ padding: 10 }}>
                    <TextField
                      id={'summary'}
                      label={`Summary ${
                        game.summary ? `(${156 - game.summary.length})` : ''
                      }`}
                      inputProps={{ maxLength: 156 }}
                      multiline
                      type="text"
                      value={game.summary}
                      onChange={(e) => {
                        setDisabledValue(true);
                        setGame({
                          ...game,
                          summary: e.target.value.replace(
                            /[^A-Za-z0-9 ,\-.!()£$"'\n]/g,
                            '',
                          ),
                        });
                        autosaveIsOn && autosave(mutation, 'image');
                      }}
                      margin="normal"
                      variant="outlined"
                      style={{ width: '100%' }}
                    />
                  </div>
                  <div
                    style={{
                      padding: 10,
                      borderTop: '1px dotted #ccc',
                      background: '#eee',
                    }}
                  >
                    {game.id !== 'new' && (
                      <div>
                        {' '}
                        <Typography variant="h2" component="p">
                          Delete Game
                        </Typography>
                        <Mutation
                          mutation={REMOVE_GAME}
                          variables={{
                            id: gameId,
                          }}
                          onCompleted={(data) => {
                            toaster('Deleted');
                            history.replace(`/app/games`);
                          }}
                          onError={(error) => {
                            const msg = errorMessages(error.toString());
                            setDeleteError(msg);
                            toaster('Error');
                          }}
                        >
                          {(mutation) => {
                            return (
                              <div>
                                {deleteError && (
                                  <Typography
                                    variant="body1"
                                    component="p"
                                    className={classes.error}
                                  >
                                    {deleteError}
                                  </Typography>
                                )}
                                <DeleteButton
                                  mutation={mutation}
                                  theme={theme}
                                />
                              </div>
                            );
                          }}
                        </Mutation>
                      </div>
                    )}
                  </div>
                </Card>
              </div>
            );
          }}
        </Mutation>
        <Query
          query={GAME}
          variables={{ gameId: gameId }}
          fetchPolicy="network-only"
          onCompleted={(data) => {
            data.getGame && setGame({ ...data.getGame });
          }}
        >
          {({ loading, error, data }) => {
            if (loading) return <LoadIcon />;
            if (error) return <div>Error</div>;
            return <div></div>;
          }}
        </Query>
      </div>
    </Slide>
  );
}
