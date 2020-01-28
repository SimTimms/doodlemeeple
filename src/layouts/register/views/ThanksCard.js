import React from 'react';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { styles } from './styles';
import ActionButton from '../components';
import { Link } from 'react-router-dom';

export default function RegisterCard({ setPage }) {
  const classes = styles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Thank You
        </Typography>
        <Typography variant="body2" component="p">
          You'll receive an email any moment now, simply follow the instructions
          to complete your registration
        </Typography>
      </CardContent>
      <Divider />

      <CardContent className={classes.cardContentCenter}>
        <Link to="/">
          <ActionButton linkTo="/d" name="OK" />
        </Link>
      </CardContent>
    </Card>
  );
}
