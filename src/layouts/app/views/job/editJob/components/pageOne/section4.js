import React from 'react';
import {
  FieldBox,
  Column,
  CardComponent,
} from '../../../../../../../components';
import autosave from '../../../../../../../utils/autosave';
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
