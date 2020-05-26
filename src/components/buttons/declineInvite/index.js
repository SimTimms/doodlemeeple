import React from 'react';
import { Mutation } from 'react-apollo';
import { Button } from '@material-ui/core';
import { DECLINE_INVITE } from '../../../data/mutations';

export default function DeclineInvite({ invite, removeInvite }) {
  console.log(invite);
  return (
    <Mutation
      mutation={DECLINE_INVITE}
      variables={{
        id: invite.id,
      }}
      onCompleted={() => {
        removeInvite(invite.id);
      }}
    >
      {(mutation) => {
        return (
          <Button
            variant="contained"
            onClick={() => {
              mutation();
            }}
            style={{ width: 140 }}
          >
            Decline
          </Button>
        );
      }}
    </Mutation>
  );
}
