import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import { useStyles } from './styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Query } from 'react-apollo';
import { NOTIFICATIONS } from '../../../../../data/queries';
import { REMOVE_NOTIFICATION_MUTATION } from '../../../../../data/mutations';
import { Mutation } from 'react-apollo';
import { timeDifferenceForDate } from '../../../../../utils/dates';
import { toaster } from '../../../../../utils/toaster';

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
        onCompleted={(data) => {
          setNotificationArray(data.getNotifications);
        }}
        fetchPolicy="network-only"
      >
        {({ loading, error, data }) => {
          return null;
        }}
      </Query>
      {notificationArray.map((notification, index) => {
        return (
          <Card className={classes.card} key={`conversation_${index}`}>
            <div className={classes.rowWrapper}>
              <Link
                to={notification.linkTo}
                className={classes.messageButton}
                style={{ textDecoration: 'none' }}
              >
                <div className={classes.notifications}>
                  <Icon color="primary">{notification.icon}</Icon>
                </div>
                <div className={classes.profileWrapper}>
                  <div className={classes.wrapperOne}>
                    <div className={classes.messageDetails}>
                      <div
                        className={classes.rowWrapper}
                        style={{ justifyContent: 'space-between' }}
                      >
                        <Typography
                          color="primary"
                          variant="caption"
                          component="p"
                        >
                          <b>{notification.title}</b>
                        </Typography>
                        <Typography
                          variant="caption"
                          color="textPrimary"
                          component="p"
                        >
                          <b>{timeDifferenceForDate(notification.createdAt)}</b>
                        </Typography>
                      </div>
                      <Typography color="textPrimary" component="p">
                        {notification.message}
                      </Typography>
                    </div>
                  </div>
                </div>
              </Link>
              <Mutation
                mutation={REMOVE_NOTIFICATION_MUTATION}
                variables={{
                  id: notification.id,
                }}
                update={(store, { data: { removeNotification } }) => {
                  let data = store.readQuery({ query: NOTIFICATIONS });
                  toaster('Deleted');

                  data.getNotifications = data.getNotifications.filter(
                    (item) => item.id !== removeNotification,
                  );
                  console.log(data);
                  store.writeQuery({
                    query: NOTIFICATIONS,
                    data,
                  });
                }}
              >
                {(RemoveNotificationMutation) => {
                  return (
                    <Button
                      color="primary"
                      onClick={() => {
                        RemoveNotificationMutation();
                        const notificationArrayFiltered = notificationArray.filter(
                          (item) => item.id !== notification.id,
                        );
                        setNotificationArray(notificationArrayFiltered);
                      }}
                    >
                      <Icon color="disabled" className={classes.iconButton}>
                        delete
                      </Icon>
                    </Button>
                  );
                }}
              </Mutation>
            </div>
          </Card>
        );
      })}

      <Icon color="disabled">more_horizontal</Icon>
    </div>
  );
}
