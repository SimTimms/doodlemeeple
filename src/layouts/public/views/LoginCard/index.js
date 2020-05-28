import React from 'react';
import { Link } from 'react-router-dom';
import { styles } from './styles';
import {
  Card,
  Divider,
  CardContent,
  Button,
  Typography,
  Slide,
  useMediaQuery,
} from '@material-ui/core';
import { Form, FormInput, ErrorBox } from '../../../../components';
import { sharedStyles } from '../styles';
import { Mutation } from 'react-apollo';
import { LOGIN_MUTATION } from '../../../../data/mutations';
import { PROFILE_EMAIL, PROFILE_PASSWORD } from '../../../../utils/dataLengths';
import Cookies from 'js-cookie';
import { readableErrors } from '../../../../utils/readableErrors';
import jwtDecode from 'jwt-decode';

import clsx from 'clsx';
const CHECKING = 'Checking...';

export default function LoginCard({ history, forwardTo }) {
  const classes = { ...styles(), ...sharedStyles() };
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [errors, setError] = React.useState({
    passwordError: null,
    noUserError: null,
  });
  const [loginStatus, setStatus] = React.useState('Login');
  const mobile = useMediaQuery('(max-width:800px)');

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
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.cardWrapper}>
        <Card
          className={clsx({
            [classes.card]: true,
            [classes.cardMobile]: mobile,
          })}
        >
          <CardContent>
            <Typography
              variant="h1"
              color="textPrimary"
              style={{ textAlign: 'center' }}
            >
              Welcome
            </Typography>
            <Typography
              variant="body1"
              component="p"
              style={{ textAlign: 'center' }}
              className={classes.description}
            >
              Please login
            </Typography>
          </CardContent>
          <Divider />
          <CardContent className={classes.cardContentCenter}></CardContent>
          <CardContent
            className={classes.cardContentCenter}
            style={{ paddingTop: 0 }}
          >
            <Mutation
              mutation={LOGIN_MUTATION}
              variables={{ email, password }}
              onCompleted={async (data) => {
                if (data.login.token) {
                  const tokenDecode = jwtDecode(data.login.token);
                  await Cookies.set('token', data.login.token, { expires: 7 });
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
                    history.replace('/app/dashboard');
                  }
                }
              }}
              onError={(error) => {
                setStatus('Login');
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
                        password
                          ? `(${PROFILE_PASSWORD - password.length})`
                          : ''
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
                    <Button
                      onClick={() => {
                        loginSubmit(LoginMutation);
                      }}
                      variant="contained"
                      color="primary"
                      style={{ width: 180, marginTop: 20 }}
                    >
                      {loginStatus}
                    </Button>
                  </Form>
                );
              }}
            </Mutation>
            <Button
              type="button"
              onClick={() => {
                history.push('/password-forgot');
              }}
              style={{ color: '#aaa', textTransform: 'none' }}
            >
              Forgot Password
            </Button>
          </CardContent>
          <Divider />
          <CardContent
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
            className={classes.cardContentCenter}
          >
            <Typography
              component="p"
              style={{ textAlign: 'center', fontSize: 12 }}
              color="primary"
            >
              Don't have an account?
            </Typography>
            <Link to="/register">
              <Button
                type="button"
                color="primary"
                style={{
                  width: 80,
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: 16,
                  padding: 0,
                }}
              >
                Register
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </Slide>
  );
}
