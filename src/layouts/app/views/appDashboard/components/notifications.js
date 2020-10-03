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
          <Card className={classes.card}>
            <div className={classes.rowWrapper}>
              <div className={classes.messageButton}>
                <div
                  className={clsx({
                    [classes.notifications]: true,
                  })}
                  style={{ border: '2px solid #ccc' }}
                >
                  <Icon style={{ color: '#ccc' }}>more_horiz</Icon>
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
                          <b> No Notifications</b>
                        </Typography>
                        <Typography
                          variant="caption"
                          style={{ color: '#aaa' }}
                          component="p"
                        ></Typography>
                      </div>
                      <Typography color="textPrimary" component="p">
                        You have no notifications
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
