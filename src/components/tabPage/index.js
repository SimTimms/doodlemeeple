import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';
import { DividerWithBorder, Column, Row } from '../';

export default function TabPage({ title, menu, children }) {
  const classes = useStyles();
  return (
    <Column>
      <Typography className={classes.tabTitle}>{title}</Typography>
      <Row mt={10}>{menu}</Row>
      <DividerWithBorder />
      {children}
    </Column>
  );
}
