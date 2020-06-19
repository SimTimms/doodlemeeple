import React from 'react';
import { Mutation } from 'react-apollo';
import { DECLINE_INVITE } from '../../../data/mutations';
import { IconButton } from '../../';

export default function DeclineInvite({ invite, removeInvite }) {
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
          <IconButton
            disabled={false}
            secondaryColor={false}
            warning={true}
            icon="thumb_down_alt"
            title="Decline"
            onClickEvent={() => mutation()}
            styleOverride={null}
          />
        );
      }}
    </Mutation>
  );
}
