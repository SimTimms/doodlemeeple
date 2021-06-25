import React from 'react';
import { Slide } from '@material-ui/core';
import { useStyles } from './styles';
import {
  CardComponent,
  NoticeBoardSecondary,
  Column,
  IconButton,
} from '../../../../../imports/sharedComponents';
import { Mutation } from 'react-apollo';
import { DECLINE_INVITE } from '../../../../../data';

export default function DeclineInviteView({ inviteId, history }) {
  const classes = useStyles();

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <NoticeBoardSecondary
          title="Decline This Invite?"
          subTitle="You will be unable to provide a quote for this job"
          onClickEvent={null}
          buttonLocked={false}
          lockedMsg=""
          backEvent={null}
        >
          <Column w={400}>
            <CardComponent>
              <Mutation
                mutation={DECLINE_INVITE}
                variables={{
                  _id: inviteId,
                }}
                onCompleted={(data) => {
                  history.replace(`/app/invites`);
                }}
              >
                {(mutation) => {
                  return (
                    <IconButton
                      title="Decline"
                      styleOverride={{ margin: 'auto' }}
                      color="warning"
                      icon="thumb_down"
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
