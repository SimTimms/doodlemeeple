import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';
import {
  Column,
  FieldTitleDashboard,
  Widget,
  DividerWithBorder,
  Divider,
  DividerMini,
  CreatorComponentDash,
} from '../../../../../../../components';
import { InviteReceived, InviteReplied, ItemViewJob } from './CheckListItems';

export default function CheckListCreativeDash({
  declined,
  invite,
  setTabNbr,
  setConversationUser,
  job,
  history,
}) {
  const accepted = invite.status === 'accepted';
  const unopened = invite.status === 'unopened';
  const quoted = invite.status === 'quote_sent';
  const jobActive = job.job.activeContract;
  const activeContract = job.job.activeContract._id === job.contract._id;
  const color = [
    1,
    2,
    unopened ? 2 : 1,
    quoted ? 1 : declined ? 2 : accepted ? 0 : 2,
  ];
  const classes = useStyles();

  return (
    <Column w={300} p={10}>
      <Widget p={10}>
        <FieldTitleDashboard name={job.job.name} inline={false} a="c" />
        <Typography variant="h6" align="left"></Typography>
        <DividerMini />
        <CreatorComponentDash
          user={job.creator}
          setConversationUser={setConversationUser}
          declined={declined}
          history={history}
        />
        {(declined || quoted || activeContract || !activeContract) && (
          <Column>
            <DividerMini />
            <FieldTitleDashboard name="Status" inline={false} a="c" />
            <DividerMini />
            <Typography
              variant="h6"
              className={clsx({
                [classes.status]: true,
                [classes.statusGreen]: quoted || activeContract,
              })}
            >
              {jobActive
                ? activeContract
                  ? 'QUOTE ACCEPTED'
                  : !activeContract
                  ? 'QUOTE REJECTED'
                  : declined
                  ? 'INVITE DECLINED'
                  : quoted && 'WAITING ON CLIENT'
                : null}
            </Typography>
          </Column>
        )}
        <Divider />
        <FieldTitleDashboard name="Checklist" inline={false} a="c" />
        <Divider />
        <Column>
          <InviteReceived color={color[0]} />
          <DividerWithBorder />
          <ItemViewJob
            reply={invite.status}
            inviteId={invite._id}
            setTabNbr={setTabNbr}
            color={color[2]}
          />
          <DividerWithBorder />
          <InviteReplied
            color={color[3]}
            status={invite.status}
            setTabNbr={setTabNbr}
          />
          <Divider />
        </Column>
      </Widget>
    </Column>
  );
}
