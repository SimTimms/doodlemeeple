import React from 'react';
import { useMediaQuery, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import {
  Column,
  FieldTitleDashboard,
  Paper,
  Row,
  DividerMini,
  DividerWithBorder,
} from '../../../../../../../components';
import TrafficLight from './TrafficLight';
import { ItemPosted, ItemInvites, ItemQuotesIn } from './CheckListItems';

export default function CheckListDash({ job, setTabNbr }) {
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:800px)');

  return (
    <Column w="50%" p={10}>
      <FieldTitleDashboard name="Checklist" inline={false} />
      <Paper p={10}>
        <Column>
          <ItemPosted setTabNbr={setTabNbr} />
          <DividerWithBorder />
          <ItemInvites setTabNbr={setTabNbr} />
          <DividerWithBorder />
          <ItemQuotesIn
            contracts={job.contracts}
            invites={job.invites}
            setTabNbr={setTabNbr}
          />
          <DividerWithBorder />
        </Column>

        <DividerMini />

        <DividerMini />
        <Row j="space-between">
          <Typography>Quote Accepted</Typography>
          <TrafficLight
            status={job.activeContract ? 'green' : 'dull'}
            str={job.activeContract ? 'Yes' : 'No'}
          />
        </Row>
        <DividerMini />
        <Row j="space-between">
          <Typography>Deposit Paid</Typography>
          <TrafficLight
            status={job.submitted === 'paid' ? 'green' : 'dull'}
            str={job.submitted === 'paid' ? 'Yes' : 'No'}
          />
        </Row>
        <DividerMini />
        <Row j="space-between">
          <Typography>Creative Paid</Typography>
          <TrafficLight status="dull" str="No" />
        </Row>
        <DividerMini />
        <Row j="space-between">
          <Typography>Job Complete</Typography>
          <TrafficLight status="dull" str="No" />
        </Row>
      </Paper>
    </Column>
  );
}
