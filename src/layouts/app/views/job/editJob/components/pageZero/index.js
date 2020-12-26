import React from 'react';
import { Card } from '@material-ui/core';
import { useStyles } from '../../styles';
import {
  IconButton,
  FieldBox,
  Column,
  UnlockInfo,
} from '../../../../../../../components';
import { Mutation } from 'react-apollo';
import { CREATE_JOB } from '../../../../../../../data/mutations';
import { toaster } from '../../../../../../../utils/toaster';

export default function PageZero({ setJob, job, history }) {
  const classes = useStyles();

  return (
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
                  {job.name.length < 10 && (
                    <UnlockInfo str="Provide a title that summarises the job" />
                  )}
                </div>
                <IconButton
                  title="Create Job"
                  icon="add"
                  disabled={job.name.length < 10}
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
  );
}
