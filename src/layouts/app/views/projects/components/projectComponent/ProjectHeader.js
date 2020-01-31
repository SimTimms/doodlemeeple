import React from 'react';
import Typography from '@material-ui/core/Typography';

export function ProjectHeader({ title, project }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <Typography gutterBottom variant="h5" component="h2">
        {project}
      </Typography>
    </div>
  );
}
