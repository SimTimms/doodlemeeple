import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { REMOVE_NOTIFICATION_MUTATION } from '../../data/mutations';
import { useMutation } from '@apollo/client';

import { timeDifferenceForDate } from '../../utils/dates';
import { nameShortener } from '../../utils';
import clsx from 'clsx';
import { MenuButtonShortcut, DividerMini } from '../';

export default function NotificationComponent({
  notification,
  setNotificationArray,
  notificationArray,
}) {
  const classes = useStyles();
  const [RemoveNotificationMutation, { loading }] = useMutation(
    REMOVE_NOTIFICATION_MUTATION,
    {
      variables: { id: notification._id },
    },
    {
      onCompleted() {},
    }
  );
  return (
    <div className={classes.card}>
      <div className={classes.rowWrapper}>
        <Link
          to={notification.linkTo}
          className={classes.messageButton}
          style={{ textDecoration: 'none' }}
        >
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
                <DividerMini />
                <Typography
                  color="textPrimary"
                  component="p"
                  style={{ fontSize: 12 }}
                >
                  {nameShortener(notification.message, 50)}
                </Typography>
              </div>
            </div>
          </div>
        </Link>
        {notification.title !== 'No Notifications' && (
          <MenuButtonShortcut
            text={{
              name: '',
              icon: 'close',
              count: 0,
              back: '',
              color: '#222',
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
        )}
      </div>
    </div>
  );
}
