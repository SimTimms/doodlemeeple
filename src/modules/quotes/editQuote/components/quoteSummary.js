import React from 'react';
import { Typography } from '@material-ui/core';
import { Column, DividerMini } from '../../../../components';

export default function QuoteSummary({ contract, setContract }) {
  return !contract ? null : (
    <Column a="flex-start">
      <Typography variant="body1">
        <span>
          <b>Starting:</b>
        </span>
        {` ${contract.startDate}`}
      </Typography>
      <DividerMini />
      <Typography variant="body1">
        <span>
          <b>Cost:</b>
        </span>
        {` ${contract.cost} ${contract.currency}`}
      </Typography>
      <DividerMini />
      <Typography variant="body1">
        <span>
          <b>Details:</b>
        </span>
        {` ${contract.notes}`}
      </Typography>
    </Column>
  );
}
