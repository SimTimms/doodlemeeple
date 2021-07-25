import React from 'react';
import { Typography } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

import { CreativeCategories } from '../../../../modules/community';
import {
  Row,
  Column,
  DividerMini,
  DividerWithBorder,
  CardComponent,
  TaskMiniComponent,
  TabPage,
  IconButton,
} from '../../../../components';
import { FeaturedArticle } from './components/getPosts';
import {
  LatestCreativesWidget,
  JobBoardMiniWidget,
  FeaturedKickstarters,
} from '../../../../widgets';
import { HistoryContext } from '../../../../context';
import menuArray from '../../../menuArray';

export default function CommunityPage() {
  return (
    <HistoryContext.Consumer>
      {(history) => (
        <TabPage
          title="Home"
          topMenu={
            menuArray(history, {}).filter(
              (item) => item.machineName === 'community'
            )[0].postsMenu
          }
          menu={null}
        >
          <Row wrap="wrap" a="flex-start" j="space-around" w="100%">
            <TaskMiniComponent history={history} />
            <Row j="space-around" a="flex-start">
              <Column w="45%">
                <DividerMini />

                <Typography>Categories</Typography>
                <DividerMini />
                <DividerMini />
                <CreativeCategories history={history} />
              </Column>
              <Column w="45%">
                <DividerMini />
                <Typography>Featured</Typography>
                <DividerMini />
                <DividerMini />
                <FeaturedArticle history={history} />
              </Column>
            </Row>
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
        </TabPage>
      )}
    </HistoryContext.Consumer>
  );
}
