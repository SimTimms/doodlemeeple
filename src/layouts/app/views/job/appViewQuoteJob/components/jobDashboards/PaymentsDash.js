import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import { useStyles } from './styles';
import { Column, FieldTitleDashboard } from '../../../../../../../components';

export default function PaymentsDash() {
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:800px)');

  return (
    <Column w="50%">
      <FieldTitleDashboard name="Invites" inline={false} />
    </Column>
  );
}
