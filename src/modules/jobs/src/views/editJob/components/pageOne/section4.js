import React from 'react';
import {
  FieldBox,
  Column,
  CardComponent,
} from '../../../../../imports/sharedComponents';
import { autosave } from '../../../../../imports/sharedUtils';
import { checkLength } from '../../unlock';

export default function Section4({ setJob, job, mutation }) {
  const locked =
    !checkLength(job.name, 'name') ||
    !checkLength(job.genre, 'genre') ||
    !checkLength(job.summary, 'summary');

  return (
    <CardComponent locked={locked} lockedMsg="Creative Summary">
      <Column a="center" j="center">
        <FieldBox
          title="Creative Summary"
          value={job.creativeSummary}
          maxLength={500}
          minLength={20}
          placeholder="A digital artist with a focus on high fantasy...."
          onChangeEvent={(e) => {
            autosave(mutation);
            setJob({
              ...job,
              creativeSummary: e,
            });
          }}
          replaceMode="loose"
          info="Describe your ideal creative, what art style you're looking for, where they should be based...."
          warning=""
          size="m"
          multiline={true}
        />
      </Column>
    </CardComponent>
  );
}
