import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Form, FormInput } from '../../components';
import { styles } from './styles';

export default function RegisterCard() {
  const classes = styles();
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Register on DoodleMeeple
        </Typography>
      </CardContent>
      <CardContent>
        <Form>
          <FormInput
            fieldName="name"
            fieldValue={name}
            setFieldValue={setName}
          />
          <FormInput
            fieldName="emailAddress"
            fieldValue={email}
            setFieldValue={setEmail}
          />
        </Form>
      </CardContent>
      <CardActions>
        <Button size="small">Next</Button>
      </CardActions>
    </Card>
  );
}
