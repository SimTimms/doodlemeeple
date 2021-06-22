import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { Slide } from '@material-ui/core';
import { useStyles } from './styles';
import {
  LoadIcon,
  MenuButtonShortcut,
  Row,
  CreativeRosterProfiles,
} from '../../../../components';
import { TYPE_HELPER } from '../../../../utils';
import { FAVOURITES } from '../../../../data/queries';

export default function CreativeRosterHome({ history, groupIn }) {
  const classes = useStyles();
  const [filter, setFilter] = React.useState([]);
  const [group, setGroup] = React.useState(null);
  const [favourites, setFavourites] = React.useState([]);
  const [query, { loading }] = useQuery(FAVOURITES, {
    onCompleted({ profile }) {
      setFavourites(
        profile.favourites.filter((fav) => fav.receiver && fav.receiver._id)
      );
    },
  });
  useEffect(() => {
    query();
  }, [query]);

  useEffect(() => {
    setFilter(groupIn ? groupIn : 'artist');
  }, [groupIn]);

  const artistTypes = [
    'graphic-artist',
    '3d-artist',
    'artist',
    'world-builder',
    'mini-painter',
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
    'designer',
    'translator',
    'play-tester',
  ];
  const industryTypes = ['creator', 'manufacturer', 'publisher'];
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
              icon: null,
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
              icon: null,
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
              icon: null,
              count: 0,
            }}
            onClickEvent={() => {
              setGroup('development');
            }}
            active={group === 'development'}
          />
          <MenuButtonShortcut
            text={{
              name: 'Industry',
              color: '#222',
              icon: null,
              count: 0,
            }}
            onClickEvent={() => {
              setGroup('industry');
            }}
            active={group === 'industry'}
          />
        </Row>
        <Row j="center">
          {group === 'artist' &&
            artistTypes.map((type) => (
              <MenuButtonShortcut
                text={{
                  name: TYPE_HELPER(type),
                  color: '#222',
                  icon: null,
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
                  icon: null,
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
                  icon: null,
                  count: 0,
                }}
                onClickEvent={() => {
                  setFilter([type]);
                }}
                active={filter[0] === type}
              />
            ))}
          {group === 'industry' &&
            industryTypes.map((type) => (
              <MenuButtonShortcut
                text={{
                  name: TYPE_HELPER(type),
                  color: '#222',
                  icon: null,
                  count: 0,
                }}
                onClickEvent={() => {
                  setFilter([type]);
                }}
                active={filter[0] === type}
              />
            ))}
        </Row>
        {filter.length > 0 && (
          <CreativeRosterProfiles
            history={history}
            favourites={favourites}
            filter={filter}
          />
        )}
      </div>
    </Slide>
  );
}
