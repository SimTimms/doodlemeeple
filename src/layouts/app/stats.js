import React from 'react';
import { Column, Grid } from '../../components';
import { Query } from 'react-apollo';
import { STATS } from './data';
import { Typography } from '@material-ui/core';
import { timeDifferenceForDate } from '../../utils/dates';
export default function Stats() {
  return (
    <Column>
      <Query query={STATS} fetchPolicy="network-only">
        {({ data, loading }) => {
          return data
            ? data.activityLogMany.map((item) => (
                <Grid cols={5}>
                  <Typography style={{ paddingRight: 10 }}>
                    {timeDifferenceForDate(item.createdAt)}
                  </Typography>
                  <Typography style={{ paddingRight: 10 }}>
                    {item.actionBy ? item.actionBy.email : ''}
                  </Typography>
                  <Typography style={{ paddingRight: 10 }}>
                    {item.action}
                  </Typography>
                  <Typography style={{ paddingRight: 10 }}>
                    {item.user ? item.user.email : ''}
                  </Typography>
                  <Typography style={{ paddingRight: 10 }}>
                    {item.value}
                  </Typography>
                </Grid>
              ))
            : null;
        }}
      </Query>
    </Column>
  );
}
