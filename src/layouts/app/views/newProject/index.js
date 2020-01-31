import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import { useStyles } from './styles';
import { ProjectComponent, ProjectHeader, GalleryHeader } from './components';
import { MediaGallery } from 'src/components/mediaGallery';
import { FileGallery } from 'src/components/fileGallery';
import { InvitesWidget } from 'src/components/invites';
import { TagsWidget } from 'src/components/tags';
import tim from 'src/assets/tim.jpg';

export function NewProject() {
  const classes = useStyles();
  const [title, setTitle] = React.useState('');
  const [summary, setSummary] = React.useState('');

  //TODO move to DB driven

  const project = {
    id: 'ID126',
    primaryImage: null,
    projectName: '',
    projectSummary: '',
    projectFiles: [],
    invites: [],
    tags: [],
    projectSketches: [],
    about: '',
    user: {
      profileImg: tim,
      name: 'Tim Simms',
    },
    budget: '',
    deadline: '',
  };

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <Card className={classes.card}>
        <ProjectHeader profile={project.user} />
        <CardContent>
          <ProjectComponent
            fieldValue={title}
            setFieldValue={setTitle}
            title="Project Name"
            width={200}
          />
          <ProjectComponent
            fieldValue={summary}
            setFieldValue={setSummary}
            title="Description"
            width={'100%'}
          />
          <Typography color="textSecondary" component="p">
            {project.projectSummary}
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
        <Divider />
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
        </CardContent>{' '}
        <Divider />
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
