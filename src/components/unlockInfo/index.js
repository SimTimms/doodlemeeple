import React from 'react';
import { Icon, Typography } from '@material-ui/core';

import { useStyles } from './styles';

export default function UnlockInfo({ str }) {
  const classes = useStyles();
  return (
    <div className={classes.more}>
      <Icon style={{ marginRight: 10, fontSize: 12 }}>lock</Icon>
      <Typography>{str}</Typography>
      <Icon style={{ marginLeft: 10, fontSize: 12 }}>lock</Icon>
    </div>
  );
}
