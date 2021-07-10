import React from 'react';
import { Typography } from '@material-ui/core';
import { Column, IconButton } from '../';

export default function ProjectComponentDash({
  jobName,
  jobSummary,
  setTabNbr,
}) {
  return (
    <Column j="space-between" a="center">
      <Column j="space-between" a="center">
        <Typography variant="body1">{jobName}</Typography>
        <Typography variant="body1" style={{ fontSize: 12 }}>
          {jobSummary}
        </Typography>
        <IconButton
          icon="work"
          title="Project Details"
          onClickEvent={() => setTabNbr(1)}
          active={false}
          styleOverride={{ width: '100%' }}
        />
      </Column>
    </Column>
  );
}
