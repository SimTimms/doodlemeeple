import React from 'react';
import { FieldBox, Column, DividerMini } from '../../../../components';

export default function Cost({ contract, setContract }) {
  return !contract ? null : (
    <Column>
      <FieldBox
        value={contract.cost}
        title="Total Cost"
        maxLength={5}
        onChangeEvent={(e) => {
          setContract({ ...contract, cost: e });
        }}
        replaceMode="number"
        placeholder="Example: 1050"
        info="The total amount you will be paid upon completion of this job."
        warning="Example: 1050"
        size="s"
        multiline={false}
      />
      <DividerMini />
      <FieldBox
        value={contract.currency}
        title="Currency"
        maxLength={0}
        onChangeEvent={(e) => {
          setContract({ ...contract, currency: e });
        }}
        replaceMode="currency"
        placeholder="Example: GBP"
        info=""
        warning=""
        size="s"
        multiline={false}
      />
    </Column>
  );
}
