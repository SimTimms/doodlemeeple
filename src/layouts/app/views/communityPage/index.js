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
import { LatestCreativesWidget, JobBoardMiniWidget } from '../../../../widgets';

export default function CommunityPage({ history }) {
  return (
    <Row wrap="wrap" j="space-around" a="flex-start">
      <Row wrap="wrap" j="space-around" a="flex-start">
        <Column w="50%">
          <CardComponent
            styleOverride={{
              borderRadius: 0,
              paddingBottom: 10,
            }}
          >
            <CreativeCategories history={history} />
          </CardComponent>
        </Column>
        <Column w="50%" h="100%" p="10px 0 10px 0">
          <FeaturedArticle history={history} />
        </Column>
      </Row>
      <Row wrap="wrap" j="space-around" a="flex-start">
        <Typography
          variant="h6"
          style={{ marginTop: 20, width: '100%', paddingLeft: 30 }}
          align="left"
        >
          Newest Profiles
        </Typography>
        <LatestCreativesWidget history={history} />
      </Row>
      <Row wrap="wrap" j="space-around" a="flex-start">
        <Typography
          variant="h6"
          style={{ marginTop: 20, width: '100%', paddingLeft: 30 }}
        >
          Jobs
        </Typography>
        <JobBoardMiniWidget history={history} />
      </Row>

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
