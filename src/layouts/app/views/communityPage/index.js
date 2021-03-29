import React from 'react';
import { Typography } from '@material-ui/core';
import { CreativeCategories } from '../../../../modules/community';
import {
  Row,
  Column,
  DividerMini,
  DividerWithBorder,
  CardComponent,
} from '../../../../components';
import { FeaturedArticle } from './components/getPosts';

export default function CommunityPage({ history }) {
  return (
    <Row wrap="wrap" j="space-around" a="flex-start">
      <Column w="50%">
        <CardComponent
          styleOverride={{
            marginTop: 10,
            borderRadius: 0,
            paddingBottom: 10,
          }}
        >
          <Typography variant="h6">The Creative Roster</Typography>
          <DividerMini />
          <CreativeCategories history={history} />
        </CardComponent>
      </Column>
      <Column w="50%">
        <CardComponent
          styleOverride={{
            marginTop: 10,
            borderRadius: 0,
          }}
        >
          <Typography variant="h6">Featured Artist</Typography>
          <DividerMini />
          <FeaturedArticle history={history} />
        </CardComponent>
      </Column>
      <DividerWithBorder />
      <Column w="50%">
        <CardComponent
          styleOverride={{
            boxShadow: '5px 5px 10px rgba(0,0,0,0.1)',
            marginTop: 10,
          }}
        >
          <Typography variant="h6">Support us on Patreon</Typography>
          <DividerMini />
          <a href={process.env.REACT_APP_PATREON_LINK}>
            <img
              src={process.env.REACT_APP_PATREON}
              style={{ width: '100%' }}
              alt=""
            />
          </a>
        </CardComponent>
      </Column>
    </Row>
  );
}
