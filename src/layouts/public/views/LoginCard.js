import React from 'react';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Form, FormInput } from '../../../components/form';
import { styles } from './styles';
import ActionButton from '../components';

export default function LoginCard({ setPage }) {
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
          Login to DoodleMeeple
        </Typography>
      </CardContent>
      <Divider />
      <CardContent className={classes.cardContentCenter}>
        <Form width={200}>
          <FormInput
            fieldName="emailAddress"
            fieldTitle="Email"
            fieldValue={name}
            setFieldValue={setName}
          />
          <FormInput
            fieldName="password"
            fieldTitle="Password"
            fieldValue={email}
            setFieldValue={setEmail}
          />
        </Form>
      </CardContent>
      <Divider />
      <CardContent className={classes.cardContentCenter}>
        <ActionButton
          name="Login"
          onClick={() => {
            setPage(2);
          }}
        />
      </CardContent>
    </Card>
  );
}
