import React from 'react';
import { useStyles } from './styles';
import { Card, CardContent, Typography, Slide } from '@material-ui/core';
import { IconButton, Column } from '../../../../components';

export function ProjectSubmitted({ history }) {
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
          <Column j="center" a="center">
            <Typography
              variant="h4"
              color="textPrimary"
              style={{ textAlign: 'center' }}
              gutterBottom
            >
              Project Submitted
            </Typography>
            <Typography color="textPrimary" style={{ textAlign: 'center' }}>
              You're project will soon be live, pending approval. Your chosen
              creatives have been sent an invite and you should hear back from
              them soon.
            </Typography>
            <IconButton
              title="OK"
              icon=""
              styleOverride={null}
              disabled={false}
              iconPos="right"
              onClickEvent={() => {
                history.push('/app/jobs');
              }}
              color="primary"
              type="button"
            />
          </Column>
        </CardContent>
      </Card>
    </Slide>
  );
}
