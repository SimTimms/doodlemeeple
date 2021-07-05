import React from 'react';
import { Typography } from '@material-ui/core';
import {
  Column,
  InviteComponentFull,
  Widget,
  Divider,
  Row,
  ChosenCreative,
} from '../../components';
import { TaskGeneratorClient } from '../../modules/tasks';
import { ResponsesWidget } from '../../widgets';

export default function ProjectDash({
  invites,
  setConversationUser,
  history,
  job,
  setTabNbr,
}) {
  const [openQuoteId, setOpenQuoteId] = React.useState(null);
  const accepted = job.submitted === 'accepted' ? true : false;
  const draft = job.submitted === 'draft' ? true : false;
  const inviteFiltered = accepted
    ? invites.filter(
        (invite) => invite.receiver._id === job.assignedCreative._id
      )
    : invites;
  return (
    <Column w={600} p={10} j="center">
      {job.isPublic && !accepted && (
        <Widget p={10}>
          <Typography>Responses</Typography>
          <ResponsesWidget jobId={job._id} history={history} />
        </Widget>
      )}
      {job.isPublic && accepted && (
        <Widget p={10}>
          <Typography>Your Creative</Typography>
          <ChosenCreative user={job.assignedCreative} history={history} />
        </Widget>
      )}
      {invites.length > 0 && !draft && (
        <Widget p={10}>
          {!job.isPublic ? (
            <Typography>
              {accepted ? 'Creative' : 'Invited Creatives'}
            </Typography>
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
                isOpen={
                  openQuoteId === contractSubmitted && contractSubmitted[0]._id
                    ? true
                    : false
                }
              />
            );
          })}
        </Widget>
      )}
      {job.submitted !== 'closed' && (
        <Widget p={10}>
          <Column>
            <Typography variant="body1">Tasks</Typography>
            <Divider />
            <Row>
              <TaskGeneratorClient
                setTabNbr={setTabNbr}
                job={job}
                contracts={job.contracts}
                setOpenQuoteId={setOpenQuoteId}
                history={history}
                accepted={accepted}
              />
            </Row>
          </Column>
        </Widget>
      )}
    </Column>
  );
}
