import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import { useStyles } from './styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { rolesArrayTemp } from '../../../../testData/roles';
import { projectObject } from '../../../../testData/projects';
import Icon from '@material-ui/core/Icon';

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
            const project = [projectObject].filter(
              item => item.id === role.projectId,
            )[0];

            return (
              <Card className={classes.card} key={`conversation_${index}`}>
                <div className={classes.rowWrapper}>
                  <div className={classes.notifications}>
                    <Link
                      to={`/messages/conversations/${role.id}`}
                      className={classes.messageButton}
                      style={{ textDecoration: 'none' }}
                    >
                      <Icon style={{ color: '#f50057' }}>message</Icon>
                    </Link>
                    <Icon style={{ color: '#ddd' }}>check_circle</Icon>
                  </div>

                  {/*
                  <div className={classes.avatarWrapper}>
                    {invitedMembers.map((groupMember, index) => {
                      const classAdd =
                        groupMember.status === 'declined'
                          ? classes.avatarDeclined
                          : groupMember.status === 'responded'
                          ? classes.avatarResponded
                          : null;

                      return (
                        <CardMedia
                          component="img"
                          alt="Contemplative Reptile"
                          image={groupMember.profileImg}
                          title="Contemplative Reptile"
                          className={` ${classAdd} ${classes.avatarRounded}`}
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
                          key={`conversation_media_${index}`}
                        />
                      );
                    })}
                  </div>*/}
                  <div className={classes.profileWrapper}>
                    <div className={classes.wrapperOne}>
                      <div className={classes.messageDetails}>
                        <Typography color="textSecondary" component="p">
                          <b>
                            {role.title} for {project.projectName}{' '}
                          </b>
                        </Typography>
                        <Typography color="textSecondary" component="p">
                          Jamie messaged you, Duke declined ......
                        </Typography>
                      </div>
                    </div>
                    {role.status === 'active' ? (
                      <Link
                        to={`/roles/create-role/${role.id}`}
                        className={classes.messageButton}
                        style={{ textDecoration: 'none' }}
                      >
                        <Button variant="contained" color="secondary">
                          View
                        </Button>
                      </Link>
                    ) : (
                      <Link
                        to={`/roles/create-role/${role.id}`}
                        className={classes.messageButton}
                        style={{ textDecoration: 'none' }}
                      >
                        <Button variant="contained" color="secondary">
                          Edit
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </Slide>
  );
}
