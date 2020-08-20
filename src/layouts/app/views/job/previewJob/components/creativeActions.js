import React from 'react';
import { useStyles } from '../styles';
import { IconButton } from '../../../../../../components';

export default function CreativeActions({ proposalOpen, setProposalOpen }) {
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

      <IconButton
        color="warning"
        icon="thumb_down"
        title="Decline"
        onClickEvent={() => setProposalOpen(proposalOpen ? false : true)}
        styleOverride={{ width: '100%' }}
        iconPos="right"
      />
    </div>
  );
}
