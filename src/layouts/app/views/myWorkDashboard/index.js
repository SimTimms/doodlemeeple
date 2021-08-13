import React from 'react';
import { Column, DividerMini } from '../../../../components';
import { useStyles } from './styles';
import ActiveWork from './activeWork';

export default function MyWorkDashboard({ pageValues }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Column w="100%">
        <Column w={600}>
          <DividerMini />
          {pageValues.secondaryPage === 'active_work' && <ActiveWork />}
        </Column>
      </Column>
    </div>
  );
}
