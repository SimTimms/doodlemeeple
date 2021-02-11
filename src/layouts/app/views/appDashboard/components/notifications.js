import React from 'react';
import { Card, Icon, Typography, useMediaQuery } from '@material-ui/core';
import { useStyles } from './styles';
import { Query } from 'react-apollo';
import { NOTIFICATIONS } from '../../../../../data/queries';
import clsx from 'clsx';
import { NotificationComponent } from '../../../../../components';

export function Notifications() {
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:800px)');

  const [notificationArray, setNotificationArray] = React.useState([]);

  return (
    <div
      className={clsx({
        [classes.messageWrapper]: true,
        [classes.messageWrapperMobile]: mobile,
      })}
    >
      <div className={classes.shadow}>
        <Query
          query={NOTIFICATIONS}
          onCompleted={(data) => {
            setNotificationArray(data.notificationMany);
          }}
          fetchPolicy="network-only"
        >
          {({ data }) => {
            return null;
          }}
        </Query>
        {notificationArray.map((notification, index) => {
          return (
            <NotificationComponent
              notification={notification}
              key={`notification_${index}`}
              setNotificationArray={setNotificationArray}
              notificationArray={notificationArray}
            />
          );
        })}
        {notificationArray.length === 0 && (
          <NotificationComponent
            notification={{
              linkTo: '',
              title: 'No Notifications',
              message: 'You have no new notifications',
              createdAt: new Date(),
            }}
            key={`notification_${0}`}
            setNotificationArray={setNotificationArray}
            notificationArray={notificationArray}
          />
        )}
      </div>
    </div>
  );
}
