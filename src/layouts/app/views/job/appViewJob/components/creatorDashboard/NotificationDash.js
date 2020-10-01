import React from 'react';
import { Typography } from '@material-ui/core';
import { Query } from 'react-apollo';
import {
  Column,
  NotificationComponent,
  FieldTitleDashboard,
} from '../../../../../../../components';
import { NOTIFICATIONS_BY_JOB } from '../../../../../../../data/queries';

export default function NotificationDash({ jobId }) {
  const [notificationArray, setNotificationArray] = React.useState([]);
  console.log(jobId);
  return (
    <Column w="50%">
      <FieldTitleDashboard name="Notifications" inline={false} />
      <Query
        query={NOTIFICATIONS_BY_JOB}
        variables={{ job: jobId }}
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
    </Column>
  );
}
