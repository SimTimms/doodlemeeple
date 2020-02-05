import React from 'react';
import Typography from '@material-ui/core/Typography';
import { ProjectHeader } from './ProjectHeader';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import { useStyles } from './styles';
import Icon from '@material-ui/core/Icon';

export function ProjectComponent({ project }) {
  const classes = useStyles();
  return (
    <Card
      className={classes.card}
      style={{ backgroundImage: `url(${project.primaryImage})` }}
    >
      <div className={classes.cardDiv}>
        <CardContent className={classes.cardContentCenter}>
          <ProjectHeader
            title={project.user.name}
            project={project.projectName}
          />
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ textAlign: 'center', width: '100%' }}
            className={classes.cardSummary}
          >
            {project.projectSummary}
          </Typography>
          <Divider style={{ margin: 10, width: '100%' }} />
          <Link
            to={`/app/edit-project/${project.id}`}
            className={classes.cardLink}
          >
            <Button variant="contained" color="primary">
              Edit Project
            </Button>
          </Link>
        </CardContent>
      </div>
    </Card>
  );
}

export function EmptyProjectComponent() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Link to={`/app/new-project`} className={classes.cardLink}>
        <CardContent className={classes.cardContentCenter}>
          <div className={classes.flexCenter}>
            <Icon style={{ fontSize: 50, color: '#fff' }}>add_circle</Icon>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
