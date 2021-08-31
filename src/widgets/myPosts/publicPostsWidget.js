import React from 'react';
import { Query } from 'react-apollo';
import { MY_POSTS_WIDGET } from './data';
import { MyPostProfile } from './profileCard';
import { Grid } from '../../components';

export default function PublicPosts() {
  return (
    <Grid cols={3}>
      <Query query={MY_POSTS_WIDGET} fetchPolicy="network-only">
        {({ data }) => {
          if (data) {
            return data.myPostsWidget.map((myPost) => (
              <MyPostProfile myPost={myPost} />
            ));
          }
          return null;
        }}
      </Query>
    </Grid>
  );
}
