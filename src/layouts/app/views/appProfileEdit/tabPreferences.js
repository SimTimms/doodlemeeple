import React from 'react';
import { Typography } from '@material-ui/core';

import {
  Paper,
  Availability,
  Speculative,
  Royalties,
  Funded,
  Divider,
} from '../../../../components';

export default function TabPreferences({ profile }) {
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
      <Availability available={profile.available} />
      <Speculative acceptsSpeculative={profile.acceptsSpeculative} />
      <Royalties royalties={profile.acceptsRoyalties} />
      <Funded funded={profile.acceptsUnfunded} />
    </Paper>
  );
}
