import React from 'react';
import { Slide, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { IconButton, ColumnWrapper, Column, Row } from '../';

export default function InviteComponentDash({ invite }) {
  const classes = useStyles();
  return (
    <div style={{ width: '100%' }}>
      <Row j="flex-start" a="center">
        <Row j="flex-start" a="center">
          <div
            style={{
              backgroundImage: `url(${invite.receiver.profileImg})`,
            }}
            className={classes.profileThumb}
          ></div>
          <Typography>
            {invite.receiver.name} {invite.status ? `(${invite.status})` : ''}
          </Typography>
        </Row>
      </Row>
    </div>
  );
}
