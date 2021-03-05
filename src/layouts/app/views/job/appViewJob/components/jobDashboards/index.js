import React from 'react';
import { Column, Row, LoadIcon } from '../../../../../../../components';
import ProjectDash from './ProjectDash';
import CreativeDash from './CreativeDash';
import CheckListCreativeDash from './CheckListCreativeDash';
import QuotePreview from '../quotePreview';

export function CreativeDashboard({
  job,
  setConversationUser,
  invite,
  setTabNbr,
  history,
  activeContract,
  jobHasBeenAwarded,
  userContractStatus,
  contractData,
}) {
  const declined = invite.data.status === 'declined';

  return (
    <Column>
      <Row a="flex-start">
        <CheckListCreativeDash
          declined={declined}
          invite={invite.data}
          setTabNbr={setTabNbr}
          job={job}
          history={history}
          setConversationUser={setConversationUser}
          jobHasBeenAwarded={jobHasBeenAwarded}
          activeContract={activeContract}
          userContractStatus={userContractStatus}
          contractData={contractData}
        />
      </Row>
    </Column>
  );
}

export function CreatorDashboard({
  job,
  setConversationUser,
  setTabNbr,
  history,
}) {
  return (
    <Column a="center">
      <ProjectDash
        invites={job.invites}
        setConversationUser={setConversationUser}
        jobClosed={job.submitted === 'closed'}
        history={history}
        job={job}
        setTabNbr={setTabNbr}
      />
    </Column>
  );
}
