import React from 'react';
import { useStyles } from './styles';
import { LoadIcon, MenuButtonTab, Row } from '../../../components';
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
    <div className={classes.filterRoot}>
      <Row j="center">
        <MenuButtonTab
          title="Visual & Creative"
          onClickEvent={() => {
            setGroup('artist');
          }}
          active={group === 'artist'}
        />
        <MenuButtonTab
          title="Marketing"
          onClickEvent={() => {
            setGroup('marketing');
          }}
          active={group === 'marketing'}
        />
        <MenuButtonTab
          title="Development"
          onClickEvent={() => {
            setGroup('development');
          }}
          active={group === 'development'}
        />
        <MenuButtonTab
          title="Industry"
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
            <MenuButtonTab
              title={TYPE_HELPER(type)}
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
            <MenuButtonTab
              title={TYPE_HELPER(type)}
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
            <MenuButtonTab
              title={TYPE_HELPER(type)}
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
            <MenuButtonTab
              title={TYPE_HELPER(type)}
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
  );
}
