import React from 'react';
import {
  Card,
  Slide,
  TextField,
  Typography,
  Button,
  Icon,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import {
  ContentHeader,
  DeleteButton,
  FieldTitle,
  InlineHeader,
  IconTitle,
  Divider,
} from '../../../../../components';
import { Query } from 'react-apollo';
import { Mutation } from 'react-apollo';
import {
  UPDATE_JOB,
  CREATE_JOB,
  REMOVE_JOB,
} from '../../../../../data/mutations';
import { JOB, GAMES } from '../../../../../data/queries';
import { toaster } from '../../../../../utils/toaster';
import autosave from '../../../../../utils/autosave';
import clsx from 'clsx';

export default function EditJob({
  theme,
  jobId,
  autosaveIsOn,
  history,
  favourites,
}) {
  const classes = useStyles();
  const [games, setGames] = React.useState([]);
  const [job, setJob] = React.useState({
    name: '',
    img: '',
    summary: '',
    location: '',
    gallery: {
      images: [],
    },
    showreel: '',
    type: 'job',
    creativeSummary: '',
    id: 'new',
    gameId: '',
    submitted: false,
  });

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <ContentHeader
          title={jobId === 'new' ? 'Create a Job' : 'Edit a Job'}
          subTitle="Create a new job"
          subTitleExtra={null}
          button={null}
        />
        <Mutation
          mutation={jobId === 'new' ? CREATE_JOB : UPDATE_JOB}
          variables={{
            id: jobId,
            job: {
              name: job.name,
              img: job.img,
              summary: job.summary,
              location: job.location,
              gallery: job.gallery,
              showreel: job.showreel,
              type: job.type,
              gameId: job.gameId,
              creativeSummary: job.creativeSummary,
              submitted: job.submitted,
            },
          }}
          onCompleted={(data) => {
            toaster('Saved');
            const newjobId = jobId === 'new' ? data.createJob : data.updateJob;
            setJob({ ...job, id: newjobId });
            history.replace(`/app/edit-job/${newjobId}`);
          }}
        >
          {(mutation) => {
            return (
              <div style={{ width: '100%' }}>
                <Card className={classes.card}>
                  <InlineHeader>
                    <IconTitle icon="work" title="Job Details" />
                  </InlineHeader>
                  <div style={{ padding: 10 }}>
                    <FieldTitle
                      name=" 1. Which game is this job for?"
                      description="Each job must be attached to a game, you can create a game if you haven't already."
                      warning=""
                      inline={false}
                    />
                    <div style={{ width: '100%', display: 'flex' }}>
                      {games.map((item, index) => {
                        return (
                          <div
                            key={`item_${index}`}
                            className={clsx({
                              [classes.gameBox]: true,
                              [classes.gameBoxSelected]: job.gameId === item.id,
                            })}
                            onClick={() => {
                              setJob({ ...job, gameId: item.id });
                            }}
                          >
                            <div
                              className={clsx({
                                [classes.gameBoxBG]: true,
                                [classes.gameBoxSelectedBG]:
                                  job.gameId === item.id,
                              })}
                              style={{
                                backgroundImage: `url(${item.backgroundImg})`,
                              }}
                            ></div>
                            <div
                              style={{
                                width: 160,
                                padding: 5,
                                boxSizing: 'border-box',
                              }}
                            >
                              <Typography
                                variant="body1"
                                component="p"
                                style={{ textAlign: 'center' }}
                              >
                                {item.name}
                              </Typography>
                            </div>
                          </div>
                        );
                      })}
                      <Link
                        to="/app/edit-game/new"
                        style={{
                          textDecoration: 'none',
                          color: '#444',
                        }}
                      >
                        <div
                          className={clsx({
                            [classes.gameBox]: true,
                          })}
                        >
                          <div
                            className={clsx({
                              [classes.gameBoxBG]: true,
                            })}
                          ></div>
                          <div
                            style={{
                              width: 160,
                              padding: 5,
                              boxSizing: 'border-box',
                            }}
                          >
                            <Typography
                              variant="body1"
                              component="p"
                              style={{ textAlign: 'center' }}
                            >
                              New Game
                            </Typography>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <Divider />
                    <FieldTitle
                      name="2. Job Details"
                      description="Briefly summarise the job. Example: Images for 24 fantasy cards. Need 24 high resolution card images, each image will be full colour and in a fantasy style."
                      warning=""
                      inline={false}
                    />
                    <TextField
                      id={'name'}
                      value={job.name}
                      label={`Job Name ${
                        job.name ? `(${86 - job.name.length})` : ''
                      }`}
                      inputProps={{ maxLength: 86 }}
                      onChange={(e) => {
                        autosaveIsOn && autosave(mutation, 'image');
                        setJob({
                          ...job,
                          name: e.target.value
                            .substring(0, 86)
                            .replace(/[^A-Za-z0-9 ,\-.!()£$"'\n]/g, ''),
                        });
                      }}
                      margin="normal"
                      variant="outlined"
                      style={{ marginRight: 10 }}
                    />
                    <TextField
                      id={'summary'}
                      label={`Summary ${
                        job.summary ? `(${256 - job.summary.length})` : ''
                      }`}
                      inputProps={{ maxLength: 256 }}
                      multiline
                      type="text"
                      value={job.summary}
                      onChange={(e) => {
                        setJob({
                          ...job,
                          summary: e.target.value
                            .substring(0, 256)
                            .replace(/[^A-Za-z0-9 ,\-.!()£$"'\n]/g, ''),
                        });
                        autosaveIsOn && autosave(mutation, 'image');
                      }}
                      margin="normal"
                      variant="outlined"
                      style={{ width: '100%' }}
                    />{' '}
                  </div>
                </Card>
                <Card className={classes.card}>
                  <InlineHeader>
                    <IconTitle icon="face" title="Creative Details" />
                  </InlineHeader>
                  <div style={{ padding: 10 }}>
                    <FieldTitle
                      name="3. Your Creative"
                      description="Start to describe your ideal creative. Example: A digital artist with a focus on high fantasy"
                      warning=""
                      inline={false}
                    />
                    <TextField
                      id={'creative-summary'}
                      value={job.creativeSummary}
                      label={`Creative Summary ${
                        job.creativeSummary
                          ? `(${186 - job.creativeSummary.length})`
                          : ''
                      }`}
                      inputProps={{ maxLength: 186 }}
                      onChange={(e) => {
                        setJob({
                          ...job,
                          creativeSummary: e.target
                            .substring(0, 186)
                            .value.replace(/[^A-Za-z0-9 ,\-.!()£$"'\n]/g, ''),
                        });
                        autosaveIsOn && autosave(mutation, 'image');
                      }}
                      margin="normal"
                      variant="outlined"
                      style={{ width: '100%' }}
                    />
                  </div>
                </Card>
                {job.id !== 'new' && (
                  <Card className={classes.card}>
                    <InlineHeader>
                      <IconTitle
                        icon="assignment_turned_in"
                        title="Submit Brief"
                      />
                    </InlineHeader>
                    <div style={{ padding: 10, textAlign: 'center' }}>
                      <FieldTitle
                        name="4. Submit"
                        description="Submit your job for approval, we'll let you know when it's live and don't worry you can still make changes."
                        warning=""
                        inline={false}
                      />
                      <Typography
                        variant="h2"
                        component="p"
                        style={{ marginTop: 30 }}
                      >
                        Awesome! Continue on to select your preferred artists
                      </Typography>
                      <Link
                        to={`/app/pick-artist/${job.id}`}
                        style={{
                          textDecoration: 'none',
                          color: '#444',
                        }}
                      >
                        <Button
                          className={classes.iconButton}
                          style={{ marginTop: 30, marginBottom: 30 }}
                        >
                          Continue
                          <Icon className={classes.iconButtonIcon}>
                            chevron_right
                          </Icon>
                        </Button>
                      </Link>
                    </div>
                  </Card>
                )}

                <Card className={classes.card} style={{ background: '#eee' }}>
                  <InlineHeader>
                    <IconTitle icon="warning" title="Dange Zone" />
                  </InlineHeader>
                  <div style={{ padding: 10 }}>
                    <Typography variant="h2" component="p">
                      Delete Job
                    </Typography>
                    <Mutation
                      mutation={REMOVE_JOB}
                      variables={{
                        id: jobId,
                      }}
                      onCompleted={(data) => {
                        toaster('Deleted');
                        history.replace(`/app/jobs`);
                      }}
                    >
                      {(mutation) => {
                        return (
                          <DeleteButton mutation={mutation} theme={theme} />
                        );
                      }}
                    </Mutation>
                  </div>
                </Card>
              </div>
            );
          }}
        </Mutation>

        <Query
          query={JOB}
          variables={{ jobId: jobId }}
          fetchPolicy="network-only"
          onCompleted={(data) => {
            data.getJob &&
              setJob({ ...data.getJob, gameId: data.getJob.game.id });
          }}
        >
          {({ data }) => {
            return null;
          }}
        </Query>
        <Query
          query={GAMES}
          fetchPolicy="network-only"
          onCompleted={(data) => {
            data.getGames.length > 0 && setGames(data.getGames);
            data.getGames.length > 0 &&
              setJob({
                ...job,
                gameId: job.gameId === '' ? data.getGames[0].id : job.gameId,
              });
          }}
        >
          {({ data }) => {
            return null;
          }}
        </Query>
      </div>
    </Slide>
  );
}
