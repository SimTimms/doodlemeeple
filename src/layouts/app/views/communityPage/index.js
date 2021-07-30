import React from 'react';
import { useStyles } from './styles';
import { Typography } from '@material-ui/core';
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
              Latest Profiles
            </Typography>
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
