import React from 'react';
import { Column, Row } from '../../../../../../../components';
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
  return (
    <Column>
      <Row a="flex-start">
        <CheckListCreativeDash
          declined={invite && invite.data && invite.data.status === 'declined'}
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
