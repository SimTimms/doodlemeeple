import React from 'react';
import { Typography } from '@material-ui/core';
import {
  Form,
  FormInput,
  ErrorBox,
  IconButton,
  CardComponent,
  Column,
  Divider,
  DividerMini,
} from '../../../../components';
import { sharedStyles } from '../styles';
import { Mutation } from 'react-apollo';
import { LOGIN_MUTATION } from '../../../../data/mutations';
import { PROFILE_EMAIL, PROFILE_PASSWORD } from '../../../../utils/dataLengths';
import Cookies from 'js-cookie';
import { readableErrors } from '../../../../utils/readableErrors';
import jwtDecode from 'jwt-decode';

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
          <Mutation
            mutation={LOGIN_MUTATION}
            variables={{ email, password }}
            onCompleted={async (data) => {
              const { token } = data.userLogin;

              if (token) {
                const tokenDecode = jwtDecode(token);
                await Cookies.set('token', token, { expires: 7 });
                await Cookies.set('userId', tokenDecode.userId, {
                  expires: 7,
                });

                if (
                  forwardTo !== null &&
                  forwardTo.pathname !== undefined &&
                  forwardTo.pathname !== '/'
                ) {
                  history.replace(forwardTo.pathname);
                } else {
                  history.replace('/app/tasks');
                }
              }
            }}
            onError={(error) => {
              setStatus(`Try Again`);
              setError(readableErrors(error, errors));
            }}
          >
            {(LoginMutation) => {
              return (
                <Form width={200} onSubmit={(item) => alert}>
                  <FormInput
                    fieldName="emailAddress"
                    fieldValue={email}
                    setFieldValue={setEmail}
                    fieldTitle={`Email ${
                      email ? `(${PROFILE_EMAIL - email.length})` : ''
                    }`}
                    inputProps={{ maxLength: PROFILE_EMAIL }}
                    onKeyPress={(event) => {
                      if (event.key === 'Enter') {
                        loginSubmit(LoginMutation);
                      }
                    }}
                  />
                  <FormInput
                    fieldName="password"
                    fieldValue={password}
                    setFieldValue={setPassword}
                    type="password"
                    fieldTitle={`Password ${
                      password ? `(${PROFILE_PASSWORD - password.length})` : ''
                    }`}
                    inputProps={{ maxLength: PROFILE_PASSWORD }}
                    onKeyPress={(event) => {
                      if (event.key === 'Enter') {
                        loginSubmit(LoginMutation);
                      }
                    }}
                  />
                  <ErrorBox errorMsg={errors.passwordError} />
                  <ErrorBox errorMsg={errors.noUserError} />
                  <IconButton
                    title={loginStatus}
                    icon="login"
                    disabled={false}
                    color="primary"
                    onClickEvent={() => {
                      loginSubmit(LoginMutation);
                    }}
                    styleOverride={null}
                    type="button"
                    iconPos="right"
                  />
                </Form>
              );
            }}
          </Mutation>
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
