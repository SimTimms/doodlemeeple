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
import { projectObject } from 'src/testData/projects';

export function Project() {
  const classes = useStyles();

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <Card className={classes.card}>
        <ProjectHeader
          bgImage={projectObject.primaryImage}
          profile={projectObject.user}
        />
        <CardContent>
          <ProfileHeader
            title={projectObject.projectName}
            user={projectObject.user.name}
          />
          <Typography color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>

        <Divider />
        <CardContent>
          <GalleryHeader title="Tags" />
          <TagsWidget tags={projectObject.tags} />
        </CardContent>
        <Divider />
        <CardContent>
          <GalleryHeader title="Invites" />
          <InvitesWidget invites={projectObject.invites} />
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
          <MediaGallery items={projectObject.projectSketches} />
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
          <FileGallery items={projectObject.projectFiles} />
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
