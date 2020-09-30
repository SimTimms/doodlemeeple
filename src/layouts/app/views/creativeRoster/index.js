import React from 'react';
import { Slide } from '@material-ui/core';
import { useStyles } from './styles';
import { LoadIcon, MenuButtonShortcut, Row } from '../../../../components';
import { Creatives } from './components';
import { TYPE_HELPER } from '../../../../utils';

export default function CreativeRoster({ theme, history, favourites }) {
  const classes = useStyles();
  const [loading] = React.useState(false);
  const [filter, setFilter] = React.useState(['artist']);
  const [group, setGroup] = React.useState('artist');
  const artistTypes = [
    'graphic-artist',
    '3d-artist',
    'artist',
    'world-builder',
  ];
  const marketingTypes = [
    'reviewer',
    'marketing',
    'voice-actor',
    'video-editor',
    'social',
  ];
  const developmentTypes = [
    'rulebook-editor',
    'games-developer',
    'proof-reader',
    'translator',
    'play-tester',
  ];
  return loading ? (
    <LoadIcon />
  ) : (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <Row j="center">
          <MenuButtonShortcut
            text={{
              name: 'Visual & Creative',
              color: '#222',
              icon: 'chevron_right',
              count: 0,
            }}
            onClickEvent={() => {
              setGroup('artist');
            }}
            active={group === 'artist'}
          />
          <MenuButtonShortcut
            text={{
              name: 'Marketing',
              color: '#222',
              icon: 'chevron_right',
              count: 0,
            }}
            onClickEvent={() => {
              setGroup('marketing');
            }}
            active={group === 'marketing'}
          />
          <MenuButtonShortcut
            text={{
              name: 'Development',
              color: '#222',
              icon: 'chevron_right',
              count: 0,
            }}
            onClickEvent={() => {
              setGroup('development');
            }}
            active={group === 'development'}
          />
        </Row>
        <Row j="center">
          {group === 'artist' &&
            artistTypes.map((type) => (
              <MenuButtonShortcut
                text={{
                  name: TYPE_HELPER(type),
                  color: '#222',
                  icon: 'chevron_right',
                  count: 0,
                }}
                onClickEvent={() => {
                  setFilter([type]);
                }}
                active={filter[0] === type}
              />
            ))}
          {group === 'marketing' &&
            marketingTypes.map((type) => (
              <MenuButtonShortcut
                text={{
                  name: TYPE_HELPER(type),
                  color: '#222',
                  icon: 'chevron_right',
                  count: 0,
                }}
                onClickEvent={() => {
                  setFilter([type]);
                }}
                active={filter[0] === type}
              />
            ))}
          {group === 'development' &&
            developmentTypes.map((type) => (
              <MenuButtonShortcut
                text={{
                  name: TYPE_HELPER(type),
                  color: '#222',
                  icon: 'chevron_right',
                  count: 0,
                }}
                onClickEvent={() => {
                  setFilter([type]);
                }}
                active={filter[0] === type}
              />
            ))}
        </Row>
        <div style={{ width: '100%', marginTop: 50 }}>
          <Creatives
            history={history}
            favourites={favourites}
            filter={filter}
          />
        </div>
      </div>
    </Slide>
  );
}
