import React, { useEffect } from 'react';
import { Slide } from '@material-ui/core';
import { useStyles } from '../styles';
import {
  ColumnWrapper,
  HeaderTwo,
  Divider,
  IconButton,
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
          <IconButton
            title="Back"
            icon="chevron_left"
            iconPos="left"
            color="text-dark"
            onClickEvent={() => setProposalOpen(false)}
          />
        </Column>
      </ColumnWrapper>
    </div>
  );
}
