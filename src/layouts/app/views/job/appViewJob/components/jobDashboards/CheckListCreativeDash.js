import React from 'react';
import { Typography } from '@material-ui/core';
import {
  Column,
  Divider,
  FieldTitleDashboard,
  Paper,
  Row,
  CreateQuoteButton,
  IconButton,
} from '../../../../../../../components';
import TrafficLight from './TrafficLight';

export default function CheckListCreativeDash({
  job,
  contract,
  setContract,
  setTabNbr,
}) {
  return (
    <Column w="50%" p={10}>
      <FieldTitleDashboard name="Checklist" inline={false} />
      <Paper p={10}>
        <Column>
          <Row j="space-between">
            <Typography>Send a Quote:</Typography>
            {!job.contract ? (
              <IconButton
                title="Quote"
                icon="request_quote"
                color="warning"
                onClickEvent={() => setTabNbr(6)}
              />
            ) : (
              <IconButton
                title=""
                icon="preview"
                color="text-dark"
                onClickEvent={() => setTabNbr(6)}
              />
            )}
          </Row>
        </Column>
      </Paper>
    </Column>
  );
}
