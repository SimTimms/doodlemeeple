import React from 'react';
import {
  FieldBox,
  Column,
  CardComponent,
} from '../../../../../../../components';
import autosave from '../../../../../../../utils/autosave';
import { checkLength } from '../../unlock';

export default function Section7({ setJob, job, mutation }) {
  const locked =
    !checkLength(job.name, 'name') ||
    !checkLength(job.genre, 'genre') ||
    !checkLength(job.summary, 'summary') ||
    !checkLength(job.creativeSummary, 'creativeSummary') ||
    job.keywords.length === 0;
  return (
    <CardComponent locked={locked} lockedMsg="More Info">
      <Column>
        <FieldBox
          title="Notes "
          value={job.extra}
          maxLength={1024}
          placeholder="You may like to add some extra requirements here......"
          onChangeEvent={(e) => {
            autosave(mutation);
            setJob({
              ...job,
              extra: e,
            });
          }}
          replaceMode="loose"
          info="You may like to add some extra requirements here. Please be aware that by asking for source files and not just the final deliverable, your Creative may increase their fees."
          warning=""
          size="s"
          multiline={true}
        />
        <FieldBox
          title="Video Message"
          value={job.showreel}
          maxLength={200}
          placeholder="https://www.youtube.com/watch?v=zdDox2o7G1g"
          onChangeEvent={(e) => {
            autosave(mutation);
            setJob({
              ...job,
              showreel: e,
            });
          }}
          replaceMode="loose"
          info="Add a video message to describe the project in more detail"
          warning=""
          size="s"
          multiline={false}
        />
      </Column>
    </CardComponent>
  );
}
