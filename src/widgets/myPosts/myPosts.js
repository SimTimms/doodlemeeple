import React from 'react';
import { Typography } from '@material-ui/core';
import { Query } from 'react-apollo';
import { MY_POSTS, MY_POSTS_WIDGET } from './data';
import { MyPostForm } from './';
import { Row, Column, CardComponent, Grid } from '../../components';
import MyPostComponent from './component';
import { MyPostProfile } from './profileCard';

import { MenuContext } from '../../context';

export default function MyPosts() {
  return (
    <MenuContext.Consumer>
      {(menu) => (
        <Row wrap="wrap" a="flex-start" j="space-around" w="100%">
          {menu.homePage.secondaryPage === 'create_my_post' ? (
            <MyPostForm />
          ) : menu.homePage.secondaryPage === 'all_posts' ? (
            <Column w={400}>
              <Grid cols={1}>
                <Query query={MY_POSTS_WIDGET} fetchPolicy="network-only">
                  {({ data }) => {
                    if (data) {
                      if (data.myPostsWidget.length === 0) {
                        return (
                          <CardComponent type="dark">
                            <Typography>No Posts</Typography>
                          </CardComponent>
                        );
                      }
                      return data.myPostsWidget.map((myPost) => (
                        <MyPostProfile myPost={myPost} />
                      ));
                    }
                    return null;
                  }}
                </Query>
              </Grid>
            </Column>
          ) : (
            menu.homePage.secondaryPage === 'my_posts' && (
              <Column>
                <Query query={MY_POSTS} fetchPolicy="network-only">
                  {({ data }) => {
                    if (data) {
                      if (data.myPosts.length === 0) {
                        return (
                          <CardComponent type="dark">
                            <Typography>No Posts</Typography>
                          </CardComponent>
                        );
                      }
                      return data.myPosts.map((myPost) => (
                        <MyPostComponent myPost={myPost} />
                      ));
                    }
                    return null;
                  }}
                </Query>
              </Column>
            )
          )}
        </Row>
      )}
    </MenuContext.Consumer>
  );
}
