import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import { useStyles } from './styles';
import { ProfileHeader, ProjectHeader, GalleryHeader } from './components';
import { MediaGallery } from 'src/components/mediaGallery';
import { FileGallery } from 'src/components/fileGallery';
import { InvitesWidget } from 'src/components/invites';
import { TagsWidget } from 'src/components/tags';
import {
  projectObject,
  projectObjectTwo,
  projectObjectThree,
} from 'src/testData/projects';

export function Project({ projectId }) {
  const classes = useStyles();

  //TODO move to DB driven
  const projectArray = [projectObject, projectObjectTwo, projectObjectThree];
  const project = projectArray.filter(project => project.id === projectId)[0];

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <Card className={classes.card}>
        <ProjectHeader bgImage={project.primaryImage} profile={project.user} />
        <CardContent>
          <ProfileHeader title={project.projectName} user={project.user.name} />
          <Typography color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <Divider />
        <CardContent>
          <GalleryHeader title="Tags" />
          <TagsWidget tags={project.tags} />
        </CardContent>
        <Divider />
        <CardContent>
          <GalleryHeader title="Invites" />
          <InvitesWidget invites={project.invites} />
        </CardContent>
        <Divider />
        <CardContent>
          <GalleryHeader title="About this project" />
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            gutterBottom
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <Divider />
        <CardContent>
          <GalleryHeader title="Sketches" />
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            gutterBottom
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <MediaGallery items={project.projectSketches} />
        </CardContent>
        <Divider />
        <CardContent>
          <GalleryHeader title="Files" />
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            gutterBottom
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <FileGallery items={project.projectFiles} />
        </CardContent>
        <CardContent>
          <GalleryHeader title="Budget" />
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            gutterBottom
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardContent>
          <GalleryHeader title="Deadline" />
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            gutterBottom
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
    </Slide>
  );
}
