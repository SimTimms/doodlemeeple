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
  IconButton,
  LoadIcon,
  FieldBox,
  Column,
  Row,
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
  const [loading, setLoading] = React.useState(jobId === 'new' ? false : true);
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
    _id: 'new',
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
        {loading ? (
          <LoadIcon />
        ) : jobId === 'new' ? (
          <Mutation
            mutation={CREATE_JOB}
            variables={{
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
            }}
            onCompleted={(data) => {
              toaster('Autosave');
              const newjobId = data.jobCreateOne.recordId;
              history.replace(`/app/edit-job/${newjobId}`);
            }}
          >
            {(mutation) => {
              return (
                <div style={{ width: '100%' }}>
                  <Card className={classes.card}>
                    <Column align="center" justify="center">
                      <div
                        style={{
                          width: '100%',
                          padding: 10,
                          boxSizing: 'border-box',
                        }}
                      >
                        <FieldBox
                          title="Project Title"
                          value={job.name}
                          maxLength={86}
                          placeholder="placeholder"
                          onChangeEvent={(e) => {
                            setJob({
                              ...job,
                              name: e,
                            });
                          }}
                          replaceMode="loose"
                          info="Give the job a title that describes the work."
                          warning="Example: 24 full colour fantasy images for cards"
                          size="s"
                          multiline={false}
                        />
                      </div>
                      <IconButton
                        title="Create Job"
                        icon="add"
                        disabled={job.name.length < 4}
                        color="primary"
                        onClickEvent={() => {
                          mutation();
                        }}
                        styleOverride={{ marginLeft: 10 }}
                        type="button"
                        iconPos="right"
                      />
                    </Column>
                  </Card>
                </div>
              );
            }}
          </Mutation>
        ) : (
          <Mutation
            mutation={UPDATE_JOB}
            variables={{
              job: {
                _id: jobId,
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
              toaster('Autosave');
              const newjobId = data.updateJob;
              history.replace(`/app/edit-job/${newjobId}`);
            }}
          >
            {(mutation) => {
              return (
                <div style={{ width: '100%' }}>
                  {/*
                  <Card className={classes.card}>
                    <div style={{ padding: 10 }}>
                      <FieldTitle
                        name=" 1. Which game is this job for?"
                        description="Each job must be attached to a game, this allows you to create multiple jobs for the same game/project, you can create a game if you haven't already."
                        warning=""
                        inline={false}
                      />
                      <div
                        style={{
                          width: '100%',
                          display: 'flex',
                          flexWrap: 'wrap',
                          justifyContent: 'center',
                        }}
                      >
                        {games.map((item, index) => {
                          return (
                            <div
                              key={`item_${index}`}
                              className={clsx({
                                [classes.gameBox]: true,
                                [classes.gameBoxSelected]:
                                  job.gameId === item._id,
                              })}
                              onClick={() => {
                                setJob({ ...job, gameId: item._id });
                              }}
                            >
                              <div
                                className={clsx({
                                  [classes.gameBoxBG]: true,
                                  [classes.gameBoxSelectedBG]:
                                    job.gameId === item._id,
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
                    </div>
                  </Card>
                            */}

                  {job._id !== 'new' && (
                    <Card className={classes.card}>
                      <InlineHeader>
                        <IconTitle icon="work" title="Job Details" />
                      </InlineHeader>
                      <div style={{ padding: 10 }}>
                        <FieldBox
                          title="Project Title"
                          value={job.name}
                          maxLength={86}
                          placeholder="placeholder"
                          onChangeEvent={(e) => {
                            setJob({
                              ...job,
                              name: e,
                            });
                          }}
                          replaceMode="loose"
                          info="Give the job a title that describes the work."
                          warning="Example: 24 full colour fantasy images for cards"
                          size="s"
                          multiline={false}
                        />
                        <FieldBox
                          title="Project Summary"
                          value={job.summary}
                          maxLength={356}
                          placeholder="placeholder"
                          onChangeEvent={(e) => {
                            setJob({
                              ...job,
                              summary: e,
                            });
                          }}
                          replaceMode="loose"
                          info="Describe the job and what's expected, include as much detail as possible."
                          warning=""
                          size="s"
                          multiline={true}
                        />
                      </div>
                    </Card>
                  )}
                  {job._id !== 'new' && (
                    <Card className={classes.card}>
                      <InlineHeader>
                        <IconTitle icon="face" title="Creative Details" />
                      </InlineHeader>
                      <div style={{ padding: 10 }}>
                        <FieldTitle
                          name="3. Your Creative"
                          description="Describe the creative you would like to work with. "
                          warning="Example: A digital artist with a focus on high fantasy, based in Worthing with lots of experience"
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
                              creativeSummary: e.target.value
                                .substring(0, 186)
                                .replace(/[^A-Za-z0-9 ,\-.!()£$"'\n]/g, ''),
                            });
                            autosaveIsOn && autosave(mutation, 'image');
                          }}
                          margin="normal"
                          variant="outlined"
                          style={{ width: '100%' }}
                        />
                      </div>
                    </Card>
                  )}
                  {job._id !== 'new' && job._id !== 'new' && (
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
                          to={`/app/pick-artist/${job._id}`}
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
                  {job.gameId && job._id !== 'new' && (
                    <Card
                      className={classes.card}
                      style={{ background: '#eee' }}
                    >
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
                  )}
                </div>
              );
            }}
          </Mutation>
        )}
        {jobId !== 'new' && (
          <Query
            query={JOB}
            variables={{ jobId: jobId }}
            fetchPolicy="network-only"
            onCompleted={(data) => {
              setLoading(false);
              data.jobById &&
                setJob({
                  ...data.jobById,
                  gameId: data.jobById.game ? data.jobById.game._id : null,
                });
            }}
          >
            {({ data }) => {
              return null;
            }}
          </Query>
        )}
        {/*
        <Query
          query={GAMES}
          fetchPolicy="network-only"
          onCompleted={(data) => {
            data.gamesByUser.length > 0 && setGames(data.gamesByUser);
            data.gamesByUser.length > 0 &&
              setJob({
                ...job,
                gameId: job.gameId === '' ? data.gamesByUser[0].id : job.gameId,
              });
          }}
        >
          {({ data }) => {
            return null;
          }}
        </Query>*/}
      </div>
    </Slide>
  );
}
