import React from 'react';
import { useStyles } from './styles';
import { Typography } from '@material-ui/core';
import {
  Row,
  Column,
  SubTitle,
  Grid,
  DividerMini,
  MenuButtonStandard,
  MenuButtonStandardText,
} from '../../../../components';
import { FeaturedArticle } from './components/getPosts';
import {
  LatestCreativesWidget,
  JobBoardMiniWidget,
  FeaturedKickstarters,
  FeaturedCreativeHomeWidget,
  PublicPostsWidget,
} from '../../../../widgets';
import {
  HistoryContext,
  MenuContext,
  ParamsContext,
} from '../../../../context';
import { ProfileCardMacro } from '../../../../widgets/profileCard';
import { Query } from 'react-apollo';
import { CHOSEN_CREATIVE, POST_FEED } from './data';

export default function CommunityPage() {
  const classes = useStyles();

  return (
    <ParamsContext.Consumer>
      {(params) => (
        <HistoryContext.Consumer>
          {(history) => (
            <MenuContext.Consumer>
              {(menu) => (
                <Row wrap="wrap" a="flex-start" j="space-around" w="100%">
                  <Column a="flex-start" w="100%">
                    {params.savedUserId && (
                      <Column w="100%" p={10}>
                        <Column w={300}>
                          <Typography
                            className={classes.summary}
                            style={{ fontSize: '1.6rem' }}
                          >
                            Excellent Choice!
                          </Typography>
                          <DividerMini />
                          <Column w={300}>
                            <MenuButtonStandardText
                              title="Close"
                              icon="close"
                              onClickEvent={() => {
                                params.updateParamsContext({
                                  savedUserId: null,
                                });
                              }}
                              fr={true}
                            />
                            <Query
                              query={CHOSEN_CREATIVE}
                              variables={{ userId: params.savedUserId }}
                              fetchPolicy="network-only"
                            >
                              {({ data }) => {
                                if (!data) return null;
                                return (
                                  <Grid>
                                    <ProfileCardMacro
                                      creative={data.userById}
                                    />
                                  </Grid>
                                );
                              }}
                            </Query>
                          </Column>
                          <DividerMini />
                          <Typography
                            className={classes.summary}
                            style={{ fontSize: '1rem' }}
                          >
                            You can invite this professional to quote for your
                            work simply by creating a job specification.
                          </Typography>

                          <DividerMini />
                          <MenuButtonStandard
                            title="Continue"
                            onClickEvent={() => {
                              menu.updateMenuContext({
                                ...menu,
                                primaryPage: 'jobs',
                                jobPage: {
                                  ...menu.jobPage,
                                  primaryPage: 'job_posts',
                                  secondaryPage: 'create_job_ad',
                                },
                              });
                            }}
                          />
                          <DividerMini />
                        </Column>
                      </Column>
                    )}

                    <Column a="flex-start" w="100%">
                      <SubTitle
                        title="Jobs"
                        menuStr="View All"
                        onClickEvent={() =>
                          menu.updateMenuContext({
                            ...menu,
                            primaryPage: 'jobs',
                          })
                        }
                        primaryButton={{
                          title: 'Add',
                          icon: 'add',
                          onClickEvent: () => {
                            menu.updateMenuContext({
                              ...menu,
                              primaryPage: 'jobs',
                              jobPage: {
                                ...menu.jobPage,
                                primaryPage: 'job_posts',
                                secondaryPage: 'create_job_ad',
                              },
                            });
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
                            ...menu,
                            homePage: {
                              ...menu.homePage,
                              secondaryPage: 'profiles',
                            },
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
                            ...menu,
                            homePage: {
                              ...menu.homePage,
                              primaryPage: 'my_posts',
                              secondaryPage: 'all_posts',
                            },
                          });
                        }}
                        primaryButton={{
                          title: 'Add',
                          icon: 'add',
                          onClickEvent: () => {
                            menu.updateMenuContext({
                              ...menu,
                              homePage: {
                                ...menu.homepage,
                                primaryPage: 'my_posts',
                                secondaryPage: 'create_my_post',
                              },
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
                      <LatestCreativesWidget
                        history={history}
                        dashboard={true}
                      />
                    </Column>

                    <Column a="flex-start">
                      <SubTitle
                        title="Kickstarters"
                        menuStr="View All"
                        onClickEvent={() =>
                          menu.updateMenuContext({
                            ...menu,
                            homePage: {
                              ...menu.homepage,
                              primaryPage: 'kickstarters',
                              secondaryPage: 'kickstarters',
                            },
                          })
                        }
                        primaryButton={{
                          title: 'Add',
                          icon: 'add',
                          onClickEvent: () => {
                            menu.updateMenuContext({
                              ...menu,
                              homePage: {
                                ...menu.homepage,
                                primaryPage: 'kickstarters',
                                secondaryPage: 'create_kickstarter',
                              },
                            });
                          },
                        }}
                      />
                      <Typography className={classes.summary}>
                        Kickstarter campaigns posted by community members
                      </Typography>
                      <FeaturedKickstarters
                        history={history}
                        dashboard={true}
                      />
                    </Column>
                  </Column>
                </Row>
              )}
            </MenuContext.Consumer>
          )}
        </HistoryContext.Consumer>
      )}
    </ParamsContext.Consumer>
  );
}
