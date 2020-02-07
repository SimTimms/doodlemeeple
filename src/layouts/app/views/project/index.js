import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import { useStyles } from './styles';
import { ProfileHeader, ProjectHeader, CardHeader } from './components';
import { MediaGallery } from '../../../../components/mediaGallery';
import { FileGallery } from '../../../../components/fileGallery';
import { InvitesWidget } from '../../../../components/invites';
import { TagsWidget } from '../../../../components/tags';
export function Project({ projectId, gamesTemp, actionSet, edit }) {
  const classes = useStyles();

  //TODO move to DB driven
  const projectArray = gamesTemp;
  const project = projectArray.filter(project => project.id === projectId)[0];
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
          <ProfileHeader title={project.projectName} user={project.user.name} />
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
    </Slide>
  );
}
