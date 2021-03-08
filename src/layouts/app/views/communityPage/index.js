import React from 'react';
import { CreativeCategories } from '../../../../modules/community';
import { Column } from '../../../../components';
import { FeaturedArticle } from './components/getPosts';
export default function CommunityPage({ history }) {
  return (
    <Column>
      <CreativeCategories history={history} />
    </Column>
  );
}
