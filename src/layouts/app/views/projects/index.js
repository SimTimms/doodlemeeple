import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import { useStyles } from './styles';
import tim from 'src/assets/tim.jpg';
import { InviteHeader } from './components';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { projectObject } from 'src/testData/projects';

export function Projects() {
  const classes = useStyles();
  const projectArray = [projectObject];

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
        {projectArray.map((project, index) => {
          return (
            <Card className={classes.card}>
              <div className={classes.cardDiv}>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  width="140"
                  image={project.user.profileImg}
                  title="Contemplative Reptile"
                  className={classes.cardMedia}
                />
                <CardContent>
                  <InviteHeader
                    title={project.user.name}
                    project={project.projectName}
                  />
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {project.summary}
                  </Typography>
                  <Divider style={{ margin: 10 }} />
                  <Link
                    to={`/app/project/${project.id}`}
                    className={classes.cardLink}
                  >
                    <Button variant="contained" color="primary">
                      View Project
                    </Button>
                  </Link>
                </CardContent>
              </div>
            </Card>
          );
        })}
      </div>
    </Slide>
  );
}
