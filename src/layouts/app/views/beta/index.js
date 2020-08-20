import React from 'react';
import { useStyles } from './styles';
import { Card, CardContent, Typography, Slide } from '@material-ui/core';
import {
  Column,
  FieldTitleDashboard,
  Meta,
  Divider,
} from '../../../../components';

export default function Beta({ history }) {
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
            <FieldTitleDashboard
              name="DoodleMeeple is in Beta"
              inline={false}
              a="c"
            />
            <Meta str="Tim Simms | August 19th, 2020" />
            <Divider />
            <Typography
              variant="body1"
              color="textPrimary"
              style={{ textAlign: 'center' }}
              gutterBottom
            >
              Although DoodleMeeple is nearing completion it has not yet been
              fully release to the public, we're still finalising workflows,
              squashing bugs and making changes.
            </Typography>
            <Typography
              variant="body1"
              color="textPrimary"
              style={{ textAlign: 'center' }}
              gutterBottom
            >
              If you experience any issues or have any feedback for us we'd love
              to hear from you. Visit the HELP page for details of how to
              contact us.
            </Typography>
          </Column>
        </CardContent>
      </Card>
    </Slide>
  );
}
