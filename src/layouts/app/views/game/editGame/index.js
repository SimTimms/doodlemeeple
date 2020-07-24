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
  InlineHeaderWarning,
  IconTitle,
  IconButton,
  Column,
  UnlockInfo,
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

    showreel: '',
    type: '',
    _id: 'new',
  });
  const [loading, setLoading] = React.useState(gameId === 'new' ? false : true);
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
          title={game._id === 'new' ? 'Create a Game' : 'Edit a Game'}
          subTitle="Create a new game or project listing, then create jobs"
          subTitleExtra={null}
          button={null}
        />
        {gameId === 'new' ? (
          <Mutation
            mutation={CREATE_GAME}
            variables={{
              name: game.name,
            }}
            onCompleted={(data) => {
              toaster('Autosave');
              const gameId = data.gameCreateOne.recordId;
              setGame({ ...game, _id: gameId });
              history.replace(`/app/edit-game/${gameId}`);
              setLoading(false);
            }}
          >
            {(mutation) => {
              return loading ? (
                <LoadIcon />
              ) : game._id === 'new' ? (
                <Card className={classes.card}>
                  <InlineHeader>
                    <IconTitle icon="casino" title="Create a Game" />
                  </InlineHeader>
                  <div style={{ padding: 10 }}>
                    <FieldTitle
                      name=" 1. Game Name"
                      description="What is your game/project called."
                      warning="Example: Doodle Meeple The Game"
                      inline={false}
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
                          name: e.target.value
                            .substring(0, 86)
                            .replace(/[^A-Za-z0-9 ,\-.!()£$"'\n]/g, ''),
                        });
                      }}
                      margin="normal"
                      variant="outlined"
                      style={{ width: '100%' }}
                    />
                    <IconButton
                      title="Create"
                      icon="add"
                      color="primary"
                      disabled={false}
                      onClickEvent={() => {
                        setLoading(true);
                        mutation();
                      }}
                      styleOverride={null}
                      type="button"
                      iconPos="right"
                    />
                  </div>
                </Card>
              ) : (
                <Column>
                  <IconButton
                    title="Preview"
                    icon="preview"
                    color="text-dark"
                    disabled={false}
                    onClickEvent={() => {
                      history.push(`/app/view-game/${game._id}`);
                    }}
                    styleOverride={{
                      marginLeft: 'auto',
                      marginTop: 0,
                      marginBottom: 0,
                      paddingRight: 0,
                    }}
                    type="button"
                    iconPos="right"
                  />
                  <Card className={classes.card}>
                    <InlineHeader>
                      <IconTitle icon="image" title="Box Art" />
                    </InlineHeader>
                    <FieldTitle
                      name=" 1. Primary Image"
                      description="JPG or PNG, 1MB max, 1920 x 300px (optimum size)"
                      warning=""
                      inline={false}
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
                        warning="Example: Doodle Meeple the Game, Fantasy card game, Build a deck then throw it at your opponent for maximum damage, Based in Worthing"
                        inline={false}
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
                            name: e.target.value
                              .substring(0, 86)
                              .replace(/[^A-Za-z0-9 ,\-.!()£$"'\n]/g, ''),
                          });
                          autosaveIsOn && autosave(mutation, 'name');
                        }}
                        margin="normal"
                        variant="outlined"
                        style={{ width: '100%' }}
                      />
                    </div>
                  </Card>
                </Column>
              );
            }}
          </Mutation>
        ) : (
          <Mutation
            mutation={UPDATE_GAME}
            variables={{
              id: game._id,
              name: game.name,
              img: game.img,
              backgroundImg: game.backgroundImg,
              summary: game.summary,
              location: game.location,
              showreel: game.showreel,
              type: game.type,
            }}
            onCompleted={(data) => {
              toaster('Autosave');
              setLoading(false);
            }}
          >
            {(mutation) => {
              return loading ? (
                <LoadIcon />
              ) : (
                <Column>
                  <IconButton
                    title="Preview"
                    icon="preview"
                    color="text-dark"
                    disabled={false}
                    onClickEvent={() => {
                      history.push(`/app/view-game/${game._id}`);
                    }}
                    styleOverride={{
                      marginLeft: 'auto',
                      marginTop: 0,
                      marginBottom: 0,
                      paddingRight: 0,
                    }}
                    type="button"
                    iconPos="right"
                  />
                  <Card className={classes.card}>
                    <InlineHeader>
                      <IconTitle icon="image" title="Box Art" />
                    </InlineHeader>
                    <FieldTitle
                      name=" 1. Primary Image"
                      description="JPG or PNG, 1MB max, 1920 x 300px (optimum size)"
                      warning=""
                      inline={false}
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
                        warning="Example: Doodle Meeple the Game, Fantasy card game, Build a deck then throw it at your opponent for maximum damage, Based in Worthing"
                        inline={false}
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
                            name: e.target.value
                              .substring(0, 86)
                              .replace(/[^A-Za-z0-9 ,\-.!()£$"'\n]/g, ''),
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
                            type: e.target.value
                              .substring(0, 36)
                              .replace(/[^A-Za-z0-9 ,\-.!()£$"'\n]/g, ''),
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
                          game.summary ? `(${256 - game.summary.length})` : ''
                        }`}
                        inputProps={{ maxLength: 256 }}
                        multiline
                        type="text"
                        value={game.summary}
                        onChange={(e) => {
                          setGame({
                            ...game,
                            summary: e.target.value
                              .substring(0, 256)
                              .replace(/[^A-Za-z0-9 ,\-.!()£$"'\n]/g, ''),
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
                            location: e.target.value
                              .substring(0, 56)
                              .replace(/[^A-Za-z0-9 ,\-.!()£$"'\n]/g, ''),
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
                        inline={false}
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
                            showreel: e.target.value.substring(0, 386),
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
                    <InlineHeaderWarning>
                      <IconTitle icon="warning" title="Danger Zone" />
                    </InlineHeaderWarning>
                    <div
                      style={{
                        padding: 10,

                        background: '#eee',
                      }}
                    >
                      {game._id !== 'new' && (
                        <div>
                          <Mutation
                            mutation={REMOVE_GAME}
                            variables={{
                              id: game._id,
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
                                    str="Delete this game?"
                                  />
                                </div>
                              );
                            }}
                          </Mutation>
                        </div>
                      )}
                    </div>
                  </Card>
                </Column>
              );
            }}
          </Mutation>
        )}
        {gameId !== 'new' && (
          <Query
            query={GAME}
            variables={{ gameId: gameId }}
            fetchPolicy="network-only"
            onCompleted={(data) => {
              data &&
                data.gameById &&
                setGame({
                  name: data.gameById.name ? data.gameById.name : '',
                  img: data.gameById.img ? data.gameById.img : '',
                  backgroundImg: data.gameById.backgroundImg
                    ? data.gameById.backgroundImg
                    : '',
                  summary: data.gameById.summary ? data.gameById.summary : '',
                  location: data.gameById.location
                    ? data.gameById.location
                    : '',
                  showreel: data.gameById.showreel
                    ? data.gameById.showreel
                    : '',
                  _id: data.gameById._id ? data.gameById._id : '',
                  type: data.gameById.type ? data.gameById.type : '',
                });
              setLoading(false);
            }}
          >
            {({ data }) => {
              return null;
            }}
          </Query>
        )}
      </div>
    </Slide>
  );
}
