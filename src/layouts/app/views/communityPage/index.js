import React from 'react';
import { useStyles } from './styles';
import { Typography } from '@material-ui/core';
import { Row, Column, DividerWithBorder } from '../../../../components';
import { FeaturedArticle } from './components/getPosts';
import {
  LatestCreativesWidget,
  JobBoardMiniWidget,
  FeaturedKickstarters,
  FeaturedCreativeHomeWidget,
  PublicPostsWidget,
} from '../../../../widgets';
import { HistoryContext } from '../../../../context';
import SubTitle from './subTitle';

export default function CommunityPage() {
  const classes = useStyles();

  return (
    <HistoryContext.Consumer>
      {(history) => (
        <Row wrap="wrap" a="flex-start" j="space-around" w="100%">
          <Column a="flex-start" w="100%">
            <SubTitle
              title="Articles"
              menuStr="All Posts"
              onClickEvent={() => {}}
            />
            <FeaturedArticle history={history} />
          </Column>
          <Column a="flex-start" w="100%">
            <SubTitle
              title="Community Posts"
              menuStr="View All"
              onClickEvent={() => {}}
            />
            <Row w="100%" wrap="flex-wrap">
              <PublicPostsWidget />
            </Row>
          </Column>

          <Column a="flex-start" w="100%">
            <SubTitle
              title="Featured Professionals"
              menuStr="View All"
              onClickEvent={() => {}}
            />
            <Typography className={classes.summary}>
              The best profiles chosen by us this week
            </Typography>
            <Row w="100%" wrap="flex-wrap">
              <FeaturedCreativeHomeWidget />
            </Row>
          </Column>
          <Column a="flex-start">
            <SubTitle
              title="New to DoodleMeeple"
              menuStr="View All"
              onClickEvent={() => {}}
            />
            <Typography className={classes.summary}>
              Professionals that have recently registered
            </Typography>
            <LatestCreativesWidget history={history} dashboard={true} />
          </Column>
          <Column a="flex-start">
            <SubTitle title="Jobs" menuStr="View All" onClickEvent={() => {}} />
            <JobBoardMiniWidget history={history} dashboard={true} />
          </Column>
          <Column a="flex-start">
            <SubTitle
              title="Kickstarters"
              menuStr="View All"
              onClickEvent={() => {}}
            />
            <Typography className={classes.summary}>
              Kickstarter campaigns posted by community members
            </Typography>
            <FeaturedKickstarters history={history} dashboard={true} />
          </Column>
          {/*
          <Column a="flex-start">
            <Typography className={classes.subTitle}>Patreon</Typography>
            <a href={process.env.REACT_APP_PATREON_LINK}>
              <img
                src={process.env.REACT_APP_PATREON}
                style={{ width: '100%' }}
                alt=""
              />
            </a>
          </Column>
          */}
        </Row>
      )}
    </HistoryContext.Consumer>
  );
}
