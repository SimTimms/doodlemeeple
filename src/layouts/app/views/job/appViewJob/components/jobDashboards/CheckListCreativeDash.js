import React from 'react';
import {
  Column,
  FieldTitleDashboard,
  Paper,
  DividerWithBorder,
  DividerMini,
} from '../../../../../../../components';
import { ItemQuote, ItemResponse } from './CheckListItems';

export default function CheckListCreativeDash({ contract, setTabNbr }) {
  return (
    <Column w="50%" p={10}>
      <FieldTitleDashboard name="Checklist" inline={false} />
      <Paper p={10}>
        <Column>
          <ItemQuote contract={contract} setTabNbr={setTabNbr} />
          <DividerWithBorder />
          <ItemResponse contract={contract} setTabNbr={setTabNbr} />
          <DividerMini />
        </Column>
      </Paper>
    </Column>
  );
}
