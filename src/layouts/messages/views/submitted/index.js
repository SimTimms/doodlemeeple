import React from 'react';
import { useStyles } from './styles';
import { Card, CardContent, Typography, Slide } from '@material-ui/core';

export function Submitted() {
  const classes = useStyles();

  return (
    <Slide
      direction="left"
      in={true}
      mountOnEnter
      unmountOnExit
      style={{ width: 700 }}
    >
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h4" color="textPrimary">
            Brief Submitted
          </Typography>
          <Typography color="textPrimary" gutterBottom>
            You're brief will soon be live, pending approval. Your chosen
            creatives have been sent an invite and you should hear back from
            them soon.
          </Typography>
        </CardContent>
      </Card>
    </Slide>
  );
}
