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
  InlineHeaderWarning,
  IconTitle,
  IconButton,
  LoadIcon,
  FieldBox,
  Column,
  UnlockInfo,
  Row,
} from '../../../../../components';
import { Query } from 'react-apollo';
import { Mutation } from 'react-apollo';
import {
  UPDATE_JOB,
  CREATE_JOB,
  REMOVE_JOB,
} from '../../../../../data/mutations';
import { JOB } from '../../../../../data/queries';
import { toaster } from '../../../../../utils/toaster';
import autosave from '../../../../../utils/autosave';
import { errorMessages } from '../../../../../utils/readableErrors';

export default function EditJob({
  theme,
  jobId,
  autosaveIsOn,
  history,
  favourites,
}) {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(jobId === 'new' ? false : true);
  const [deleteError, setDeleteError] = React.useState('');
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
  const [screen, setScreen] = React.useState(1);

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <ContentHeader
          title="Project Details"
          subTitle="Create a new project"
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
              summary: '',
              location: job.location,
              showreel: job.showreel,
              type: job.type,
              gameId: job.gameId,
              creativeSummary: '',
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
                    <Column a="center" j="center">
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
                          placeholder="24 full colour images..."
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
            }}
            onCompleted={(data) => {
              toaster('Autosave');
              const newjobId = data.updateJob;
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
                      <div style={{ padding: '10px 10px 0 10px' }}>
                        {screen === 1 ? (
                          <Column a="center" j="center">
                            <FieldBox
                              title="Project Title"
                              value={job.name}
                              maxLength={90}
                              placeholder="24 Fantasy Images for Card Game"
                              onChangeEvent={(e) => {
                                autosave(mutation);
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
                              title="Job Summary"
                              value={job.summary}
                              maxLength={500}
                              placeholder="24 unique images of monsters and heroes to be delivered by end of July....."
                              onChangeEvent={(e) => {
                                autosave(mutation);
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
                            <FieldBox
                              title="Video Message"
                              value={job.showreel}
                              maxLength={200}
                              placeholder="https://www.youtube.com/watch?v=zdDox2o7G1g"
                              onChangeEvent={(e) => {
                                autosave(mutation);
                                setJob({
                                  ...job,
                                  showreel: e,
                                });
                              }}
                              replaceMode="loose"
                              info="Add a video message to describe the project in more detail"
                              warning=""
                              size="s"
                              multiline={false}
                            />
                            {job.name.length < 4 ? (
                              <UnlockInfo str="Enter more detail to continue" />
                            ) : job.summary.length < 20 ? (
                              <UnlockInfo str="Enter more detail to continue" />
                            ) : null}
                            <IconButton
                              title="Continue"
                              icon="chevron_right"
                              disabled={
                                job.name.length < 4 || !job.summary
                                  ? true
                                  : job.summary.length < 20
                              }
                              color="primary"
                              onClickEvent={() => {
                                setScreen(2);
                              }}
                              styleOverride={{ marginLeft: 10 }}
                              type="button"
                              iconPos="right"
                            />
                          </Column>
                        ) : (
                          <Column a="center" j="center">
                            <FieldBox
                              title="Creative Summary"
                              value={job.creativeSummary}
                              maxLength={500}
                              placeholder="A digital artist with a focus on high fantasy...."
                              onChangeEvent={(e) => {
                                autosave(mutation);
                                setJob({
                                  ...job,
                                  creativeSummary: e,
                                });
                              }}
                              replaceMode="loose"
                              info="Describe your ideal creative, what art style you're looking for, where they should be based...."
                              warning=""
                              size="m"
                              multiline={true}
                            />
                            {job.creativeSummary.length < 20 && (
                              <UnlockInfo str="Enter at least 20 characters to continue" />
                            )}
                            <Row a="center" j="center">
                              <IconButton
                                title="Back"
                                icon="chevron_left"
                                disabled={false}
                                color="text-dark"
                                onClickEvent={() => {
                                  setScreen(1);
                                }}
                                styleOverride={{
                                  marginLeft: 5,
                                  marginRight: 5,
                                }}
                                type="button"
                                iconPos="left"
                              />
                              <IconButton
                                title="Next"
                                icon="chevron_right"
                                disabled={
                                  !job.creativeSummary
                                    ? true
                                    : job.creativeSummary.length < 20
                                }
                                color="primary"
                                onClickEvent={() => {
                                  history.push(`/app/pick-artist/${jobId}`);
                                }}
                                styleOverride={{
                                  marginLeft: 5,
                                  marginRight: 5,
                                }}
                                type="button"
                                iconPos="right"
                              />
                            </Row>
                          </Column>
                        )}
                      </div>
                    </Card>
                  )}

                  {job._id !== 'new' && screen === 1 && (
                    <Card className={classes.card} style={{ paddingBottom: 0 }}>
                      <div
                        style={{
                          padding: 10,
                          background: '#eee',
                        }}
                      >
                        <div>
                          <Mutation
                            mutation={REMOVE_JOB}
                            variables={{
                              id: job._id,
                            }}
                            onCompleted={(data) => {
                              toaster('Deleted');
                              history.replace(`/app/jobs`);
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
                  name: data.jobById.name ? data.jobById.name : '',
                  summary: data.jobById.summary ? data.jobById.summary : '',
                  creativeSummary: data.jobById.creativeSummary
                    ? data.jobById.creativeSummary
                    : '',
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
