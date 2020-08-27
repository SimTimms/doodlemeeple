import React, { useEffect } from 'react';
import { useStyles } from '../styles';
import {
  ColumnWrapper,
  HeaderTwo,
  Divider,
  Column,
} from '../../../../../../components';
import ProposalForm from '../components/proposalForm';

export default function ProposalView({
  jobId,
  messagesEnd,
  setProposalOpen,
  setMessagesEnd,
  history,
}) {
  const classes = useStyles();

  useEffect(() => {
    messagesEnd && messagesEnd.scrollIntoView({ behavior: 'smooth' });
  });

  return (
    <div className={classes.root}>
      <div
        ref={(ele) => {
          setMessagesEnd(ele);
        }}
        style={{ marginTop: -60, paddingTop: 60 }}
      ></div>
      <ColumnWrapper>
        <Column>
          <HeaderTwo str="Quote" />
          <Divider />
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
