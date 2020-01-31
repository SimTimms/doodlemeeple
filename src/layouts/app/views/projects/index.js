import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import {
  projectObject,
  projectObjectTwo,
  projectObjectThree,
} from 'src/testData/projects';
import { ProjectComponent } from './components/projectComponent';
import { useStyles } from './styles';

export function Projects() {
  const classes = useStyles();
  const projectArray = [projectObject, projectObjectTwo, projectObjectThree];

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div>
        <Typography variant="h6" color="textPrimary">
          My Projects
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <div className={classes.cardGrid}>
          {projectArray.map((project, index) => {
            return <ProjectComponent project={project} />;
          })}
        </div>
      </div>
    </Slide>
  );
}
