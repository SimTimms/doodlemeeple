import React from 'react';
import {
  FieldBox,
  Column,
  CardComponent,
  DividerMini,
} from '../../../../../../../components';
import autosave from '../../../../../../../utils/autosave';

export default function Section1({ setJob, job, mutation }) {
  const locked = false;

  return (
    <CardComponent locked={locked}>
      <Column a="center" j="center">
        <FieldBox
          title="Project Title"
          value={job.name}
          maxLength={46}
          placeholder="24 Fantasy Images for Card Game"
          onChangeEvent={(e) => {
            autosave(mutation);
            setJob({
              ...job,
              name: e,
            });
          }}
          replaceMode="loose"
          info={`A short descriptive title of the work`}
          warning={`Examples: "24 character images", "Kickstarter campaign management"`}
          size="m"
          multiline={false}
        />
        <DividerMini />
        <FieldBox
          title="Email Address (Optional)"
          value={job.contactEmail}
          maxLength={46}
          placeholder="mycompany@email.com"
          onChangeEvent={(e) => {
            autosave(mutation);
            setJob({
              ...job,
              contactEmail: e,
            });
          }}
          replaceMode="loose"
          info={`You may supply an email address that candidates can contact you on`}
          warning={``}
          size="m"
          multiline={false}
        />
        <DividerMini />
        <FieldBox
          title="Genre/Style of Project"
          value={job.genre}
          maxLength={126}
          placeholder="Fantasy, similar to Studio Ghibli"
          onChangeEvent={(e) => {
            autosave(mutation);
            setJob({
              ...job,
              genre: e,
            });
          }}
          replaceMode="loose"
          info={`Give the main genre (e.g) fantasy, and also some suggestions of style you enjoy based on other existing art.`}
          warning={`Examples: "The art from Studio Ghibli, "the Hellboy Comic", "A how to play style video review of my game". `}
          size="m"
          multiline={false}
        />
      </Column>
    </CardComponent>
  );
}
