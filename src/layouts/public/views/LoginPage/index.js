import React from 'react';
import { Typography } from '@material-ui/core';
import {
  CardComponent,
  Column,
  Divider,
  DividerMini,
} from '../../../../components';
import { sharedStyles } from '../styles';
import { MutationLogin } from '../../../../data/mutationComponents';

const CHECKING = 'Checking...';

export default function LoginPage({ history, forwardTo }) {
  const classes = sharedStyles();
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
          <Divider />
        </Column>
        <Column>
          <MutationLogin
            parameters={{
              email,
              password,
              forwardTo,
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
            style={{ textAlign: 'center', fontSize: 12, cursor: 'pointer' }}
            color="primary"
            onClick={() => history.push('/password-forgot')}
          >
            Forgotten your password?
          </Typography>
          <DividerMini />
          <Typography
            component="p"
            style={{ textAlign: 'center', fontSize: 12, cursor: 'pointer' }}
            color="primary"
            onClick={() => history.push('/register')}
          >
            Don't have an account?
          </Typography>
        </Column>
      </CardComponent>
    </div>
  );
}
