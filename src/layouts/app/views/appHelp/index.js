import React from 'react';
import { useStyles } from './styles';
import { Card, CardContent, Typography, Slide } from '@material-ui/core';
import {
  Column,
  FieldTitleDashboard,
  Meta,
  Divider,
} from '../../../../components';

export default function AppHelp({ history }) {
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
            <FieldTitleDashboard name="Get in Touch" inline={false} a="c" />
            <Meta str="We'd love to hear from you" />
            <Divider />
            <Typography
              variant="body1"
              color="textPrimary"
              style={{ textAlign: 'center' }}
              gutterBottom
            >
              Visit our FAQ page for answers to some of the most common
              questions:
              <a
                href={`${process.env.REACT_APP_WEBSITE}/faq`}
                style={{ color: '#444' }}
              >
                {`${process.env.REACT_APP_WEBSITE}/faq`}
              </a>
            </Typography>
            <Typography
              variant="body1"
              color="textPrimary"
              style={{ textAlign: 'center' }}
              gutterBottom
            >
              or email us directly
            </Typography>
            <Typography
              variant="body1"
              color="textPrimary"
              style={{ textAlign: 'center' }}
              gutterBottom
            >
              <a
                href={`mailto:${process.env.REACT_APP_INFO_EMAIL}`}
                style={{ color: '#444' }}
              >
                {process.env.REACT_APP_INFO_EMAIL}
              </a>
            </Typography>
          </Column>
        </CardContent>
      </Card>
    </Slide>
  );
}
