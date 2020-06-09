import React from 'react';
import EditProposalForm from './views/editProposal';
import ViewProposal from './views/viewProposal';

export default function ProposalForm({ jobId }) {
  return (
    <div>
      <EditProposalForm jobId={jobId} />
      <ViewProposal jobId={jobId} />
    </div>
  );
}
