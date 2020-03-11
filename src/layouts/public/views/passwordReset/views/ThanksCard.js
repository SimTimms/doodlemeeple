import React from 'react';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Slide from '@material-ui/core/Slide';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { styles } from './styles';
import { sharedStyles } from '../../styles';
import clsx from 'clsx';

export default function RegisterCard() {
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
          <CardContent style={{ padding: 5 }}>
            <Typography
              variant="h1"
              color="textPrimary"
              style={{ textAlign: 'center' }}
            >
              Thank You
            </Typography>
            <Typography
              variant="body1"
              component="p"
              style={{ textAlign: 'center' }}
              className={classes.description}
            >
              Your password has been changed, you can now login
            </Typography>
          </CardContent>
          <Divider />

          <CardContent className={classes.cardContentCenter}>
            <Link to="/login">
              <Button variant="contained" color="primary">
                Login
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </Slide>
  );
}
