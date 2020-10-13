import React from 'react';
import {
  Column,
  FieldTitleDashboard,
  Widget,
  DividerWithBorder,
  Divider,
} from '../../../../../../../components';
import { InviteReceived, InviteReplied, ItemViewJob } from './CheckListItems';

export default function CheckListCreativeDash({ contract, invite, setTabNbr }) {
  const color = [
    1,
    2,
    invite.status === 'unopened' ? 2 : 1,
    invite.status === 'declined' ? 1 : invite.status === '' ? 0 : 1,
  ];

  return (
    <Column w="50%" p={10}>
      <Widget p={10}>
        <FieldTitleDashboard name="Checklist" inline={false} a="c" />
        <Divider />
        <Column>
          <DividerWithBorder />
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
          <DividerWithBorder />
        </Column>
      </Widget>
    </Column>
  );
}
