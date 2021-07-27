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
import {
  LatestCreativesWidget,
  JobBoardMiniWidget,
  FeaturedKickstarters,
  FeaturedCreativeHomeWidget,
} from '../../../../widgets';
import { HistoryContext } from '../../../../context';

export default function CommunityPage() {
  return (
    <HistoryContext.Consumer>
      {(history) => (
        <Row wrap="wrap" a="flex-start" j="space-around" w="100%">
          <FeaturedArticle history={history} />
          <Column p={'10px 10px 0 10px'} a="flex-start">
            <Typography style={{ fontSize: '1.2rem', paddingBottom: 10 }}>
              Featured Professionals
            </Typography>
            <Row>
              <FeaturedCreativeHomeWidget />
            </Row>
          </Column>

          <DividerWithBorder />
          <Column>
            <DividerMini />
            <Typography>Latest Profiles</Typography>
            <DividerMini />
            <LatestCreativesWidget history={history} dashboard={true} />
          </Column>
          <DividerWithBorder />
          <Column>
            <DividerMini />
            <Typography>Jobs</Typography>
            <DividerMini />
            <JobBoardMiniWidget history={history} dashboard={true} />
          </Column>
          <DividerWithBorder />
          <Column>
            <DividerMini />
            <Typography>Kickstarters</Typography>
            <DividerMini />
            <FeaturedKickstarters history={history} dashboard={true} />
          </Column>
          <DividerWithBorder />
          <Column w={500}>
            <DividerMini />
            <Typography>Patreon</Typography>
            <DividerMini />
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
      )}
    </HistoryContext.Consumer>
  );
}
