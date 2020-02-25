import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import { useStyles } from './styles';
import Typography from '@material-ui/core/Typography';
import { Query } from 'react-apollo';
import { NOTIFICATIONS } from '../../../../../data/queries';
import { timeDifferenceForDate } from '../../../../../utils/dates';

export function Notifications() {
  const classes = useStyles();

  const [notificationArray, setNotificationArray] = React.useState([]);

  return (
    <div className={classes.messageWrapper}>
      <Typography
        color="textPrimary"
        component="p"
        style={{ textAlign: 'center' }}
      >
        Notifications
      </Typography>
      <Query
        query={NOTIFICATIONS}
        onCompleted={data => {
          setNotificationArray(data.getNotifications);
        }}
      >
        {({ loading, error, data }) => {
          return null;
        }}
      </Query>
      {notificationArray.map((notification, index) => {
        return (
          <Card className={classes.card} key={`conversation_${index}`}>
            <div className={classes.rowWrapper}>
              <div className={classes.notifications}>
                <Link
                  to={notification.linkTo}
                  className={classes.messageButton}
                  style={{ textDecoration: 'none' }}
                >
                  <Icon style={{ color: '#f50057' }}>{notification.icon}</Icon>
                </Link>
              </div>

              <div className={classes.profileWrapper}>
                <div className={classes.wrapperOne}>
                  <div className={classes.messageDetails}>
                    <div
                      className={classes.rowWrapper}
                      style={{ justifyContent: 'space-between' }}
                    >
                      <Typography
                        color="secondary"
                        variant="caption"
                        component="p"
                      >
                        <b>{notification.title}</b>
                      </Typography>
                      <Typography variant="caption" component="p">
                        <b>{timeDifferenceForDate(notification.createdAt)}</b>
                      </Typography>
                    </div>
                    <Typography color="textPrimary" component="p">
                      {notification.message}
                    </Typography>
                  </div>
                </div>
              </div>
              <div className={classes.actions}>
                <Icon
                  color="disabled"
                  onClick={() => {
                    const notificationArrayFiltered = notificationArray.filter(
                      item => item.id !== notification.id,
                    );
                    setNotificationArray(notificationArrayFiltered);
                  }}
                  className={classes.iconButton}
                >
                  delete
                </Icon>
              </div>
            </div>
          </Card>
        );
      })}

      <Icon color="disabled">more_horizontal</Icon>
    </div>
  );
}
