import React from 'react';
import { useStyles } from '../styles';
import {
  IconButton,
  DeclineInvite,
  BorderBox,
} from '../../../../../../components';

export default function CreativeActions({
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
        color="secondary"
        icon={proposalOpen ? 'thumb_up' : 'thumb_up'}
        title={proposalOpen ? 'Minimise Quote' : 'Quote'}
        onClickEvent={() => onClickEvent()}
        styleOverride={{ width: '100%', marginBottom: 0 }}
        iconPos="right"
      />
      <DeclineInvite inviteId={inviteId} onCompleted={() => onDeclineEvent()} />
    </div>
  );
}
