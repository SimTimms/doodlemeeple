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
import {
  ItemPosted,
  ItemInvites,
  ItemQuotesIn,
  ItemCreativePaid,
  ItemLeaveReview,
  ItemQuoteAccepted,
  ItemQuotePaid,
} from './CheckListItems';

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
          <ItemQuoteAccepted accepted={job.submitted} setTabNbr={setTabNbr} />
          <DividerWithBorder />
          <ItemQuotePaid paid={job.submitted} setTabNbr={setTabNbr} />
          <DividerWithBorder />
          <ItemCreativePaid paid={false} setTabNbr={setTabNbr} />
          <DividerWithBorder />
          <ItemLeaveReview paid={false} setTabNbr={setTabNbr} />
        </Column>
      </Paper>
    </Column>
  );
}
