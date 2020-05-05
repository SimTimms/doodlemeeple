// @ts-nocheck
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
  LoadIcon,
  ContentHeader,
  DeleteButton,
  FieldTitle,
  ProfileCard,
} from '../../../../components';
import { Query } from 'react-apollo';
import { Mutation } from 'react-apollo';
import { UPDATE_JOB, CREATE_JOB, REMOVE_JOB } from '../../../../data/mutations';
import { JOB, GAMES, CREATIVES } from '../../../../data/queries';
import { UpdateJobButton } from './components/updateJobButton';
import { toaster } from '../../../../utils/toaster';
import autosave from '../../../../utils/autosave';

export function EditJob({ theme, jobId, autosaveIsOn, history, favourites }) {
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
  const [disabledValue, setDisabledValue] = React.useState(false);

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <ContentHeader
          title={jobId === 'new' ? 'Create a Job' : 'Edit a Job'}
          subTitle="Create a new job"
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
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingBottom: 5,
                  }}
                >
                  {/*!autosaveIsOn && (
                    <UpdateJobButton
                      job={job}
                      disabledValue={disabledValue}
                      setDisabledValue={setDisabledValue}
                      mutation={mutation}
                    />
                  )*/}
                </div>
                <Card className={classes.card}>
                  <div style={{ padding: 10 }}>
                    <FieldTitle
                      name=" 1. Which game is this job for?"
                      description="Each job must be attached to a game, you can create a game if you haven't already."
                      warning=""
                    />
                    <div style={{ width: '100%', display: 'flex' }}>
                      {games.map((item) => {
                        return (
                          <div
                            style={{
                              padding: 5,
                              borderRadius: 5,
                              marginRight: 10,
                              marginTop: 10,

                              boxShadow:
                                job.gameId === item.id
                                  ? '10px 10px 10px rgb(0,0,0,0.2)'
                                  : '',
                              border:
                                job.gameId === item.id
                                  ? '1px solid #444'
                                  : '1px solid #ddd',
                              cursor: 'pointer',
                            }}
                            onClick={() => {
                              setJob({ ...job, gameId: item.id });
                            }}
                          >
                            <div
                              style={{
                                background: `url(${item.backgroundImg})`,
                                backgroundSize: 'cover',
                                width: 160,
                                height: 90,
                                display: 'flex',
                                alignItems: 'flex-end',

                                opacity: job.gameId === item.id ? '100' : '0.8',
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
                          style={{
                            padding: 5,
                            borderRadius: 5,
                            marginRight: 10,
                            marginTop: 10,
                            boxShadow: '',
                            border: '1px solid #ddd',
                            cursor: 'pointer',
                            height: 150,
                          }}
                        >
                          <div
                            style={{
                              background: '#ddd',
                              backgroundSize: 'cover',
                              width: 160,
                              height: 90,
                              display: 'flex',
                              alignItems: 'flex-end',
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
                              New Game
                            </Typography>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <FieldTitle
                      name="2. Job Details"
                      description="Briefly summarise the job. Example: Images for 24 fantasy cards"
                      warning=""
                    />
                    <TextField
                      id={'name'}
                      value={job.name}
                      label={`Job Name ${
                        job.name ? `(${86 - job.name.length})` : ''
                      }`}
                      inputProps={{ maxLength: 86 }}
                      onChange={(e) => {
                        setDisabledValue(true);
                        autosaveIsOn && autosave(mutation, 'image');
                        setJob({
                          ...job,
                          name: e.target.value.replace(
                            /[^A-Za-z0-9 ,\-.!()£$"'\n]/g,
                            '',
                          ),
                        });
                      }}
                      margin="normal"
                      variant="outlined"
                      style={{ marginRight: 10 }}
                    />
                    <TextField
                      id={'summary'}
                      label={`Summary ${
                        job.summary ? `(${156 - job.summary.length})` : ''
                      }`}
                      inputProps={{ maxLength: 156 }}
                      multiline
                      type="text"
                      value={job.summary}
                      onChange={(e) => {
                        setDisabledValue(true);
                        setJob({
                          ...job,
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
                    <FieldTitle
                      name="3. Your Creative"
                      description="Start to describe your ideal creative. Example: A digital artist with a focus on high fantasy"
                      warning=""
                    />
                    <TextField
                      id={'creative-summary'}
                      value={job.creativeSummary}
                      label={`Creative Summary ${
                        job.creativeSummary
                          ? `(${86 - job.creativeSummary.length})`
                          : ''
                      }`}
                      inputProps={{ maxLength: 86 }}
                      onChange={(e) => {
                        setDisabledValue(true);

                        setJob({
                          ...job,
                          creativeSummary: e.target.value.replace(
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
                    <FieldTitle
                      name="4. Submit"
                      description="Submit your job for approval, we'll let you know when it's live and don't worry you can still make changes."
                      warning=""
                    />
                    {!job.submitted ? (
                      <Button
                        className={classes.iconButton}
                        onClick={(e) => {
                          toaster('Submitted');
                          setJob({
                            ...job,
                            submitted: true,
                          });
                          autosaveIsOn && autosave(mutation, 'image');
                        }}
                        style={{ marginTop: 50 }}
                      >
                        <Icon className={classes.iconButtonIcon}>publish</Icon>
                        Submit Job
                      </Button>
                    ) : (
                      <Button
                        className={classes.iconButton}
                        onClick={(e) => {
                          toaster('Unsubmitted');
                          setJob({
                            ...job,
                            submitted: false,
                          });
                          autosaveIsOn && autosave(mutation, 'image');
                        }}
                        style={{ marginTop: 50 }}
                      >
                        <Icon className={classes.iconButtonIcon}>close</Icon>
                        Un-Submit
                      </Button>
                    )}

                    {job.submitted && (
                      <div>
                        <FieldTitle
                          name="5. Invite Artists"
                          description=""
                          warning=""
                        />
                        <Query
                          query={CREATIVES}
                          fetchPolicy="network-only"
                          onCompleted={(data) => {}}
                        >
                          {({ loading, error, data }) => {
                            if (loading) return <LoadIcon />;
                            if (error) return <div>Error</div>;

                            return (
                              <div>
                                {data.getCreatives.map((item) => {
                                  return (
                                    <ProfileCard
                                      item={item}
                                      favourite={
                                        favourites.indexOf(item.id) > -1
                                          ? true
                                          : false
                                      }
                                      gameId={job.game.id}
                                      jobId={job.id}
                                    />
                                  );
                                })}
                              </div>
                            );
                          }}
                        </Query>
                      </div>
                    )}
                  </div>

                  <div
                    style={{
                      padding: 10,
                      borderTop: '1px dotted #ccc',
                      background: '#eee',
                    }}
                  >
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
          {({ loading, error, data }) => {
            if (loading) return <LoadIcon />;
            if (error) return <div>Error</div>;
            return <div></div>;
          }}
        </Query>
        <Query
          query={GAMES}
          fetchPolicy="network-only"
          onCompleted={(data) => {
            data.getGames && setGames(data.getGames);
            data.getGames &&
              setJob({
                ...job,
                gameId: job.gameId === '' ? data.getGames[0].id : job.gameId,
              });
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
