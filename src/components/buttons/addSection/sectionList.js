import React from 'react';
import { useStyles } from './styles';
import clsx from 'clsx';
import { ArtistCard } from './ArtistCard';
import { Divider, Column, HeaderTwo } from '../../';
import {
  ARTIST_TYPES,
  MARKETING_TYPES,
  DEVELOPMENT_TYPES,
  CREATOR_TYPES,
} from '../../../utils';

export default function SectionList({
  setSections,
  sections,
  setDisplay,
  display,
}) {
  const classes = useStyles();

  return (
    <div
      className={clsx({
        [classes.skillWrapper]: true,
        [classes.skillWrapperOpen]: display,
      })}
    >
      <Column>
        <HeaderTwo str="Industry" />
        <Divider />
        {CREATOR_TYPES.map((type, index) => (
          <ArtistCard
            setDisplay={setDisplay}
            sections={sections}
            setSections={setSections}
            type={type}
            key={`creator_${index}`}
          />
        ))}
        <Divider />

        <HeaderTwo str="Visual Art and Creative Writing" />
        <Divider />
        {ARTIST_TYPES.map((type, index) => (
          <ArtistCard
            setDisplay={setDisplay}
            sections={sections}
            setSections={setSections}
            type={type}
            key={`artist_${index}`}
          />
        ))}
        <Divider />

        <HeaderTwo str="Marketing and Campaign Management" />
        <Divider />
        {MARKETING_TYPES.map((type, index) => (
          <ArtistCard
            setDisplay={setDisplay}
            sections={sections}
            setSections={setSections}
            type={type}
            key={`marketing_${index}`}
          />
        ))}
        <Divider />

        <HeaderTwo str="Development" />
        <Divider />
        {DEVELOPMENT_TYPES.map((type, index) => (
          <ArtistCard
            setDisplay={setDisplay}
            sections={sections}
            setSections={setSections}
            type={type}
            key={`dev_${index}`}
          />
        ))}

        <Divider />
      </Column>
    </div>
  );
}
