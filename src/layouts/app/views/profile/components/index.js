import React from 'react';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

export function ProfileHeader({ title }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Typography gutterBottom variant="h5" component="h2">
        {title}
      </Typography>
      <Icon style={{ fontSize: 20, color: '#ddd' }}>edit</Icon>
    </div>
  );
}
