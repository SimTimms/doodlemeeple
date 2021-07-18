import React from 'react';
import { Typography, Card } from '@material-ui/core';
import {
  Column,
  NoticeBoardSecondary,
  IconButton,
  Divider,
} from '../../../components';
import { Mutation } from 'react-apollo';
import { UPDATE_JOB } from '../data';
import { toaster } from '../../../utils/toaster';
import { unlock } from '../unlock';

export default function Tab3({ job, setJob, setTab, locked }) {
  const [isPublic, setIsPublic] = React.useState(false);

  return (
    <Mutation
      mutation={UPDATE_JOB}
      variables={{
        ...job,
      }}
      onCompleted={(data) => {
        toaster('Saved');
        setTab(4);
      }}
    >
      {(mutation) => {
        return (
          <NoticeBoardSecondary
            title=""
            subTitle="Would you like everyone to see this job?"
            onClickEvent={() => mutation()}
            buttonLocked={locked}
            lockedMsg={unlock(job)}
          >
            <Column w={600}>
              <Column a="center">
                <IconButton
                  color="text-dark"
                  title={isPublic ? 'Yes' : 'No'}
                  icon={isPublic ? 'toggle_on' : 'toggle_off'}
                  onClickEvent={() => {
                    let isPublicConst = isPublic ? false : true;
                    setIsPublic(isPublicConst);
                    setJob({
                      ...job,
                      isPublic: isPublicConst,
                    });
                  }}
                  styleOverride={{
                    width: 150,
                    border: '1px solid #ccc',
                    marginLeft: 10,
                  }}
                />
                <Typography
                  variant="body1"
                  align="center"
                  style={{ fontStyle: 'italic', maxWidth: 300 }}
                >
                  {isPublic
                    ? 'This job will be published on the job board, professionals will contact you with quotes'
                    : 'You can invite up to 5 professionals to quote for this job'}
                </Typography>
                <Divider />
              </Column>
            </Column>
          </NoticeBoardSecondary>
        );
      }}
    </Mutation>
  );
}
