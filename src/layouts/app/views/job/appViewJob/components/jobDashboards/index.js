import React from 'react';
import { Column, Row, LoadIcon } from '../../../../../../../components';
import InvitesDash from './InvitesDash';
import CreativeDash from './CreativeDash';
import CheckListCreativeDash from './CheckListCreativeDash';

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
      {!job.activeContract && (
        <InvitesDash
          invites={job.invites}
          setConversationUser={setConversationUser}
          jobClosed={job.submitted === 'closed'}
          history={history}
        />
      )}
      {job.activeContract && (
        <CreativeDash
          setConversationUser={setConversationUser}
          history={history}
          job={job}
        />
      )}
    </Column>
  );
}
