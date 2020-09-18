import React from 'react';
import Card from '@material-ui/core/Card';
import { useStyles } from './styles';
import clsx from 'clsx';

export default function CardComponent({ children, ...props }) {
  const { styleOverride, onClickEvent } = props;
  const classes = useStyles();

  return (
    <Card
      className={clsx({
        [classes.card]: true,
        [classes.clickable]: onClickEvent,
      })}
      style={styleOverride && styleOverride}
      onClick={() => (onClickEvent ? onClickEvent() : () => {})}
    >
      {children}
    </Card>
  );
}
