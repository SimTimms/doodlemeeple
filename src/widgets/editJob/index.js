import React, { useEffect } from 'react';
import { Slide } from '@material-ui/core';
import { useStyles } from './styles';
import {
  UnlockInfo,
  Divider,
  Column,
  FieldTitleDashboard,
  DeleteButton,
  CardComponent,
  NoticeBoardSecondary,
} from '../../components';
import { Query } from 'react-apollo';
import { Mutation } from 'react-apollo';
import { UPDATE_JOB, REMOVE_JOB, CREATE_JOB, JOB } from './data';
import { toaster } from '../../utils/toaster';
import {
  SectionQuestions,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
  Section7,
  Section8,
} from './components/pageOne';
import NewJobName from './components/newJobName';
import { unlock, checkLength } from './unlock';
import { initialState } from './initialState';

export default function EditJob({ jobId, history, creativeId }) {
  const classes = useStyles();
  const [job, setJob] = React.useState(initialState);
  const [locked, setLocked] = React.useState(false);
  const [qComplete, setQComplete] = React.useState(false);
  const [savedCreative, setSavedCreative] = React.useState(false);

  useEffect(() => {
    setLocked(
      !checkLength(job.name, 'name') ||
        !checkLength(job.genre, 'genre') ||
        !checkLength(job.summary, 'summary') ||
        !checkLength(job.creativeSummary, 'creativeSummary') ||
        job.keywords.length === 0
    );
    creativeId && setSavedCreative(creativeId);
  }, [job, setLocked, creativeId]);

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <Column j="center">
          {job._id === 'new' ? (
            <Mutation
              mutation={CREATE_JOB}
              variables={{
                name: job.name,
                summary: '',
                creativeSummary: '',
                location: job.location,
                showreel: job.showreel,
                type: job.type,
                gameId: job.gameId,
                submitted: job.submitted,
              }}
              onCompleted={(data) => {
                toaster('Autosave');
                console.log(data);
                setJob({
                  ...job,
                  _id: data.jobCreateOne.recordId,
                  gallery: data.jobCreateOne.record.gallery._id,
                });
              }}
            >
              {(mutation) => {
                return (
                  <NoticeBoardSecondary
                    subTitle="Summarise the job you're offering"
                    onClickEvent={() => mutation()}
                    buttonLocked={job.name.length < 10}
                    lockedMsg={`${10 - job.name.length} characters required `}
                  >
                    <NewJobName history={history} setJob={setJob} job={job} />
                  </NoticeBoardSecondary>
                );
              }}
            </Mutation>
          ) : !qComplete ? (
            <Mutation
              mutation={UPDATE_JOB}
              variables={{
                ...job,
              }}
              onCompleted={(data) => {
                toaster('Saved...');
                setQComplete(true);
              }}
            >
              {(mutation) => {
                return (
                  <NoticeBoardSecondary
                    title=""
                    subTitle="Have you read the Terms of Service"
                    onClickEvent={() => mutation()}
                    buttonLocked={!job.termsAccepted}
                    lockedMsg="You must read and accept the terms of service"
                  >
                    <SectionQuestions setJob={setJob} job={job} />
                  </NoticeBoardSecondary>
                );
              }}
            </Mutation>
          ) : (
            <Mutation
              mutation={UPDATE_JOB}
              variables={{
                ...job,
                _id: jobId,
              }}
              onCompleted={(data) => {
                toaster('Autosave');
              }}
            >
              {(mutation) => {
                return (
                  <NoticeBoardSecondary
                    title=""
                    subTitle="Add details to unlock more options"
                    onClickEvent={() =>
                      history.push(
                        `/app/choose-job-type/${jobId}/${savedCreative}`
                      )
                    }
                    buttonLocked={locked}
                    lockedMsg={unlock(job)}
                  >
                    {job._id !== 'new' && (
                      <div style={{ padding: '10px 10px 0 10px' }}>
                        {job.submitted && job.submitted !== 'draft' ? (
                          <UnlockInfo str="This project has been submitted and can't be modified" />
                        ) : (
                          <Column w={600}>
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
                            <Divider />
                            {job.submitted && job.submitted === 'draft' && (
                              <CardComponent>
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
                                        name="Delete Project"
                                        inline={false}
                                        a="l"
                                        menu={
                                          jobId !== 'new' ? (
                                            <DeleteButton
                                              mutation={mutation}
                                              str=""
                                            />
                                          ) : null
                                        }
                                      />
                                    );
                                  }}
                                </Mutation>
                              </CardComponent>
                            )}
                          </Column>
                        )}
                      </div>
                    )}
                  </NoticeBoardSecondary>
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
                    termsAccepted: data.jobById.termsAccepted
                      ? data.jobById.termsAccepted
                      : false,
                    funded: data.jobById.funded ? data.jobById.funded : false,
                    speculative: data.jobById.speculative
                      ? data.jobById.speculative
                      : false,
                    inLieu: data.jobById.inLieu ? data.jobById.inLieu : false,
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
        </Column>
      </div>
    </Slide>
  );
}
