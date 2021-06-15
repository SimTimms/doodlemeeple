import React from 'react';
import { useStyles } from './styles';
import { InviteButton } from '../../';
import { useMutation } from '@apollo/client';

import { CREATE_INVITE } from '../../../data/mutations';

export default function Invite({ history, creative, favourite, ...props }) {
  const classes = useStyles();
  const { jobId, invite, updateInviteList, removeInviteList, disabled } = props;
  const [mutation, { loading }] = useMutation(
    CREATE_INVITE,
    {
      variables: {
        _id: invite._id,
        jobId: jobId,
        receiverId: creative._id,
        title: '',
        message: '',
      },
    },
    {
      onCompleted({ inviteCreateOne }) {
        invite.length === 0
          ? updateInviteList(creative, inviteCreateOne.recordId)
          : removeInviteList(creative);
      },
    }
  );

  return (
    <div className={classes.actionsWrapper}>
      <InviteButton
        mutation={() => {
          !disabled ? mutation() : disabled && invite.length > 0 && mutation();
        }}
        invite={invite.length > 0 ? true : false}
        disabled={invite.length > 0 ? false : disabled}
      />
    </div>
  );
}
