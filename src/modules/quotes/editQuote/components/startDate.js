import React from 'react';
import { FieldBox } from '../../../../components';

export default function StartDate({ contract, setContract }) {
  return !contract ? null : (
    <FieldBox
      value={contract.startDate}
      title="Start Date"
      maxLength={86}
      onChangeEvent={(e) => {
        setContract({
          ...contract,
          startDate: e,
        });
      }}
      replaceMode="loose"
      placeholder="Example: End of June"
      info="The expected date of when you will start this project. Please be specific about whether this is a rough estimate or a definite start time."
      warning="Example: Between 1st and 7th May 2020"
      size="s"
      multiline={false}
    />
  );
}
