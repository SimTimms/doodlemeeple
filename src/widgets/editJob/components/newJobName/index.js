import React from 'react';
import { FieldBox, Column } from '../../../../components';

export default function NewJobName({ setJob, job }) {
  return (
    <Column>
      <FieldBox
        title="Project Title"
        value={job.name}
        maxLength={86}
        minLength={10}
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
      <FieldBox
        title="Project Description"
        value={job.summary}
        maxLength={2086}
        minLength={10}
        placeholder="I need 24 images that will be displayed on cards size 600 x 300px..."
        onChangeEvent={(e) => {
          setJob({
            ...job,
            summary: e,
          });
        }}
        replaceMode="loose"
        info="Give the job a title that describes the work."
        warning="Example: 24 full colour fantasy images for cards"
        size="s"
        multiline={false}
      />
    </Column>
  );
}
