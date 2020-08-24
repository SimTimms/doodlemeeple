import React from 'react';
import { useStyles } from '../styles';
import { IconButton, DeclineInvite } from '../../../../../../components';

export default function CreativeActions({
  proposalOpen,
  setProposalOpen,
  inviteId,
  setInviteStatus,
}) {
  const classes = useStyles();

  return (
    <div className={classes.actionWrapper}>
      <IconButton
        color="primary"
        icon={proposalOpen ? 'fact_check' : 'fact_check'}
        title={proposalOpen ? 'Minimise Quote' : 'Quote'}
        onClickEvent={() => setProposalOpen(proposalOpen ? false : true)}
        styleOverride={{ width: '100%' }}
        iconPos="right"
      />
      <DeclineInvite
        inviteId={inviteId}
        onCompleted={() => setInviteStatus('declined')}
      />
    </div>
  );
}
