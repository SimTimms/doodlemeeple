import React from 'react';
import { FieldBox } from '../../../../components';

export default function Notes({ contract, setContract }) {
  return !contract ? null : (
    <FieldBox
      value={contract.notes}
      title="Additional Terms"
      maxLength={1024}
      onChangeEvent={(e) => {
        setContract({ ...contract, notes: e });
      }}
      replaceMode="loose"
      placeholder="Example: Work will begin upon payment of the deposit"
      info="Add more information to your quote, show you understand the project and what's required by tailoring the content to this specific job"
      warning=""
      size="s"
      multiline={true}
    />
  );
}
