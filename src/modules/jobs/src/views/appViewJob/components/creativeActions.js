import React from 'react';
import { useStyles } from '../styles';
import {
  IconButton,
  DeclineInvite,
} from '../../../../imports/sharedComponents';

export default function CreativeActions({
  inviteId,
  onClickEvent,
  onDeclineEvent,
  ...props
}) {
  const classes = useStyles();
  const { proposalOpen } = props;
  return (
    <div className={classes.actionWrapper}>
      <IconButton
        color="warning"
        icon={proposalOpen ? 'local_post_office' : 'local_post_office'}
        title={proposalOpen ? 'Minimise Quote' : 'Quote'}
        onClickEvent={() => onClickEvent()}
        styleOverride={{ width: '100%', marginBottom: 0 }}
        iconPos="right"
      />
      <DeclineInvite inviteId={inviteId} onCompleted={() => onDeclineEvent()} />
    </div>
  );
}
