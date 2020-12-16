import React, { useEffect } from 'react';
import { Slide } from '@material-ui/core';
import { useStyles } from './styles';
import {
  IconButton,
  LoadIcon,
  UnlockInfo,
  Divider,
  Column,
  FieldTitleDashboard,
  DeleteButton,
} from '../../../../../components';
import { Query } from 'react-apollo';
import { Mutation } from 'react-apollo';
import { UPDATE_JOB, REMOVE_JOB } from '../../../../../data/mutations';
import { JOB } from '../../../../../data/queries';
import { toaster } from '../../../../../utils/toaster';
import {
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
  Section7,
  Section8,
} from './components/pageOne';
import PageZero from './components/pageZero';
import { unlock, checkLength } from './unlock';

export default function EditJob({ jobId, history }) {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(jobId === 'new' ? false : true);
  const [job, setJob] = React.useState({
    name: '',
    img: '',
    genre: '',
    summary: '',
    scope: '',
    mechanics: '',
    timeframe: '',
    extra: '',
    budget: '',
    keywords: [],
    location: '',
    gallery: {
      images: [],
    },
    showreel: '',
    type: 'job',
    creativeSummary: '',
    _id: 'new',
    gameId: '',
    submitted: '',
  });
  const [locked, setLocked] = React.useState(false);

  useEffect(() => {
    setLocked(
      !checkLength(job.name, 'name') ||
        !checkLength(job.genre, 'genre') ||
        !checkLength(job.summary, 'summary') ||
        !checkLength(job.creativeSummary, 'creativeSummary') ||
        job.keywords.length === 0
    );
  }, [job, setLocked]);

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <Divider />
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
              <FieldTitleDashboard
                name="Edit Project"
                inline={false}
                a="l"
                menu={
                  jobId !== 'new' ? (
                    <DeleteButton mutation={mutation} str="" />
                  ) : null
                }
              />
            );
          }}
        </Mutation>

        <Divider />
        {loading ? (
          <LoadIcon />
        ) : jobId === 'new' ? (
          <PageZero history={history} setJob={setJob} job={job} />
        ) : (
          <Mutation
            mutation={UPDATE_JOB}
            variables={{
              _id: jobId,
              name: job.name,
              img: job.img,
              summary: job.summary,
              genre: job.genre,
              location: job.location,
              scope: job.scope,
              mechanics: job.mechanics,
              timeframe: job.timeframe,
              gallery: job.gallery._id,
              extra: job.extra,
              budget: job.budget,
              showreel: job.showreel,
              type: job.type,
              gameId: job.gameId,
              creativeSummary: job.creativeSummary,
              submitted: job.submitted,
              keywords: job.keywords,
            }}
            onCompleted={(data) => {
              toaster('Autosave');
            }}
          >
            {(mutation) => {
              return (
                <div style={{ width: '100%' }}>
                  {job._id !== 'new' && (
                    <div style={{ padding: '10px 10px 0 10px' }}>
                      {job.submitted && job.submitted !== 'draft' && (
                        <UnlockInfo str="This project has been submitted and can't be modified" />
                      )}

                      <Column>
                        <Section1
                          setJob={setJob}
                          job={job}
                          mutation={mutation}
                        />
                        <Divider />
                        <Section2
                          setJob={setJob}
                          job={job}
                          mutation={mutation}
                        />
                        <Divider />
                        <Section4
                          setJob={setJob}
                          job={job}
                          mutation={mutation}
                        />
                        <Divider />
                        <Section5
                          setJob={setJob}
                          job={job}
                          mutation={mutation}
                        />
                        <Divider />
                        <Section8
                          setJob={setJob}
                          job={job}
                          mutation={mutation}
                        />
                        <Divider />
                        <Section3
                          setJob={setJob}
                          job={job}
                          mutation={mutation}
                        />
                        <Divider />
                        <Section6
                          setJob={setJob}
                          job={job}
                          mutation={mutation}
                        />
                        <Divider />
                        <Section7
                          setJob={setJob}
                          job={job}
                          mutation={mutation}
                        />
                        {unlock(job) !== null && (
                          <UnlockInfo str={unlock(job)} />
                        )}
                        {!locked && (
                          <IconButton
                            title="Continue"
                            icon="chevron_right"
                            iconPos="right"
                            color="primary"
                            onClickEvent={() => {
                              history.push(`/app/pick-artist/${jobId}`);
                            }}
                            styleOverride={{ marginLeft: 10 }}
                          />
                        )}
                      </Column>
                    </div>
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
                  genre: data.jobById.genre ? data.jobById.genre : '',
                  summary: data.jobById.summary ? data.jobById.summary : '',
                  scope: data.jobById.scope ? data.jobById.scope : '',
                  budget: data.jobById.budget ? data.jobById.budget : '',
                  extra: data.jobById.extra ? data.jobById.extra : '',
                  gallery: data.jobById.gallery ? data.jobById.gallery : '',
                  timeframe: data.jobById.timeframe
                    ? data.jobById.timeframe
                    : '',
                  mechanics: data.jobById.mechanics
                    ? data.jobById.mechanics
                    : '',
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
      </div>
    </Slide>
  );
}
