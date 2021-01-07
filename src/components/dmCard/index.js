import React from 'react';
import { Card } from '@material-ui/core';
import { useStyles } from './styles';

export default function DMCard({ children, ...props }) {
  const classes = useStyles();
  const { p } = props;
  return (
    <Card className={classes.card} style={{ padding: p ? p : 0 }}>
      {children}
    </Card>
  );
}
