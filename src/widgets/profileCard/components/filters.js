import React from 'react';
import { Slide } from '@material-ui/core';
import { useStyles } from './styles';
import { LoadIcon, MenuButtonShortcut, Row } from '../../../components';
import {
  TYPE_HELPER,
  CREATOR_TYPES,
  ARTIST_TYPES,
  MARKETING_TYPES,
  DEVELOPMENT_TYPES,
} from '../../../utils';

export default function Filters({
  filter,
  setFilter,
  setCreativeArray,
  group,
  setGroup,
  setPage,
  setEndPage,
}) {
  const classes = useStyles();
  const [loading] = React.useState(false);

  return loading ? (
    <LoadIcon />
  ) : (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.filterRoot}>
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
        <div className={classes.divider}></div>
        <Row j="center">
          {group === 'artist' &&
            ARTIST_TYPES.map((type) => (
              <MenuButtonShortcut
                text={{
                  name: TYPE_HELPER(type),
                  color: '#222',
                  icon: null,
                  count: 0,
                }}
                onClickEvent={() => {
                  setFilter([type]);
                  type !== filter[0] && setCreativeArray([]);
                  setPage(0);
                  setEndPage(false);
                }}
                active={filter[0] === type}
              />
            ))}
          {group === 'marketing' &&
            MARKETING_TYPES.map((type) => (
              <MenuButtonShortcut
                text={{
                  name: TYPE_HELPER(type),
                  color: '#222',
                  icon: null,
                  count: 0,
                }}
                onClickEvent={() => {
                  setFilter([type]);
                  type !== filter[0] && setCreativeArray([]);
                  setPage(0);
                  setEndPage(false);
                }}
                active={filter[0] === type}
              />
            ))}
          {group === 'development' &&
            DEVELOPMENT_TYPES.map((type) => (
              <MenuButtonShortcut
                text={{
                  name: TYPE_HELPER(type),
                  color: '#222',
                  icon: null,
                  count: 0,
                }}
                onClickEvent={() => {
                  setFilter([type]);
                  type !== filter[0] && setCreativeArray([]);
                  setPage(0);
                  setEndPage(false);
                }}
                active={filter[0] === type}
              />
            ))}
          {group === 'industry' &&
            CREATOR_TYPES.map((type) => (
              <MenuButtonShortcut
                text={{
                  name: TYPE_HELPER(type),
                  color: '#222',
                  icon: null,
                  count: 0,
                }}
                onClickEvent={() => {
                  setFilter([type]);
                  type !== filter[0] && setCreativeArray([]);
                  setPage(0);
                  setEndPage(false);
                }}
                active={filter[0] === type}
              />
            ))}
        </Row>
      </div>
    </Slide>
  );
}
