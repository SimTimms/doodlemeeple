import React from 'react';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { styles } from './styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Slide from '@material-ui/core/Slide';

export default function RegisterCard({ history, setPage }) {
  const classes = styles();

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Card className={classes.card}>
          <CardContent style={{ padding: 5 }}>
            <Typography
              variant="h6"
              color="textPrimary"
              style={{ textAlign: 'center' }}
            >
              Thank You
            </Typography>
            <Typography
              variant="body2"
              component="p"
              style={{ textAlign: 'center' }}
            >
              Your password has been changed, you can now login
            </Typography>
          </CardContent>
          <Divider />

          <CardContent className={classes.cardContentCenter}>
            <Link to="/login">
              <Button variant="contained" color="secondary">
                Login
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </Slide>
  );
}
