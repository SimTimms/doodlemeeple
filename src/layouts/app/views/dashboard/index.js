import React from 'react';
import Slide from '@material-ui/core/Slide';
import { Notifications } from './components/notifications';
import { Posts } from './components/Posts';
import { Featured } from './components/Featured';
import axios from 'axios';
import { ContentHeader } from '../../../../components';
import { useStyles } from './styles';

export function Dashboard() {
  const classes = useStyles();
  const [posts, setPosts] = React.useState(null);
  const [featured, setFeatured] = React.useState(null);

  if (posts === null) {
    axios
      .get('https://doodlemeeple.com/wp-json/wp/v2/posts?_embed&categories=1')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  if (featured === null) {
    axios
      .get('https://doodlemeeple.com/wp-json/wp/v2/posts?_embed&categories=2')
      .then((response) => {
        setFeatured(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div style={{ width: '100%' }}>
        {!featured ? (
          <ContentHeader
            title="Dashboard"
            subTitle="Keep up to date with your projects, messages and the DoodleMeeple
            community."
            button={null}
          />
        ) : (
          <Featured posts={featured ? featured : []} />
        )}
        <div className={classes.dashboardGrid}>
          <div className={classes.gridRow}>
            <Notifications />

            <Posts posts={posts ? posts : []} />
          </div>
        </div>
      </div>
    </Slide>
  );
}
