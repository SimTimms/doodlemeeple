import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import { useStyles } from './styles';
import Typography from '@material-ui/core/Typography';
import { dashboardTemp } from '../../../../../testData/dashboard';

export function Notifications() {
  const classes = useStyles();

  const { roles, projects, notifications } = dashboardTemp;
  return (
    <div className={classes.messageWrapper}>
      <Typography
        color="textPrimary"
        component="p"
        style={{ textAlign: 'center' }}
      >
        Notifications
      </Typography>
      {notifications.map((notification, index) => {
        const project = projects.filter(
          item => item.id === notification.projectId,
        )[0];

        return (
          <Card className={classes.card} key={`conversation_${index}`}>
            <div className={classes.rowWrapper}>
              <div className={classes.notifications}>
                <Link
                  to={`/messages/conversations/${notification.id}`}
                  className={classes.messageButton}
                  style={{ textDecoration: 'none' }}
                >
                  <Icon style={{ color: '#f50057' }}>{notification.icon}</Icon>
                </Link>
              </div>

              <div className={classes.profileWrapper}>
                <div className={classes.wrapperOne}>
                  <div className={classes.messageDetails}>
                    <div className={classes.rowWrapper}>
                      <Typography
                        color="textSecondary"
                        variant="caption"
                        component="p"
                      >
                        <b>{project.projectName} </b>
                      </Typography>
                      <Typography
                        color="textSecondary"
                        variant="caption"
                        component="p"
                      >
                        <b>{notification.time} </b>
                      </Typography>
                    </div>
                    <Typography color="textPrimary" component="p">
                      {notification.summary}
                    </Typography>
                  </div>
                </div>
              </div>
              <div className={classes.actions}>
                <Link
                  to={`/messages/conversations/${notification.id}`}
                  className={classes.messageButton}
                  style={{ textDecoration: 'none' }}
                >
                  <Icon color="disabled">delete</Icon>
                </Link>
              </div>
            </div>
          </Card>
        );
      })}

      <Icon color="disabled">more_horizontal</Icon>
    </div>
  );
}
