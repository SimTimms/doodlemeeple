import React from 'react';
import { Mutation } from 'react-apollo';
import { DECLINE_INVITE } from '../../../data/mutations';
import { IconButton, LoadIcon } from '../../';

export default function DeclineInvite({ inviteId, onCompleted }) {
  const [confirm, setConfirm] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  return (
    <Mutation
      mutation={DECLINE_INVITE}
      variables={{
        _id: inviteId,
      }}
      onCompleted={() => {
        onCompleted && onCompleted();
      }}
    >
      {(mutation) => {
        return loading ? (
          <LoadIcon />
        ) : !confirm ? (
          <IconButton
            color="warning"
            icon="thumb_down"
            title="Decline"
            onClickEvent={() => {
              setConfirm(true);
            }}
            styleOverride={{ width: '100%' }}
            iconPos="right"
          />
        ) : (
          <IconButton
            color="warning"
            icon="warning"
            title="Confirm"
            onClickEvent={() => {
              setLoading(true);
              mutation();
            }}
            styleOverride={{ width: '100%' }}
            iconPos="right"
          />
        );
      }}
    </Mutation>
  );
}
