import React from 'react';
import { Column, Row } from '../../../../../../../components';
import NotificationDash from './NotificationDash';
import InvitesDash from './InvitesDash';
import CreativeDash from './CreativeDash';
import CheckListDash from './CheckListDash';
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
        <NotificationDash jobId={job.job._id} />
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
    <Column>
      <Row a="flex-start">
        <CheckListDash job={job} setTabNbr={setTabNbr} />
        <NotificationDash jobId={job._id} />
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
      </Row>
    </Column>
  );
}
