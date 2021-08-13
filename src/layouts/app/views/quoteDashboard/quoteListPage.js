import React from 'react';
import { useStyles } from './styles';
import { QuoteOutWidget } from '../../../../widgets';

export default function QuoteListPage({ menu }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <QuoteOutWidget menu={menu} />
    </div>
  );
}
