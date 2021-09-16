import React from 'react';
import { Typography } from '@material-ui/core';
import { Query } from 'react-apollo';
import { PROFILE } from '../../../../data/queries';
import {
  Paper,
  Availability,
  Speculative,
  Royalties,
  Funded,
  Divider,
} from '../../../../components';

export default function TabPreferences() {
  return (
    <Query query={PROFILE} fetchPolicy="network-only">
      {({ data }) => {
        if (!data) {
          return null;
        }
        return (
          <Paper>
            <Typography variant="h5" align="center">
              We know your time is precious.
            </Typography>
            <Divider />
            <Typography align="center">
              We'll try to ensure you only appear to creators who match your
              preferences.
            </Typography>
            <Divider />
            <Availability available={data.profile.available} />
            <Speculative acceptsSpeculative={data.profile.acceptsSpeculative} />
            <Royalties royalties={data.profile.acceptsRoyalties} />
            <Funded funded={data.profile.acceptsUnfunded} />
          </Paper>
        );
      }}
    </Query>
  );
}
