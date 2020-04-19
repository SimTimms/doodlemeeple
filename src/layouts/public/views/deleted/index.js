import React from 'react';
import { Link } from 'react-router-dom';
import { styles } from './styles';
import {
  Card,
  Divider,
  CardContent,
  Button,
  Typography,
  Slide,
  useMediaQuery,
} from '@material-ui/core';
import { sharedStyles } from '../styles';

import clsx from 'clsx';

export default function Deleted() {
  const classes = { ...styles(), ...sharedStyles() };
  const mobile = useMediaQuery('(max-width:800px)');

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.cardWrapper}>
        <Card
          className={clsx({
            [classes.card]: true,
            [classes.cardMobile]: mobile,
          })}
        >
          <CardContent>
            <Typography
              variant="h1"
              color="textPrimary"
              style={{ textAlign: 'center' }}
            >
              It's Gone
            </Typography>
            <Typography
              variant="body1"
              component="p"
              style={{ textAlign: 'center' }}
              className={classes.description}
            >
              Your account has been deleted
            </Typography>
          </CardContent>
          <Divider />
          <CardContent
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
            className={classes.cardContentCenter}
          >
            <Link to="/login">
              <Button
                type="button"
                color="primary"
                style={{
                  width: 80,
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: 16,
                  padding: 0,
                }}
              >
                Back
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </Slide>
  );
}
