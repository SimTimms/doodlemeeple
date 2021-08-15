import React from 'react';
import { useStyles } from './styles';
import { Typography } from '@material-ui/core';
import { Row, Column } from '../../../../components';
import { FeaturedArticle } from './components/getPosts';
import {
  LatestCreativesWidget,
  JobBoardMiniWidget,
  FeaturedKickstarters,
  FeaturedCreativeHomeWidget,
} from '../../../../widgets';
import { HistoryContext } from '../../../../context';

export default function CommunityPage() {
  const classes = useStyles();

  return (
    <HistoryContext.Consumer>
      {(history) => (
        <Row wrap="wrap" a="flex-start" j="space-around" w="100%">
          <FeaturedArticle history={history} />
          <Column a="flex-start">
            <Typography className={classes.subTitle}>
              Featured Professionals
            </Typography>
            <Row of="auto">
              <FeaturedCreativeHomeWidget />
            </Row>
          </Column>
          <Column a="flex-start">
            <Typography className={classes.subTitle}>
              Recent Additions
            </Typography>
            <LatestCreativesWidget history={history} dashboard={true} />
          </Column>
          <Column a="flex-start">
            <Typography className={classes.subTitle}>Job Posts</Typography>
            <JobBoardMiniWidget history={history} dashboard={true} />
          </Column>
          <Column a="flex-start">
            <Typography className={classes.subTitle}>
              Kickstarter Ads
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
