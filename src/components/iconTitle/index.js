import React from 'react';
import { Icon } from '@material-ui/core';

export default function IconTitle({ title, icon }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'space-between',
        marginRight: 5,
      }}
    >
      <Icon
        style={{
          marginRight: 5,
        }}
      >
        {icon}
      </Icon>
      {title}
    </div>
  );
}
