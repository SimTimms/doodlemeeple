import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import { Notifications } from './components/notifications';
import { Posts } from './components/Posts';
import axios from 'axios';
/*import { Projects } from './components/projects';*/
import { ContentHeader } from '../../../../components';
import { useStyles } from './styles';

export function Dashboard() {
  const classes = useStyles();
  const [posts, setPosts] = React.useState(null);

  if (posts === null) {
    axios
      .get('https://doodlemeeple.com/wp-json/wp/v2/posts?_embed')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div style={{ width: '100%' }}>
        <ContentHeader>
          <Typography variant="h1" color="textPrimary">
            Dashboard
          </Typography>
          <Typography color="textSecondary" component="p">
            Keep up to date with your projects, messages and the DoodleMeeple
            community.
          </Typography>
        </ContentHeader>
        <div className={classes.dashboardGrid}>
          <div className={classes.gridRow}>
            <Notifications />

            {/*<Projects />*/}

            <Posts posts={posts ? posts : []} />
            {/*<Projects />*/}
          </div>
        </div>
      </div>
    </Slide>
  );
}
