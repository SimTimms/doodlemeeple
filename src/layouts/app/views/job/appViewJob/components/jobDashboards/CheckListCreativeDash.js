import React from 'react';
import { Typography } from '@material-ui/core';
import {
  Column,
  FieldTitleDashboard,
  Paper,
  Row,
  IconButton,
  DividerMini,
} from '../../../../../../../components';

export default function CheckListCreativeDash({ job, setTabNbr }) {
  return (
    <Column w="50%" p={10}>
      <FieldTitleDashboard name="Checklist" inline={false} />
      <Paper p={10}>
        <Column>
          <Row j="space-between">
            <Typography>
              My quote:{' '}
              <b>
                {!job.contract
                  ? 'None'
                  : job.contract.status === null
                  ? 'Draft'
                  : job.contract.status === 'submitted' && 'Submitted'}
              </b>
            </Typography>
            {!job.contract ? (
              <IconButton
                title="Create"
                icon="request_quote"
                color="warning"
                styleOverride={{ margin: 0 }}
                onClickEvent={() => setTabNbr(6)}
              />
            ) : job.contract.status === null ? (
              <IconButton
                title="Submit"
                icon="preview"
                color="warning"
                styleOverride={{ margin: 0 }}
                onClickEvent={() => setTabNbr(6)}
              />
            ) : (
              job.contract.status === 'submitted' && (
                <IconButton
                  title="Retract"
                  icon="close"
                  color="text-dark"
                  styleOverride={{ margin: 0 }}
                  onClickEvent={() => setTabNbr(6)}
                />
              )
            )}
          </Row>
          <Row j="space-between">
            <Typography>
              Response:
              <b> Waiting</b>
            </Typography>
          </Row>
          <DividerMini />
        </Column>
      </Paper>
    </Column>
  );
}
