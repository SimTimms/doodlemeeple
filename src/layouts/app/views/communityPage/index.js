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
import dmPatreon from '../../../../assets/dmPatreon.jpg';

export default function CommunityPage({ history }) {
  return (
    <Row wrap="wrap" j="space-around">
      <Column w="40%">
        <CardComponent
          styleOverride={{
            boxShadow: '5px 5px 10px rgba(0,0,0,0.1)',
            marginTop: 10,
          }}
        >
          <Typography variant="h6">The Creative Roster</Typography>
          <DividerMini />
          <CreativeCategories history={history} />
        </CardComponent>
      </Column>
      <Column w="40%">
        <CardComponent
          styleOverride={{
            boxShadow: '5px 5px 10px rgba(0,0,0,0.1)',
            marginTop: 10,
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
          <a href="https://www.patreon.com/doodlemeeple">
            <img src={dmPatreon} style={{ width: '100%' }} />
          </a>
        </CardComponent>
      </Column>
    </Row>
  );
}
