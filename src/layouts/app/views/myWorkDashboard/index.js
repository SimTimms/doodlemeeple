import React from 'react';
import { Column } from '../../../../components';
import { useStyles } from './styles';
import ActiveWork from './activeWork';

export default function MyWorkDashboard({ menu }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Column w="100%">
        <Column w={600}>
          {menu.workPage.secondaryPage === 'active_work' && <ActiveWork />}
        </Column>
      </Column>
    </div>
  );
}
