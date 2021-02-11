import React from 'react';
import { Column, Row } from '../../../../../../../components';
import InvitesDash from './InvitesDash';
import CreativeDash from './CreativeDash';
import CheckListDash from './CheckListDash';
import CheckListCreativeDash from './CheckListCreativeDash';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';
import { useStyles } from './styles';

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
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:800px)');
  return (
    <Column a="flex-start">
      <div
        className={clsx({
          [classes.desktop]: true,
          [classes.mobile]: mobile,
        })}
      >
        <CheckListDash job={job} setTabNbr={setTabNbr} history={history} />
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
      </div>
    </Column>
  );
}
