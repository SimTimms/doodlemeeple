import React from 'react';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Form, FormInput } from '../../../components/form';
import { styles } from './styles';
import ActionButton from '../components';
import Slide from '@material-ui/core/Slide';
import { Link } from 'react-router-dom';

export default function LoginCard() {
  const classes = styles();
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

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
              Login
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
            <Link
              to="/app/dashboard"
              style={{ maxWidth: 326, width: '100%', lineHeight: 0.6 }}
              className={classes.buttonCentre}
            >
              <ActionButton name="Login" />
            </Link>
          </CardContent>
        </Card>
      </div>
    </Slide>
  );
}
