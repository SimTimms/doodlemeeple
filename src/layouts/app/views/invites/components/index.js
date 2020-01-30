import React from 'react';
import Typography from '@material-ui/core/Typography';

export function InviteHeader({ title, project }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Typography gutterBottom variant="h5" component="h2">
        {title}
      </Typography>{' '}
      <Typography gutterBottom variant="h5" color="textSecondary">
        &nbsp; has invited you to
      </Typography>
      <Typography gutterBottom variant="h5" component="h2">
        &nbsp; {project}
      </Typography>{' '}
    </div>
  );
}
