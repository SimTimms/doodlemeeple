import React from 'react';
import { useStyles } from './styles';
import {
  LoadIcon,
  MenuButtonTab,
  Row,
  Column,
  DividerWithBorder,
} from '../../../components';
import {
  TYPE_HELPER,
  CREATOR_TYPES,
  ARTIST_TYPES,
  MARKETING_TYPES,
  DEVELOPMENT_TYPES,
} from '../../../utils';
import { Typography } from '@material-ui/core';

export default function Filters({
  filter,
  setFilter,
  setCreativeArray,
  setPage,
  setEndPage,
}) {
  const classes = useStyles();
  const [loading] = React.useState(false);

  return loading ? (
    <LoadIcon />
  ) : (
    <div className={classes.filterRoot}>
      <MenuButtonTab
        title={filter[0] ? `${TYPE_HELPER(filter[0])}s` : 'Select'}
        onClickEvent={() => {
          setFilter([]);
        }}
        active={true}
        icon={filter.length > 0 ? 'keyboard_arrow_down' : null}
      />

      <div className={classes.divider}></div>
      {filter.length === 0 && (
        <Row j="flex-start" a="flex-start" wrap="wrap" bg="#fff">
          <Row j="flex-start" a="flex-start">
            <Typography
              variant="h6"
              style={{
                alignSelf: 'center',
                color: '#666',
                marginLeft: 10,
                width: 150,
              }}
            >
              Visual
            </Typography>
            <Row j="flex-start" a="space-around" wrap="wrap">
              {ARTIST_TYPES.map((type) => (
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
          </Row>
          <DividerWithBorder />
          <Row j="flex-start" a="flex-start">
            <Typography
              variant="h6"
              style={{
                alignSelf: 'center',
                color: '#666',
                marginLeft: 10,
                width: 150,
              }}
            >
              Marketing
            </Typography>
            <Row j="flex-start" a="space-around" wrap="wrap">
              {MARKETING_TYPES.map((type) => (
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
          </Row>
          <DividerWithBorder />
          <Row j="flex-start" a="flex-start">
            <Typography
              variant="h6"
              style={{
                alignSelf: 'center',
                color: '#666',
                marginLeft: 10,
                width: 150,
              }}
            >
              Development
            </Typography>
            <Row j="flex-start" a="space-around" wrap="wrap">
              {DEVELOPMENT_TYPES.map((type) => (
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
          </Row>
          <DividerWithBorder />

          <Row j="flex-start" a="flex-start">
            <Typography
              variant="h6"
              style={{
                alignSelf: 'center',
                color: '#666',
                marginLeft: 10,
                width: 150,
              }}
            >
              Creator
            </Typography>
            <Row j="flex-start" a="space-around" wrap="wrap">
              {CREATOR_TYPES.map((type) => (
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
          </Row>
        </Row>
      )}
    </div>
  );
}
