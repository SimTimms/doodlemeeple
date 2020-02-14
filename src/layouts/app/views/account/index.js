import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';

export function Account() {
  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div>
        <Typography variant="h6" color="textPrimary">
          Account
        </Typography>
        <Typography color="textPrimary" gutterBottom>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        </Typography>
        <Typography variant="h6" color="textPrimary">
          Stripe
        </Typography>
        <Typography color="textPrimary" gutterBottom>
          Your stripe details
        </Typography>
        <Typography variant="h6" color="textPrimary">
          Email Address
        </Typography>
        <Typography color="textPrimary" gutterBottom>
          Your email address
        </Typography>
        <Typography variant="h6" color="textPrimary">
          Password
        </Typography>
        <Typography color="textPrimary" gutterBottom>
          Reset your password
        </Typography>
      </div>
    </Slide>
  );
}
