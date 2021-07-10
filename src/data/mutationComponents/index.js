import React from 'react';
import { Mutation } from 'react-apollo';
import { Form, FormInput, ErrorBox, IconButton } from '../../components';
import * as AUTH from '../authorisation';
import * as LENGTHS from '../../utils/dataLengths';
import Cookies from 'js-cookie';
import { readableErrors } from '../../utils/readableErrors';
import jwtDecode from 'jwt-decode';

export const MutationLogin = ({ parameters }) => {
  const {
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
  } = parameters;
  return (
    <Mutation
      mutation={AUTH.LOGIN_MUTATION}
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
                email ? `(${LENGTHS.PROFILE_EMAIL - email.length})` : ''
              }`}
              inputProps={{ maxLength: LENGTHS.PROFILE_EMAIL }}
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
                  ? `(${LENGTHS.PROFILE_PASSWORD - password.length})`
                  : ''
              }`}
              inputProps={{ maxLength: LENGTHS.PROFILE_PASSWORD }}
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
  );
};
