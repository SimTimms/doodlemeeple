import React from 'react';
import { useMutation } from '@apollo/client';
import {
  Form,
  FormInput,
  ErrorBox,
  IconButton,
} from '../../../imports/sharedComponents';
import { LOGIN_MUTATION } from '../../data';
import Cookies from 'js-cookie';
import {
  readableErrors,
  PROFILE_NAME,
  PROFILE_EMAIL,
  PROFILE_PASSWORD,
} from '../../../imports/sharedUtils';
import jwtDecode from 'jwt-decode';

export default function LoginForm({ parameters }) {
  const {
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
  } = parameters;
  const [loginMutation, { loading }] = useMutation(LOGIN_MUTATION, {
    variables: { email: email, password: password },
    async onCompleted({ userLogin }) {
      console.log('hd');
      const { token } = userLogin;
      if (token) {
        const tokenDecode = jwtDecode(token);
        await Cookies.set('token', token, { expires: 7 });
        await Cookies.set('userId', tokenDecode.userId, {
          expires: 7,
        });
        history.replace('/dashboard');
      }
    },
    onError(error) {
      console.log(error);
      setStatus(`Try Again`);
      setError(readableErrors(error, errors));
    },
  });

  return (
    <Form width={200} onSubmit={(item) => alert}>
      <FormInput
        fieldName="emailAddress"
        fieldValue={email}
        setFieldValue={setEmail}
        fieldTitle={`Email ${email ? `(${PROFILE_EMAIL - email.length})` : ''}`}
        inputProps={{ maxLength: PROFILE_EMAIL }}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            loginSubmit(loginMutation);
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
            loginSubmit(loginMutation);
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
          loginSubmit(loginMutation);
        }}
        styleOverride={null}
        type="button"
        iconPos="right"
      />
    </Form>
  );
}
