import React from 'react';
import { useStyles } from './styles';
import { QuoteOutWidget } from '../../../../widgets';

export default function QuoteListPage({ onClickEvent }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <QuoteOutWidget
        onClickEvent={onClickEvent}
        status={['draft', '', 'submitted']}
      />
    </div>
  );
}
