import React from 'react';
import { useStyles } from '../styles';
import { IconButton, DeclineInvite } from '../../../../../../components';

export default function CreativeActionsTwo({
  inviteId,
  onClickEvent,
  onDeclineEvent,
  ...props
}) {
  const classes = useStyles();
  const { proposalOpen, setProposalOpen, setInviteStatus } = props;
  return (
    <div className={classes.actionWrapper}>
      <IconButton
        color="primary"
        icon="edit"
        title="Edit Quote"
        onClickEvent={() => onClickEvent()}
        styleOverride={{ width: '100%', marginBottom: 0 }}
        iconPos="right"
      />
      <DeclineInvite inviteId={inviteId} onCompleted={() => onDeclineEvent()} />
    </div>
  );
}
