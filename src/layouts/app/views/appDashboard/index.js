import React, { useEffect } from 'react';
import { Notifications } from './components/notifications';
import { Posts } from './components/Posts';
import {
  FieldTitleDashboard,
  Divider,
  NoticeBoard,
} from '../../../../components';
import { useStyles } from './styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';
import { getPosts, getFeatured } from './getPosts';

export default function AppDashboard({ history, profile, setProfile }) {
  const classes = useStyles();
  const [posts, setPosts] = React.useState(null);
  const mobile = useMediaQuery('(max-width:800px)');
  const [featuredArticle, setFeaturedArticle] = React.useState({
    id: null,
    article: null,
  });

  useEffect(() => {
    const cacheData = JSON.parse(localStorage.getItem('featureArticle'));
    const cacheExists = cacheData;
    const cachePostsData = JSON.parse(localStorage.getItem('posts'));
    const cachePostsExists = cachePostsData;

    !cachePostsExists ? getPosts(setPosts) : setPosts(cachePostsData);
    !cacheExists
      ? getFeatured(setFeaturedArticle)
      : setFeaturedArticle(cacheData);
  }, []);

  return (
    <div style={{ width: '100%' }}>
      <NoticeBoard
        profile={profile}
        setProfile={setProfile}
        history={history}
        featuredArticle={featuredArticle}
      />
      <div className={classes.dashboardGrid}>
        <div className={classes.gridRow}>
          <div
            className={`${clsx({
              [classes.column]: true,
              [classes.columnMobile]: mobile,
            })}`}
          >
            <FieldTitleDashboard name="Notifications" inline={false} a="c" />
            <Divider />
            <Notifications />
          </div>
          {mobile && <Divider />}
          <div
            className={`${clsx({
              [classes.columnRight]: true,
              [classes.columnMobile]: mobile,
            })}`}
          >
            <Posts posts={posts ? posts : []} />
          </div>
        </div>
      </div>
    </div>
  );
}
