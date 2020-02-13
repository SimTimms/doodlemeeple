import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import { useStyles } from './styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { rolesArrayTemp } from '../../../../testData/roles';
import { creativesTemp } from '../../../../testData/creatives';
import { projectObject } from '../../../../testData/projects';

export function CreatorRoles() {
  const classes = useStyles();
  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div>
        <Typography variant="h6" color="textPrimary">
          My Jobs
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <div className={classes.messageWrapper}>
          {rolesArrayTemp.map((role, index) => {
            const invitedMembers =
              role.invitees.length > 0 ? role.invitees : [];

            const workerMembers = role.workers.length > 0 ? role.workers : [];

            const project = [projectObject].filter(
              item => item.id === role.projectId,
            )[0];

            return (
              <div key={`conversation_${index}`}>
                <Card className={classes.card}>
                  {' '}
                  <div className={classes.avatarWrapper}>
                    {invitedMembers.map((groupMember, index) => {
                      return (
                        <CardMedia
                          component="img"
                          alt="Contemplative Reptile"
                          image={groupMember.profileImg}
                          title="Contemplative Reptile"
                          className={classes.avatarRounded}
                          style={{ marginRight: -10 }}
                          key={`conversation_media_${index}`}
                        />
                      );
                    })}
                  </div>
                  <div className={classes.avatarWrapper}>
                    {workerMembers.map((groupMember, index) => {
                      return (
                        <CardMedia
                          component="img"
                          alt="Contemplative Reptile"
                          image={groupMember.profileImg}
                          title="Contemplative Reptile"
                          className={classes.avatarRounded}
                          style={{ marginRight: -10 }}
                          key={`conversation_media_${index}`}
                        />
                      );
                    })}
                  </div>
                  <div className={classes.profileWrapper}>
                    <div className={classes.wrapperOne}>
                      <div className={classes.messageDetails}>
                        <Typography color="textSecondary" component="p">
                          {role.title} for {project.projectName}
                          {role.status}
                        </Typography>
                      </div>
                    </div>
                    <Link
                      to={`/roles/create-role/${role.id}`}
                      className={classes.messageButton}
                      style={{ textDecoration: 'none' }}
                    >
                      <Button variant="contained" color="secondary">
                        Edit
                      </Button>
                    </Link>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </Slide>
  );
}
