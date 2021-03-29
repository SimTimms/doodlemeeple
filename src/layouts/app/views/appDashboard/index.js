import React, { useEffect } from 'react';
import { NoticeBoard, Column } from '../../../../components';
import { getFeatured } from './getPosts';

export default function AppDashboard({ history, profile, setProfile }) {
  const [featuredArticle, setFeaturedArticle] = React.useState({
    id: null,
    article: null,
  });

  useEffect(() => {
    const cacheData = JSON.parse(localStorage.getItem('featureArticle'));
    const cacheExists = cacheData;

    !cacheExists
      ? getFeatured(setFeaturedArticle)
      : setFeaturedArticle(cacheData);
  }, []);

  return (
    <Column>
      <NoticeBoard
        profile={profile}
        setProfile={setProfile}
        history={history}
        featuredArticle={featuredArticle}
      />
    </Column>
  );
}
