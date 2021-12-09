import React from 'react';
import { Query } from 'react-apollo';
import { POST_FEED } from './data';
import { MyPostProfile } from './profileCard';
import { Column } from '../../components';
import { randomKey } from '../../utils';

export default function PublicPosts() {
  return (
    <Column>
      <Query query={POST_FEED} fetchPolicy="network-only">
        {({ data }) => {
          console.log(data);
          if (data) {
            return data.postFeed.map((myPost) => (
              <MyPostProfile myPost={myPost} key={randomKey()} />
            ));
          }
          return null;
        }}
      </Query>
    </Column>
  );
}
