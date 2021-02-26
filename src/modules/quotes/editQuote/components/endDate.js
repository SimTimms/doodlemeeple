import React from 'react';
import { FieldBox } from '../../../../components';

export default function EndDate({ contract, setContract }) {
  return !contract ? null : (
    <FieldBox
      value={contract.deadline}
      title="Expected Completion Date"
      maxLength={86}
      onChangeEvent={(e) => {
        setContract({
          ...contract,
          deadline: e,
        });
      }}
      replaceMode="loose"
      placeholder="6 weeks approximately"
      info="The expected completion date. Please be specific about whether this is a rough estimate or a definite start time."
      warning="Example: Between 1st and 7th May 2020"
      size="s"
      multiline={false}
    />
  );
}
