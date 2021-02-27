import React from 'react';
import { Slide } from '@material-ui/core';
import { useStyles } from './styles';
import {
  CardComponent,
  NoticeBoardSecondary,
  Column,
  IconButton,
} from '../../../../../../../components';
import { Mutation } from 'react-apollo';
import { CLOSE_JOB } from '../../../../../../../data/mutations';

export default function CloseJobView({ jobId, history }) {
  const classes = useStyles();

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <NoticeBoardSecondary
          title="Close This Project?"
          subTitle="You will be unable to reopen this project and it will be moved to your history"
          onClickEvent={null}
          buttonLocked={false}
          lockedMsg=""
          backEvent={null}
          subMenu={true}
        >
          <Column w={400}>
            <CardComponent>
              <Mutation
                mutation={CLOSE_JOB}
                variables={{
                  _id: jobId,
                }}
                onCompleted={(data) => {
                  history.replace(`/app/projects`);
                }}
              >
                {(mutation) => {
                  return (
                    <IconButton
                      title="Close Project"
                      styleOverride={{ margin: 'auto' }}
                      color="warning"
                      icon="close"
                      onClickEvent={() => {
                        mutation();
                      }}
                    />
                  );
                }}
              </Mutation>
            </CardComponent>
          </Column>
        </NoticeBoardSecondary>
      </div>
    </Slide>
  );
}
