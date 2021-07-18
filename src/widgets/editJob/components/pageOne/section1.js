import React from 'react';
import {
  FieldBox,
  Column,
  CardComponent,
  DividerMini,
} from '../../../../components';
import autosave from '../../../../utils/autosave';

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
        <DividerMini />
        <FieldBox
          title="Project Summary"
          value={job.summary}
          maxLength={1024}
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
        <DividerMini />
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
