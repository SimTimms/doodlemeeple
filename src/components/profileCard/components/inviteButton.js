import React from 'react';
import { useStyles } from './styles';
import { InviteButton } from '../../';
import { Mutation } from 'react-apollo';
import { CREATE_INVITE } from '../../../data/mutations';

export default function Invite({ history, creative, favourite, ...props }) {
  const classes = useStyles();
  const { jobId, invite, updateInviteList, removeInviteList, disabled } = props;

  return (
    <div className={classes.actionsWrapper}>
      <Mutation
        mutation={CREATE_INVITE}
        variables={{
          _id: invite._id,
          jobId: jobId,
          receiverId: creative._id,
          title: '',
          message: '',
        }}
        onCompleted={(data, error) => {
          invite.length === 0
            ? updateInviteList(creative, data.inviteCreateOne.recordId)
            : removeInviteList(creative);
        }}
      >
        {(mutation) => {
          return (
            <InviteButton
              mutation={() => {
                !disabled
                  ? mutation()
                  : disabled && invite.length > 0 && mutation();
              }}
              invite={invite.length > 0 ? true : false}
              disabled={invite.length > 0 ? false : disabled}
            />
          );
        }}
      </Mutation>
    </div>
  );
}
