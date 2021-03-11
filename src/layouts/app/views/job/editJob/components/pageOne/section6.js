import React from 'react';
import {
  FieldBox,
  Column,
  CardComponent,
} from '../../../../../../../components';
import autosave from '../../../../../../../utils/autosave';
import { checkLength } from '../../unlock';

export default function Section6({ setJob, job, mutation }) {
  const locked =
    !checkLength(job.name, 'name') ||
    !checkLength(job.genre, 'genre') ||
    !checkLength(job.summary, 'summary') ||
    !checkLength(job.creativeSummary, 'creativeSummary') ||
    job.keywords.length === 0;

  return (
    <CardComponent locked={locked} lockedMsg="Timeframe & budget">
      <Column a="center" j="center">
        <FieldBox
          title="Timeframe"
          value={job.timeframe}
          maxLength={146}
          placeholder="Let your Creative know if this is a time sensitive project..."
          onChangeEvent={(e) => {
            autosave(mutation);
            setJob({
              ...job,
              timeframe: e,
            });
          }}
          replaceMode="loose"
          info={`Let your Creative know if this is a time sensitive project, or if you're open to fitting into their schedule. This will help the Creative put a reasonable deadline date on their quote.`}
          warning={``}
          size="s"
          multiline={false}
        />
        <FieldBox
          title="Budget"
          value={job.budget}
          maxLength={126}
          placeholder="Give an indication of your budget "
          onChangeEvent={(e) => {
            autosave(mutation);
            setJob({
              ...job,
              budget: e,
            });
          }}
          replaceMode="loose"
          info={`You may like to give an indication of your budget to help your Creative decide if they can work within your means. Some Creatives are able to adapt, and can adjust their processes or just give you an idea of what they can provide for your budget.`}
          warning={``}
          size="s"
          multiline={false}
        />
      </Column>
    </CardComponent>
  );
}
