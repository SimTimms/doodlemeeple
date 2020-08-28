import React from 'react';
import { useStyles } from '../styles';
import {
  ColumnWrapper,
  Divider,
  FieldTitleDashboard,
  MenuButtonShortcut,
  Column,
  Row,
} from '../../../../../../components';
import ProposalForm from '../components/proposalForm';

export default function ProposalView({ jobId, setProposalOpen }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ColumnWrapper>
        <Column>
          <FieldTitleDashboard name="Quote" inline={false} a="c" />
          <ProposalForm jobId={jobId} setProposalOpen={setProposalOpen} />
        </Column>
      </ColumnWrapper>
    </div>
  );
}
