import React from 'react';
import { useStyles } from './styles';
import {
  Column,
  NoticeBoardSecondary,
  CardComponent,
  FieldBox,
} from '../../../imports/sharedComponents';
import { useMutation } from '@apollo/client';
import { CREATE_JOB, INITIAL_STATE } from '../../../data';

export default function NewJob({ history }) {
  const classes = useStyles();
  const [job, setJob] = React.useState(INITIAL_STATE);

  const [createJob, { loading }] = useMutation(CREATE_JOB, {
    variables: {
      name: job.name,
    },
    onCompleted({ jobCreateOne }) {
      const newjobId = jobCreateOne.recordId;
      history.replace(`/job/edit/${newjobId}`);
    },
  });

  return (
    <div className={classes.root}>
      <Column j="center">
        <NoticeBoardSecondary
          title="Create a Project"
          subTitle="Tell your chosen creatives about the job you're offering"
          onClickEvent={() => !loading && createJob('help')}
          buttonLocked={job.name.length < 10}
          lockedMsg={`${10 - job.name.length} characters required `}
        >
          <Column>
            <CardComponent classAdd={classes.card}>
              <Column a="center" j="center">
                <FieldBox
                  title="Project Title"
                  value={job.name}
                  maxLength={86}
                  minLength={10}
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
              </Column>
            </CardComponent>
          </Column>
        </NoticeBoardSecondary>
      </Column>
    </div>
  );
}
