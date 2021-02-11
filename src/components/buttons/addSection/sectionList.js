import React, { useEffect } from 'react';
import { useStyles } from './styles';
import clsx from 'clsx';
import { ArtistCard } from './ArtistCard';
import { Divider, Column, HeaderTwo, MenuButtonShortcut, Row } from '../../';
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
      <Row j="center">
        {userType.creative && (
          <MenuButtonShortcut
            text={{
              name: 'Show All',
              color: '#222',
              icon: 'chevron_right',
              count: 0,
            }}
            onClickEvent={() => {
              setPage(0);
            }}
            active={page === 0}
          />
        )}
        {userType.creator && (
          <MenuButtonShortcut
            text={{
              name: 'Project Creators',
              color: '#222',
              icon: 'work',
              count: 0,
            }}
            onClickEvent={() => {
              setPage(1);
            }}
            active={page === 1}
          />
        )}
        {userType.creative && (
          <MenuButtonShortcut
            text={{
              name: 'Creative',
              color: '#222',
              icon: 'chevron_right',
              count: 0,
            }}
            onClickEvent={() => {
              setPage(2);
            }}
            active={page === 2}
          />
        )}
        {userType.creative && (
          <MenuButtonShortcut
            text={{
              name: 'Marketing/Campaign',
              color: '#222',
              icon: 'chevron_right',
              count: 0,
            }}
            onClickEvent={() => {
              setPage(3);
            }}
            active={page === 3}
          />
        )}
        {userType.creative && (
          <MenuButtonShortcut
            text={{
              name: 'Development',
              color: '#222',
              icon: 'chevron_right',
              count: 0,
            }}
            onClickEvent={() => {
              setPage(4);
            }}
            active={page === 4}
          />
        )}
      </Row>
      <Column>
        {(page === 0 || page === 1) && userType.creator && (
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
