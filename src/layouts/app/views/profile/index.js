import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import { useStyles } from './styles';
import tim from '../../../../assets/tim.jpg';
import { ContentHeader } from '../../../../components/headers/contentHeader';
import { ProfileHeader } from './components';
import { MediaGallery } from '../../../../components/mediaGallery';
import boxes from '../../../../assets/boxes.jpg';
import smithy from '../../../../assets/smithy.jpg';

export function Profile() {
  const classes = useStyles();

  const items = [
    {
      img: smithy,
      title: 'Image',
      author: 'author',
      cols: 1,
    },
    {
      img: boxes,
      title: 'Image',
      author: 'author',
      cols: 2,
    },
    {
      img: smithy,
      title: 'Image',
      author: 'author',
      cols: 1,
    },
  ];
  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div>
        <ContentHeader>
          <Typography variant="h1" color="textPrimary">
            Profile
          </Typography>
          <Typography color="textSecondary" component="p">
            Tell everyone about yourself, showcase the best examples of your
            work
          </Typography>
        </ContentHeader>

        <Card className={classes.card}>
          <ProjectHeader
            bgImage={project.primaryImage}
            profile={project.user}
          />
          <CardContent>
            <ProfileHeader
              title={project.projectName}
              user={project.user.name}
            />
            <Typography color="textSecondary" component="p">
              {project.projectSummary}
            </Typography>
          </CardContent>
          {project.tags && (
            <div>
              <Divider />
              <CardContent>
                <CardHeader title="Tags" />
                <TagsWidget tags={project.tags} setTags={null} edit={edit} />
              </CardContent>
            </div>
          )}
          {project.invites && edit && (
            <div>
              <Divider />
              <CardContent>
                <CardHeader title="Invites" />
                <InvitesWidget
                  invites={project.invites}
                  setInvite={null}
                  edit={edit}
                />
              </CardContent>
            </div>
          )}
          {project.about && (
            <div>
              <Divider />
              <CardContent>
                <CardHeader title="About this project" />
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  gutterBottom
                >
                  {project.about}
                </Typography>
              </CardContent>
            </div>
          )}
          {project.projectSketches && (
            <div>
              <Divider />
              <CardContent>
                <CardHeader title="Gallery" />
                <MediaGallery
                  items={project.projectSketches}
                  sketches={null}
                  setSketches={null}
                  edit={edit}
                />
              </CardContent>
            </div>
          )}
          {project.projectFiles && (
            <div>
              <Divider />
              <CardContent>
                <CardHeader title="Files" />
                <FileGallery
                  items={project.projectFiles}
                  files={null}
                  setFiles={null}
                  edit={edit}
                />
              </CardContent>
            </div>
          )}
          {project.budget && (
            <div>
              <Divider />
              <CardContent>
                <CardHeader title="Budget" />
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  gutterBottom
                >
                  {project.budget}
                </Typography>
              </CardContent>
            </div>
          )}
          {project.deadline && (
            <div>
              <Divider />
              <CardContent>
                <CardHeader title="Deadline" />
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  gutterBottom
                >
                  {project.deadline}
                </Typography>
              </CardContent>
            </div>
          )}
          {actionSet}
        </Card>
      </div>
    </Slide>
  );
}
