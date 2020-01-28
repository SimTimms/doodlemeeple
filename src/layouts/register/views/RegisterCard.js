import React from 'react';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Form, FormInput } from '../../../components/form';
import { styles } from './styles';
import ActionButton from '../components';

export default function RegisterCard({ setPage }) {
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
        <Typography variant="body2" component="p">
          We need a bit of information to get started
        </Typography>
      </CardContent>
      <Divider />
      <CardContent className={classes.cardContentCenter}>
        <Form width={200}>
          <FormInput
            fieldName="name"
            fieldTitle="Name"
            fieldValue={name}
            setFieldValue={setName}
          />
          <FormInput
            fieldName="emailAddress"
            fieldTitle="Email"
            fieldValue={email}
            setFieldValue={setEmail}
          />
        </Form>
      </CardContent>
      <Divider />
      <CardContent className={classes.cardContentCenter}>
        <ActionButton
          name="Register"
          onClick={() => {
            setPage(1);
          }}
        />
      </CardContent>
    </Card>
  );
}
