import React from 'react';
import Card from '@material-ui/core/Card';
import { useStyles } from './styles';

export default function CardComponent({ children, ...props }) {
  const { styleOverride } = props;
  const classes = useStyles();

  return (
    <Card className={classes.card} style={styleOverride && styleOverride}>
      {children}
    </Card>
  );
}
