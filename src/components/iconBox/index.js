import React from 'react';
import { Typography, Icon } from '@material-ui/core';

export default function IconBox({ count, icon }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'nowrap',
        background: '#e34d4d',
        padding: 5,
        borderRadius: 5,
      }}
      title={`${count} job${count === 1 ? '' : 's'} linked to this game`}
    >
      <Icon style={{ color: '#fff' }}>{icon}</Icon>
      <Typography variant="body1" component="p" style={{ color: '#fff' }}>
        x {count}
      </Typography>
    </div>
  );
}
