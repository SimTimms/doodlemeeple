import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import { useStyles } from './styles';
import Typography from '@material-ui/core/Typography';
import {
  projectObject,
  projectObjectTwo,
  projectObjectThree,
} from '../../../../../testData/projects';

export function Projects() {
  const classes = useStyles();

  const projects = [projectObject, projectObjectTwo, projectObjectThree];
  return (
    <div className={classes.messageWrapper}>
      <Typography
        color="textPrimary"
        component="p"
        style={{ textAlign: 'center' }}
      >
        Projects
      </Typography>
      {projects.map((project, index) => {
        return (
          <Card className={classes.card} key={`conversation_${index}`}>
            <div className={classes.rowWrapper}>
              <div className={classes.notifications}>
                <div
                  className={classes.projectImage}
                  style={{ backgroundImage: `url(${project.primaryImage})` }}
                >
                  <div className={classes.messageDetails}>
                    <div
                      className={classes.rowWrapper}
                      style={{
                        justifyContent: 'center',
                        background: 'rgba(255,255,255,0.8)',
                      }}
                    >
                      <Typography
                        color="textPrimary"
                        variant="caption"
                        component="p"
                      >
                        <b>{project.projectName} </b>
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.actions}>
                <Link to="/messages/conversations/ROLE123">
                  <Icon color="disabled">message</Icon>
                </Link>
                <Icon color="disabled">more_horizontal</Icon>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
