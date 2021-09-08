import React from 'react';
import { useStyles } from './styles';
import { Typography } from '@material-ui/core';
import { Row, Column, SubTitle } from '../../../../components';
import { FeaturedArticle } from './components/getPosts';
import {
  LatestCreativesWidget,
  JobBoardMiniWidget,
  FeaturedKickstarters,
  FeaturedCreativeHomeWidget,
  PublicPostsWidget,
} from '../../../../widgets';
import { HistoryContext, MenuContext } from '../../../../context';

export default function CommunityPage() {
  const classes = useStyles();

  return (
    <HistoryContext.Consumer>
      {(history) => (
        <MenuContext.Consumer>
          {(menu) => (
            <Row wrap="wrap" a="flex-start" j="space-around" w="100%">
              <Column a="flex-start" w="100%">
                <Column a="flex-start" w="100%">
                  <SubTitle
                    title="Jobs"
                    menuStr="View All"
                    onClickEvent={() =>
                      menu.updateMenuContext({
                        primaryPage: 'jobs',
                      })
                    }
                    primaryButton={{
                      title: 'Add',
                      icon: 'add',
                      onClickEvent: () => {
                        menu.updateMenuContext({
                          ...menu.jobPage,
                          primaryPage: 'job_posts',
                          secondaryPage: 'create_job_ad',
                        });
                        history.push('/app/jobs/job_posts:create_job_ad');
                      },
                    }}
                  />
                  <JobBoardMiniWidget history={history} dashboard={true} />
                </Column>
                <Column a="flex-start" w="100%">
                  <SubTitle
                    title="Featured Professionals"
                    menuStr="View All"
                    onClickEvent={() => {
                      menu.updateMenuContext({
                        ...menu.homePage,
                        secondaryPage: 'profiles',
                      });
                    }}
                  />
                  <Typography className={classes.summary}>
                    The best profiles chosen by us this week
                  </Typography>
                  <Row w="100%" wrap="flex-wrap">
                    <FeaturedCreativeHomeWidget />
                  </Row>
                </Column>
                <Column a="flex-start" w="100%">
                  <SubTitle
                    title="Community Posts"
                    menuStr="View All"
                    onClickEvent={() => {
                      menu.updateMenuContext({
                        ...menu.homePage,
                        primaryPage: 'my_posts',
                        secondaryPage: 'all_posts',
                      });
                    }}
                    primaryButton={{
                      title: 'Add',
                      icon: 'add',
                      onClickEvent: () => {
                        menu.updateMenuContext({
                          ...menu.homepage,
                          primaryPage: 'my_posts',
                          secondaryPage: 'create_my_post',
                        });
                      },
                    }}
                  />
                  <Row w="100%" wrap="flex-wrap">
                    <PublicPostsWidget />
                  </Row>
                </Column>
                <Column a="flex-start" w="100%">
                  <SubTitle
                    title="Articles"
                    menuStr={null}
                    onClickEvent={() => {}}
                  />
                  <FeaturedArticle history={history} />
                </Column>

                <Column a="flex-start">
                  <SubTitle
                    title="New to DoodleMeeple"
                    menuStr={null}
                    onClickEvent={() => {}}
                  />
                  <Typography className={classes.summary}>
                    Professionals that have recently registered
                  </Typography>
                  <LatestCreativesWidget history={history} dashboard={true} />
                </Column>

                <Column a="flex-start">
                  <SubTitle
                    title="Kickstarters"
                    menuStr="View All"
                    onClickEvent={() =>
                      menu.updateMenuContext({
                        ...menu.homePage,
                        primaryPage: 'kickstarters',
                        secondaryPage: 'kickstarters',
                      })
                    }
                    primaryButton={{
                      title: 'Add',
                      icon: 'add',
                      onClickEvent: () => {
                        menu.updateMenuContext({
                          ...menu.homepage,
                          primaryPage: 'kickstarters',
                          secondaryPage: 'create_kickstarter',
                        });
                      },
                    }}
                  />
                  <Typography className={classes.summary}>
                    Kickstarter campaigns posted by community members
                  </Typography>
                  <FeaturedKickstarters history={history} dashboard={true} />
                </Column>
              </Column>
            </Row>
          )}
        </MenuContext.Consumer>
      )}
    </HistoryContext.Consumer>
  );
}
