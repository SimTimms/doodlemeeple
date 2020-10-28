import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon, Button, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { REMOVE_NOTIFICATION_MUTATION } from '../../data/mutations';
import { Mutation } from 'react-apollo';
import { timeDifferenceForDate } from '../../utils/dates';
import clsx from 'clsx';
import { MenuButtonShortcut } from '../';

export default function NotificationComponent({
  notification,
  setNotificationArray,
  notificationArray,
}) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <div className={classes.rowWrapper}>
        <Link
          to={notification.linkTo}
          className={classes.messageButton}
          style={{ textDecoration: 'none' }}
        >
          {notification.sender && notification.icon === 'request_quote' && (
            <div
              className={classes.notifications}
              style={{
                background: `url(${notification.sender.profileImg})`,
                backgroundSize: 'cover',
              }}
            ></div>
          )}
          <div className={classes.profileWrapper}>
            <div className={classes.wrapperOne}>
              <div className={classes.messageDetails}>
                <div
                  className={classes.rowWrapper}
                  style={{ justifyContent: 'space-between' }}
                >
                  <Typography
                    component="p"
                    className={clsx({
                      [classes.notificationNeutral]: true,
                      [classes.notificationBad]:
                        notification.icon === 'request_quote' ||
                        notification.icon === 'thumb_up',
                      [classes.notificationGood]:
                        notification.icon === 'thumb_down' ||
                        notification.icon === 'warning',
                    })}
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
            id: notification._id,
          }}
        >
          {(RemoveNotificationMutation) => {
            return (
              <MenuButtonShortcut
                text={{
                  name: '',
                  icon: 'close',
                  count: 0,
                  back: '',
                }}
                onClickEvent={() => {
                  RemoveNotificationMutation();
                  const notificationArrayFiltered = notificationArray.filter(
                    (item) => item._id !== notification._id
                  );
                  setNotificationArray(notificationArrayFiltered);
                }}
                active={false}
              />
            );
          }}
        </Mutation>
      </div>
    </Card>
  );
}