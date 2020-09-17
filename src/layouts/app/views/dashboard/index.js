import React, { useEffect } from 'react';
import Slide from '@material-ui/core/Slide';
import { Notifications } from './components/notifications';
import { Posts } from './components/Posts';
import { FeaturedMini } from './components/FeaturedMini';
import axios from 'axios';
import {
  FieldTitleDashboard,
  Divider,
  NoticeBoard,
} from '../../../../components';
import { useStyles } from './styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';

export function Dashboard({ history, profile, setProfile }) {
  const classes = useStyles();
  const [posts, setPosts] = React.useState(null);
  const [home, setHome] = React.useState(null);
  const mobile = useMediaQuery('(max-width:800px)');
  const [featuredArticle, setFeaturedArticle] = React.useState({
    id: null,
    article: null,
  });

  useEffect(() => {
    let didCancel = false;
    const axiosCancel = axios.CancelToken.source();
    if (!didCancel) {
      axios
        .get(
          'https://doodlemeeple.com/wp-json/wp/v2/posts?_embed&categories=1',
          { cancelToken: axiosCancel.token }
        )
        .then((response) => {
          setPosts(response.data);
        })
        .catch((error) => {
          console.log(error);
        });

      axios
        .get(
          'https://doodlemeeple.com/wp-json/wp/v2/posts?_embed&categories=2',
          { cancelToken: axiosCancel.token }
        )
        .then((response) => {
          setFeaturedArticle({
            id: response.data[0].slug,
            article: {
              title: response.data[0].title.rendered,
              image: response.data[0]._embedded,
              linkTo: response.data[0].link,
            },
          });
        })
        .catch((error) => {
          console.log(error);
        });
      axios
        .get(
          'https://doodlemeeple.com/wp-json/wp/v2/posts?_embed&categories=4',
          { cancelToken: axiosCancel.token }
        )
        .then((response) => {
          setHome(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return () => {
      didCancel = true;
      axiosCancel.cancel('Axios request canceled.');
    };
  }, []);

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
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
              <FieldTitleDashboard name="Notifications" inline={false} />
              <Divider />
              <Notifications />
            </div>
            <div
              className={`${clsx({
                [classes.columnRight]: true,
                [classes.columnMobile]: mobile,
              })}`}
            >
              <FieldTitleDashboard name="Updates" inline={false} />
              <Divider />
              <Posts posts={posts ? posts : []} />
              {/*
              <Divider />
              <FieldTitleDashboard name="Featured Artist" inline={false} />
              <Divider />
            
              <FeaturedMini
                posts={featuredArticle.article ? featuredArticle.article : []}
                featuredId={featuredArticle.id}
                history={history}
            />*/}
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
