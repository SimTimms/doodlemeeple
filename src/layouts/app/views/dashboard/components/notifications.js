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
import clsx from 'clsx';

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
        {({ data }) => {
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
                <div
                  className={clsx({
                    [classes.notifications]: true,
                    [classes.notificationInvite]:
                      notification.icon === 'thumb_up',
                  })}
                >
                  <Icon
                    className={clsx({
                      [classes.icon]: true,
                      [classes.iconInvite]: notification.icon === 'thumb_up',
                    })}
                  >
                    {notification.icon}
                  </Icon>
                </div>
                <div className={classes.profileWrapper}>
                  <div className={classes.wrapperOne}>
                    <div className={classes.messageDetails}>
                      <div
                        className={classes.rowWrapper}
                        style={{ justifyContent: 'space-between' }}
                      >
                        <Typography
                          style={{ color: '#aaa' }}
                          variant="caption"
                          component="p"
                        >
                          <b>{notification.title}</b>
                        </Typography>
                        <Typography
                          variant="caption"
                          style={{ color: '#aaa' }}
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
                  console.log(removeNotification);
                  data.getNotifications = removeNotification;

                  store.writeQuery({
                    query: NOTIFICATIONS,
                    data,
                  });
                  setNotificationArray(removeNotification);
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
    </div>
  );
}
