import React from 'react';
import { Typography } from '@material-ui/core';
import { Column, IconButton } from '../';

export default function ProjectComponentDash({ jobName, jobSummary }) {
  return (
    <Column j="space-between" a="center">
      <Column j="space-between" a="center">
        <Typography variant="body1">{jobName}</Typography>
        <Typography variant="body1" style={{ fontSize: 12 }}>
          {jobSummary}
        </Typography>
      </Column>
    </Column>
  );
}
