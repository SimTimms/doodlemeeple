import React, { useEffect } from 'react';
import Slide from '@material-ui/core/Slide';
import { Notifications } from './components/notifications';
import { Posts } from './components/Posts';
import { Featured } from './components/Featured';
import { FeaturedMini } from './components/FeaturedMini';
import axios from 'axios';
import { ContentHeader } from '../../../../components';
import { useStyles } from './styles';

export function Dashboard({ history }) {
  const classes = useStyles();
  const [posts, setPosts] = React.useState(null);
  const [featured, setFeatured] = React.useState(null);
  const [home, setHome] = React.useState(null);
  const [featuredId, setFeaturedId] = React.useState(null);

  useEffect(() => {
    let didCancel = false;
    const axiosCancel = axios.CancelToken.source();
    if (!didCancel) {
      axios
        .get(
          'https://doodlemeeple.com/wp-json/wp/v2/posts?_embed&categories=1',
          { cancelToken: axiosCancel.token },
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
          { cancelToken: axiosCancel.token },
        )
        .then((response) => {
          setFeaturedId(response.data[0].slug);
          setFeatured(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      axios
        .get(
          'https://doodlemeeple.com/wp-json/wp/v2/posts?_embed&categories=4',
          { cancelToken: axiosCancel.token },
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
        {!featured ? (
          <ContentHeader
            title="Dashboard"
            subTitle="Keep up to date with your projects, messages and the DoodleMeeple
            community."
            subTitleExtra={null}
            button={null}
          />
        ) : (
          <Featured posts={home ? home : []} history={history} />
        )}
        <div className={classes.dashboardGrid}>
          <div className={classes.gridRow}>
            <Notifications />
            <FeaturedMini
              posts={featured ? featured : []}
              featuredId={featuredId}
              history={history}
            />
            <Posts posts={posts ? posts : []} />
          </div>
        </div>
      </div>
    </Slide>
  );
}
