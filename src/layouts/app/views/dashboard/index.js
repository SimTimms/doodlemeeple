import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import { Notifications } from './components/notifications';
import { Projects } from './components/projects';
import { ContentHeader } from '../../../../components/headers/contentHeader';
import { useStyles } from './styles';

export function Dashboard() {
  const classes = useStyles();

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div>
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
            <Projects />
          </div>
        </div>
      </div>
    </Slide>
  );
}
