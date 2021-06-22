import React from 'react';
import { Typography } from '@material-ui/core';
import {
  CardComponent,
  Column,
  Divider,
  DividerMini,
} from '../../../../imports/sharedComponents';
import { themeStyles } from '../../../../imports/sharedStyles';
import { sharedStyles } from '../sharedStyles';
import { LoginForm } from '../../components';
const CHECKING = 'Checking...';

export default function LoginPage({ history }) {
  const classes = sharedStyles();
  const themeClasses = themeStyles();
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [errors, setError] = React.useState({
    passwordError: null,
    noUserError: null,
  });
  const [loginStatus, setStatus] = React.useState('Login');

  function loginSubmit(LoginMutation) {
    if (password === '' || email === '') {
      setStatus('Try Again');
      return;
    }

    if (loginStatus !== CHECKING) {
      setStatus('Checking...');
      LoginMutation();
    }
  }

  return (
    <div className={classes.pageWrapper}>
      <CardComponent
        styleOverride={{
          width: 400,
          boxShadow: '5px 5px 20px rgba(0,0,0,0.2)',
        }}
      >
        <Column>
          <Typography variant="h5">Welcome</Typography>
          <Typography>Please Login</Typography>
        </Column>
        <Column>
          <LoginForm
            parameters={{
              email,
              password,
              history,
              setStatus,
              setError,
              errors,
              setEmail,
              loginSubmit,
              setPassword,
              loginStatus,
            }}
          />
        </Column>
        <Divider />
        <Column>
          <Typography
            component="p"
            className={themeClasses.textButton}
            color="primary"
            onClick={() => history.push('/new-password')}
          >
            Reset Password
          </Typography>
          <DividerMini />
          <Typography
            component="p"
            className={themeClasses.textButton}
            color="primary"
            onClick={() => history.push('/register')}
          >
            Register
          </Typography>
        </Column>
      </CardComponent>
    </div>
  );
}
