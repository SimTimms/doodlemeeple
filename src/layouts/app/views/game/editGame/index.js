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
  FieldBox,
  Column,
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
          title={game._id === 'new' ? 'Create a Project' : 'Edit a Project'}
          subTitle="Create a new project listing that can be used for multiple jobs"
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
              ) : (
                <Card className={classes.card}>
                  <div style={{ padding: 10 }}>
                    <Column align="center" justify="center">
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

                      <IconButton
                        title="Create"
                        icon="add"
                        color="primary"
                        disabled={game.name.length < 1}
                        onClickEvent={() => {
                          setLoading(true);
                          mutation();
                        }}
                        styleOverride={null}
                        type="button"
                        iconPos="right"
                      />
                    </Column>
                  </div>
                </Card>
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
                <Column align="center" justify="center">
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
                      <IconTitle icon="image" title="Artwork" />
                    </InlineHeader>
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
                      <IconTitle icon="casino" title="Project Details" />
                    </InlineHeader>
                    <div style={{ padding: 10 }}>
                      <FieldBox
                        value={game.name}
                        title="Project Name"
                        maxLength={86}
                        onChangeEvent={(e) => {
                          setGame({
                            ...game,
                            name: e,
                          });
                          autosave(mutation);
                        }}
                        replaceMode="loose"
                        placeholder="Example: Mech Stompa"
                        info="What's this project or game called?"
                        warning=""
                        size="s"
                        multiline={false}
                      />
                      <FieldBox
                        value={game.type}
                        title="Genre"
                        maxLength={36}
                        onChangeEvent={(e) => {
                          setGame({
                            ...game,
                            type: e,
                          });
                          autosave(mutation);
                        }}
                        replaceMode="loose"
                        placeholder="Example: Sci-fi Card-Game"
                        info="Use a few keywords to describe the project genre"
                        warning=""
                        size="s"
                        multiline={false}
                      />
                      <FieldBox
                        value={game.summary}
                        title="Description"
                        maxLength={256}
                        onChangeEvent={(e) => {
                          setGame({
                            ...game,
                            summary: e,
                          });
                          autosave(mutation);
                        }}
                        replaceMode="loose"
                        placeholder="Example: Stomp around in huge mechs in the epic sci-fi card game..."
                        info="Use this space to give a more detailed description of your project; is it a kickstarter project?, is it funded? What's the project concept."
                        warning=""
                        size="s"
                        multiline={true}
                      />
                      <FieldBox
                        value={game.location}
                        title="Location"
                        maxLength={36}
                        onChangeEvent={(e) => {
                          setGame({
                            ...game,
                            location: e,
                          });
                          autosave(mutation);
                        }}
                        replaceMode="loose"
                        placeholder="Example: Worthing"
                        info="Where is this project team based?"
                        warning=""
                        size="s"
                        multiline={false}
                      />
                      <FieldBox
                        value={game.showreel}
                        title="Video"
                        maxLength={156}
                        onChangeEvent={(e) => {
                          setGame({
                            ...game,
                            showreel: e,
                          });
                          autosave(mutation);
                        }}
                        replaceMode="loose"
                        placeholder="Example: https://www.youtube.com/watch?v=xh86tuEAT-0"
                        info="If you have a promotional video on YouTube, Vimeo or somewhere else, enter the URL here."
                        warning=""
                        size="s"
                        multiline={false}
                      />
                      {game.showreel !== '' && (
                        <ReactPlayer
                          url={game.showreel}
                          playing
                          controls={true}
                          muted={true}
                          style={{
                            width: '100%',
                            marginTop: 20,
                            marginBottom: 20,
                            border: '10px solid #eee',
                            borderRadius: 10,
                            boxSizing: 'border-box',
                          }}
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
