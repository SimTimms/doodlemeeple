import React from 'react';
import {
  FieldBox,
  Column,
  CardComponent,
} from '../../../../../../../components';
import autosave from '../../../../../../../utils/autosave';
import { checkLength } from '../../unlock';

export default function Section3({ setJob, job, mutation }) {
  const locked =
    !checkLength(job.name, 'name') ||
    !checkLength(job.genre, 'genre') ||
    !checkLength(job.summary, 'summary') ||
    !checkLength(job.creativeSummary, 'creativeSummary') ||
    job.keywords.length === 0;

  return (
    <CardComponent locked={locked}>
      <Column>
        <FieldBox
          title="Scope"
          value={job.scope}
          maxLength={1092}
          placeholder="Each image will take up the top half of a poker sized playing card....."
          onChangeEvent={(e) => {
            autosave(mutation);
            setJob({
              ...job,
              scope: e,
            });
          }}
          replaceMode="loose"
          info={`Depending on the type of Creative, you're looking to hire, it's great to get a handle on what you need. Explain what size or aspect ratio you need images/videos. Explain what output file types you need. Sometimes just explaining what the art is used for is enough, `}
          warning={`Example: "each image will take up the top half of a poker sized playing card", "this is for my Kickstarter introduction video", "I need blind testing on my almost finished rules" can help. Try to give as much information as you can."`}
          size="s"
          multiline={true}
        />
        <FieldBox
          title="Mechanics"
          value={job.mechanics}
          maxLength={1092}
          placeholder="A little introduction to the mechanics of your game....."
          onChangeEvent={(e) => {
            autosave(mutation);
            setJob({
              ...job,
              mechanics: e,
            });
          }}
          replaceMode="loose"
          info={`Sometimes it helps Creatives to understand what you need when you add some context. For example Graphic Designers can actually make your game easier to learn, if they are on the same wavelength as you. You can discuss this more once a contract has been agreed.`}
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
