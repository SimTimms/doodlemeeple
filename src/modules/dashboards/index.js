import React from 'react';
import { Typography } from '@material-ui/core';
import {
  Column,
  InviteComponentFull,
  Widget,
  ChosenCreative,
  MainTitle,
} from '../../components';
import { ResponsesWidget } from '../../widgets';

export default function ProjectDash({
  invites,
  setConversationUser,
  history,
  job,
}) {
  const accepted = job.submitted === 'accepted' ? true : false;
  const draft = job.submitted === 'draft' ? true : false;
  const inviteFiltered = accepted
    ? invites.filter(
        (invite) => invite.receiver._id === job.assignedCreative._id
      )
    : invites;
  return (
    <Column w={600} p={10} j="center">
      <MainTitle title={job.name} />
      {job.isPublic && !accepted && (
        <Widget p={10}>
          <Typography>Responses</Typography>
          <ResponsesWidget jobId={job._id} history={history} />
        </Widget>
      )}
      {job.isPublic && accepted && (
        <Widget p={10}>
          <Typography>Your Creative</Typography>
          <ChosenCreative
            user={job.assignedCreative}
            history={history}
            setConversationUser={setConversationUser}
          />
        </Widget>
      )}
      {invites.length > 0 && !draft && !job.isPublic ? (
        <Typography>{accepted ? 'Creative' : 'Invited Creatives'}</Typography>
      ) : (
        <Typography>Responses</Typography>
      )}

      {inviteFiltered.map((invite, index) => {
        const contractSubmitted = invite.job.contracts.filter(
          (contract) => contract.user._id === invite.receiver._id
        );
        return (
          <InviteComponentFull
            invite={invite}
            key={`invite-${index}`}
            setConversationUser={setConversationUser}
            contract={contractSubmitted[0]}
            history={history}
            jobId={job._id}
            contactDetails={accepted}
            isOpen={false}
          />
        );
      })}
    </Column>
  );
}
