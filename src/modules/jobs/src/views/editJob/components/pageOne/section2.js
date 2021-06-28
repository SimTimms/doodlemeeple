import { Typography } from '@material-ui/core';
import React from 'react';
import {
  FieldBox,
  Column,
  CardComponent,
  UnlockInfo,
} from '../../../../../imports/sharedComponents';
import { autosave } from '../../../../../imports/sharedUtils';
import { checkLength, unlock } from '../../unlock';

export default function Section2({ setJob, job, mutation }) {
  const locked =
    !checkLength(job.name, 'name') || !checkLength(job.genre, 'genre');

  return (
    <CardComponent locked={locked} lockedMsg="Project Summary">
      <Column>
        <FieldBox
          title="Project Summary"
          value={job.summary}
          maxLength={1024}
          minLength={30}
          placeholder="24 unique images of monsters and heroes to be delivered by end of July....."
          onChangeEvent={(e) => {
            autosave(mutation);
            setJob({
              ...job,
              summary: e,
            });
          }}
          replaceMode="loose"
          info="In loose but descriptive terms, please explain to your Creatives what you'd like them to do for you. The more information you give them the better, and the more accurate your quote will be. The responses you receive will improve significantly by providing more information. Be passionate! Our Creatives love to get behind someone who is excited about their own project."
          warning=""
          size="m"
          multiline={true}
        />
      </Column>
    </CardComponent>
  );
}
