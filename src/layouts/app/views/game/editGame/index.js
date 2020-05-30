import React from 'react';
import { Card, Slide, TextField, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { ProfileHeader } from './components/profileHeader';
import {
  LoadIcon,
  ContentHeader,
  DeleteButton,
  FieldTitle,
  InlineHeader,
  IconTitle,
} from '../../../../../components';
import ReactPlayer from 'react-player';
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

export default function EditGame({ theme, gameId, autosaveIsOn, history }) {
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
    type: '',
    id: 'new',
  });
  const [loading, setLoading] = React.useState(true);
  const [deleteError, setDeleteError] = React.useState('');

  function setGameImage(field, url) {
    let gameCopy = { ...game };
    gameCopy[field] = url;
    setGame({ ...gameCopy });
  }

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <ContentHeader
          title={gameId === 'new' ? 'Create a Game' : 'Edit a Game'}
          subTitle="Create a new game or project listing, then create jobs"
          subTitleExtra={null}
          button={null}
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
            return loading ? (
              <LoadIcon />
            ) : (
              <div style={{ width: '100%' }}>
                <Card className={classes.card}>
                  <InlineHeader>
                    <IconTitle icon="image" title="Box Art" />
                  </InlineHeader>
                  <FieldTitle
                    name=" 1. Primary Image"
                    description="This image will be displayed in most places where your game is mentioned. Choose an image that represents your game and brings attention."
                    warning=""
                  />
                  <ProfileHeader
                    game={game}
                    setGameImage={setGameImage}
                    setGame={setGame}
                    autosaveFunction={() => {
                      autosave && mutation();
                    }}
                  />
                </Card>
                <Card className={classes.card}>
                  <InlineHeader>
                    <IconTitle icon="casino" title="Game Details" />
                  </InlineHeader>
                  <div style={{ padding: 10 }}>
                    <FieldTitle
                      name=" 2. Game Details"
                      description="Is your project backed on Kickstarter?, is it just an idea?, is it a fantasy/sci-fi RPG hybrid? Give some detail about your game so that creatives get to know your project"
                      warning=""
                    />
                    <TextField
                      id={'name'}
                      value={game.name}
                      label={`What's the game called? ${
                        game.name ? `(${86 - game.name.length})` : ''
                      }`}
                      inputProps={{ maxLength: 86 }}
                      onChange={(e) => {
                        setGame({
                          ...game,
                          name: e.target.value.replace(
                            /[^A-Za-z0-9 ,\-.!()£$"'\n]/g,
                            '',
                          ),
                        });
                        autosaveIsOn && autosave(mutation, 'name');
                      }}
                      margin="normal"
                      variant="outlined"
                      style={{ width: '100%' }}
                    />
                    <TextField
                      id={'type'}
                      label={`What type of game is this? Example: Fantasy, Sci-Fi, Card Game.. ${
                        game.type ? `(${36 - game.type.length})` : ''
                      }`}
                      inputProps={{ maxLength: 36 }}
                      multiline
                      type="text"
                      value={game.type}
                      onChange={(e) => {
                        setGame({
                          ...game,
                          type: e.target.value.replace(
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
                    <TextField
                      id={'summary'}
                      label={`Summary of the game? Example: Build and battle giant mechs in this sci-fi epic.... ${
                        game.summary ? `(${156 - game.summary.length})` : ''
                      }`}
                      inputProps={{ maxLength: 156 }}
                      multiline
                      type="text"
                      value={game.summary}
                      onChange={(e) => {
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
                    <TextField
                      id={'location'}
                      label={`Where are you based? ${
                        game.location ? `(${56 - game.location.length})` : ''
                      }`}
                      inputProps={{ maxLength: 56 }}
                      multiline
                      type="text"
                      value={game.location}
                      onChange={(e) => {
                        setGame({
                          ...game,
                          location: e.target.value.replace(
                            /[^A-Za-z0-9 ,\-.!()£$"'\n]/g,
                            '',
                          ),
                        });
                        autosaveIsOn && autosave(mutation, 'location');
                      }}
                      margin="normal"
                      variant="outlined"
                      style={{ width: '100%' }}
                    />
                  </div>
                </Card>
                <Card className={classes.card}>
                  <InlineHeader>
                    <IconTitle
                      icon="ondemand_video"
                      title="Promotional Video"
                    />
                  </InlineHeader>
                  <div style={{ padding: 10 }}>
                    <FieldTitle
                      name=" 3. Video"
                      description="Do you have a promotional video on YouTube, Vimeo or somewhere else?"
                      warning=""
                    />
                    <TextField
                      id={'name'}
                      value={game.showreel}
                      label={`Video URL ${
                        game.showreel ? `(${386 - game.showreel.length})` : ''
                      }`}
                      inputProps={{ maxLength: 386 }}
                      onChange={(e) => {
                        setGame({
                          ...game,
                          showreel: e.target.value,
                        });
                        autosaveIsOn && autosave(mutation, 'showreel');
                      }}
                      margin="normal"
                      variant="outlined"
                      style={{ width: '100%' }}
                    />
                    {game.showreel !== '' && (
                      <ReactPlayer
                        url={game.showreel}
                        playing
                        controls={true}
                        muted={true}
                        style={{ width: '100%' }}
                        width="100%"
                      />
                    )}
                  </div>
                </Card>
                <Card className={classes.card}>
                  <InlineHeader>
                    <IconTitle icon="warning" title="Danger Zone" />
                  </InlineHeader>
                  <div
                    style={{
                      padding: 10,

                      background: '#eee',
                    }}
                  >
                    {game.id !== 'new' && (
                      <div>
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
            setLoading(false);
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
