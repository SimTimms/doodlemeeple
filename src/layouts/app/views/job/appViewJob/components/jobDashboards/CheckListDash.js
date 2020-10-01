import React from 'react';
import { useMediaQuery, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import {
  Column,
  FieldTitleDashboard,
  Paper,
  Row,
  DividerMini,
} from '../../../../../../../components';
import TrafficLight from './TrafficLight';

export default function CheckListDash({ job }) {
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:800px)');

  return (
    <Column w="50%" p={10}>
      <FieldTitleDashboard name="Checklist" inline={false} />
      <Paper p={10}>
        <Row j="space-between">
          <Typography>Job Posted</Typography>
          <TrafficLight status="green" str="Yes" />
        </Row>
        <DividerMini />
        <Row j="space-between">
          <Typography>Invites Sent</Typography>
          <TrafficLight
            status={job.invites.length > 0 ? 'green' : 'dull'}
            str={job.invites.length > 0 ? 'Yes' : 'No'}
          />
        </Row>
        <DividerMini />
        <Row j="space-between">
          <Typography>Quotes Received</Typography>
          <TrafficLight
            status={
              job.contracts.length === job.invites.length
                ? 'green'
                : job.contracts.length > 0
                ? 'dull'
                : 'dull'
            }
            str={
              job.contracts.length === job.invites.length
                ? 'Yes'
                : job.contracts.length > 0
                ? 'Some'
                : 'No'
            }
          />
        </Row>
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
