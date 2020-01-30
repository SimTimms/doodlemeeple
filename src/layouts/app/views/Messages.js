import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';

export function Messages() {
  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div>
        <Typography variant="h6" color="textPrimary">
          Notifications
        </Typography>
        <Typography color="textPrimary" gutterBottom>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        </Typography>
        <Typography variant="h6" color="textPrimary">
          Projects
        </Typography>
        <Typography color="textPrimary" gutterBottom>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        </Typography>
        <Typography variant="h6" color="textPrimary">
          Messages
        </Typography>
        <Typography color="textPrimary" gutterBottom>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        </Typography>
        <Typography variant="h6" color="textPrimary">
          Community
        </Typography>
        <Typography color="textPrimary" gutterBottom>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        </Typography>
      </div>
    </Slide>
  );
}
