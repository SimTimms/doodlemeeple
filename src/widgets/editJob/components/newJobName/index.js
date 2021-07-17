import React from 'react';
import { FieldBox } from '../../../../components';

export default function NewJobName({ setJob, job }) {
  return (
    <FieldBox
      title="Project Title"
      value={job.name}
      maxLength={86}
      placeholder="24 full colour images..."
      onChangeEvent={(e) => {
        setJob({
          ...job,
          name: e,
        });
      }}
      replaceMode="loose"
      info="Give the job a title that describes the work."
      warning="Example: 24 full colour fantasy images for cards"
      size="s"
      multiline={false}
    />
  );
}
