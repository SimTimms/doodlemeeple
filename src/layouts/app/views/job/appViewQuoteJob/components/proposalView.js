import React from 'react';
import { useStyles } from '../styles';
import { ColumnWrapper, Column } from '../../../../../../components';
import ProposalForm from '../components/proposalForm';

export default function ProposalView({ jobId, setProposalOpen, history }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ColumnWrapper>
        <Column>
          <ProposalForm
            jobId={jobId}
            setProposalOpen={setProposalOpen}
            history={history}
          />
        </Column>
      </ColumnWrapper>
    </div>
  );
}
