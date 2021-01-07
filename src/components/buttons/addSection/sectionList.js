import React, { useEffect } from 'react';
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
  userType,
  setDisplay,
  display,
}) {
  const [page, setPage] = React.useState(0);
  const classes = useStyles();

  useEffect(() => {
    setPage(userType.creator ? 1 : 0);
  }, [userType]);

  return (
    <div
      className={clsx({
        [classes.skillWrapper]: true,
        [classes.skillWrapperOpen]: display,
      })}
    >
      <Divider />
      <Column>
        <Divider />
        {(page === 0 || page === 1) && (
          <Column>
            <HeaderTwo str="Project Creators" />
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
          </Column>
        )}
        {(page === 0 || page === 2) && (
          <Column>
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
          </Column>
        )}
        {(page === 0 || page === 3) && (
          <Column>
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
          </Column>
        )}
        {(page === 0 || page === 4) && (
          <Column>
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
        )}
      </Column>
    </div>
  );
}
