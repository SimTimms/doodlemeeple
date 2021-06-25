import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import {
  LoadIcon,
  UnlockInfo,
  Divider,
  Column,
  FieldTitleDashboard,
  DeleteButton,
  CardComponent,
  NoticeBoardSecondary,
  IconButton,
} from '../../../imports/sharedComponents';
import { useQuery, useMutation } from '@apollo/client';
import { UPDATE_JOB, REMOVE_JOB, SUBMIT_PUBLIC_BRIEF } from '../../../data';
import { JOB } from '../../../data';
import { toaster } from '../sharedUtils';
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
import Terms from '../terms';
import { unlock, checkLength } from './unlock';
import { initialState } from './initialState';

export default function EditJob({ history, creativeId, ...props }) {
  const classes = useStyles();
  const [job, setJob] = React.useState(initialState);
  const [locked, setLocked] = React.useState(false);
  const [qComplete, setQComplete] = React.useState(false);
  const [savedCreative, setSavedCreative] = React.useState(false);
  const [isPublic, setIsPublic] = React.useState(false);
  const jobId = props.match.params.jobId;

  const { jobLoading, error, data } = useQuery(JOB, {
    variables: { jobId },
    onCompleted({ jobById }) {
      jobById &&
        setJob({
          ...jobById,
        });
    },
  });

  const [removeJob, { removeLoading }] = useMutation(
    REMOVE_JOB,
    {
      variables: {
        id: jobId,
      },
    },
    {
      onCompleted() {
        toaster('Deleted');
        history.replace(`/app/jobs`);
      },
    }
  );

  const [submitPublicBrief, { publicLoading }] = useMutation(
    SUBMIT_PUBLIC_BRIEF,
    {
      variables: {
        jobId: job._id,
      },
    },
    {
      onCompleted() {
        history.push('/app/submitted');
      },
    }
  );

  const [updateJob, { updateLoading }] = useMutation(
    UPDATE_JOB,
    {
      variables: {
        ...job,
        _id: jobId,
        gallery: job.gallery._id,
      },
    },
    {
      onCompleted({ jobCreateOne }) {
        toaster('Saved...');
      },
    }
  );

  useEffect(() => {
    setLocked(
      !checkLength(job.name, 'name') ||
        !checkLength(job.genre, 'genre') ||
        !checkLength(job.summary, 'summary') ||
        !checkLength(job.creativeSummary, 'creativeSummary') ||
        job.keywords.length === 0
    );
    creativeId !== 'public' && creativeId && setSavedCreative(creativeId);
    creativeId === 'public' && setIsPublic(true);
  }, [job, setLocked, creativeId]);

  return (
    <div className={classes.root}>
      <Column j="center">
        {job._id === 'new' ? (
          <div>Loading</div>
        ) : job.termsAccepted ? (
          <Terms setJob={setJob} job={job} />
        ) : isPublic ? (
          <div
            style={{
              width: '100%',
              maxWidth: 500,
              background: '#fff',
              padding: 20,
            }}
          >
            <Column j="center" a="center">
              <Typography variant="h5">Submit this job?</Typography>
              <Typography
                variant="body1"
                style={{
                  textAlign: 'center',
                  paddingTop: 10,
                  paddingBottom: 10,
                }}
              >
                You will be unable to modify this project after this stage.
              </Typography>

              <IconButton
                onClickEvent={() => {
                  submitPublicBrief();
                }}
                icon="chevron_right"
                title="Submit"
                iconPos="right"
                styleOverride={null}
                type="button"
                color="warning"
              />
            </Column>
          </div>
        ) : (
          <NoticeBoardSecondary
            title=""
            subTitle="Add details to unlock more options"
            onClickEvent={() => {
              history.push(`/app/pick-artist/${jobId}/${savedCreative}`);
            }}
            buttonLocked={locked}
            lockedMsg={unlock(job)}
          >
            {job._id !== 'new' && (
              <div style={{ padding: '10px 10px 0 10px' }}>
                {job.submitted && job.submitted !== 'draft' ? (
                  <UnlockInfo str="This project has been submitted and can't be modified" />
                ) : (
                  <Column w={600}>
                    <Section1 setJob={setJob} job={job} mutation={updateJob} />
                    <Divider />
                    <Section2 setJob={setJob} job={job} mutation={updateJob} />
                    <Divider />
                    <Section4 setJob={setJob} job={job} mutation={updateJob} />
                    <Divider />
                    <Section5 setJob={setJob} job={job} mutation={updateJob} />
                    <Divider />
                    <Section8 setJob={setJob} job={job} mutation={updateJob} />
                    <Divider />
                    <Section3 setJob={setJob} job={job} mutation={updateJob} />
                    <Divider />
                    <Section6 setJob={setJob} job={job} mutation={updateJob} />
                    <Divider />
                    <Section7 setJob={setJob} job={job} mutation={updateJob} />
                    <Divider />
                    {job.submitted && job.submitted === 'draft' && (
                      <CardComponent>
                        <FieldTitleDashboard
                          name="Delete Project"
                          inline={false}
                          a="l"
                          menu={
                            jobId !== 'new' ? (
                              <DeleteButton mutation={removeJob} str="" />
                            ) : null
                          }
                        />
                      </CardComponent>
                    )}
                  </Column>
                )}
              </div>
            )}
          </NoticeBoardSecondary>
        )}
      </Column>
    </div>
  );
}
