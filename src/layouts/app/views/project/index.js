import React from 'react';
import {
  Card,
  CardContent,
  Divider,
  Typography,
  Slide,
} from '@material-ui/core';
import { useStyles } from './styles';
import { ProfileHeader, ProjectHeader, CardHeader } from './components';
import {
  MediaGallery,
  FileGallery,
  InvitesWidget,
} from '../../../../components';

export function Project({ projectId, gamesTemp, actionSet, edit }) {
  const classes = useStyles();

  //TODO move to DB driven
  const projectArray = gamesTemp;
  const project = projectArray.filter(
    (project) => project._id === projectId
  )[0];
  if (!project) {
    return (
      <Slide direction="left" in={true} mountOnEnter unmountOnExit>
        <Card className={classes.card}>
          <CardContent>
            <Typography color="textSecondary" component="p">
              We couldn't find that project
            </Typography>
          </CardContent>
        </Card>
      </Slide>
    );
  }
  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <Card className={classes.card}>
        <ProjectHeader bgImage={project.primaryImage} profile={project.user} />
        <CardContent>
          <ProfileHeader
            title={project.projectName}
            user={project.user}
            tags={project.tags}
          />
          <Typography color="textSecondary" component="p">
            {project.projectSummary}
          </Typography>
        </CardContent>

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
    </Slide>
  );
}
