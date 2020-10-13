import React from 'react';
import { Typography } from '@material-ui/core';
import { Query } from 'react-apollo';
import {
  Column,
  NotificationComponent,
  FieldTitleDashboard,
  Paper,
  Divider,
  DividerMini,
} from '../../../../../../../components';
import { NOTIFICATIONS_BY_JOB } from '../../../../../../../data/queries';

export default function NotificationDash({ jobId }) {
  const [notificationArray, setNotificationArray] = React.useState([]);
  return (
    <Column w="50%" p={10}>
      <Paper p={10}>
        <FieldTitleDashboard name="Notifications" inline={false} a="c" />
        <DividerMini />
        <Query
          query={NOTIFICATIONS_BY_JOB}
          variables={{ jobId: jobId }}
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
          <Typography>No Notifications</Typography>
        )}
      </Paper>
    </Column>
  );
}
