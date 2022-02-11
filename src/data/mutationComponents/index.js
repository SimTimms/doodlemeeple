import React from 'react';
import { Mutation } from 'react-apollo';
import {
  Form,
  ErrorBox,
  MenuButtonStandard,
  Divider,
  FieldBox,
} from '../../components';
import * as AUTH from '../authorisation';
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
          await Cookies.set('DMtoken', token, { expires: 7 });
          await Cookies.set('DMuserId', tokenDecode.userId, {
            expires: 7,
          });

          if (
            forwardTo !== null &&
            forwardTo.pathname !== undefined &&
            forwardTo.pathname !== '/'
          ) {
            history.replace(forwardTo.pathname);
          } else {
            history.replace('/app/home');
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
            <FieldBox
              value={email}
              title="Email Address"
              maxLength={226}
              onChangeEvent={(e) => {
                setEmail(e);
              }}
              replaceMode={null}
              placeholder="Example: something@email.com"
              info="The email address you used to register with DoodleMeeple"
              warning=""
              size="s"
              multiline={false}
            />
            <Divider />
            <FieldBox
              value={password}
              title="Password"
              maxLength={226}
              onChangeEvent={(e) => {
                setPassword(e);
              }}
              replaceMode={null}
              placeholder="Example: SecretPassword123!"
              info="The password you used to register with DoodleMeeple"
              warning=""
              size="s"
              multiline={false}
              type="password"
            />

            <ErrorBox errorMsg={errors.passwordError} />
            <ErrorBox errorMsg={errors.noUserError} />
            <Divider />
            <MenuButtonStandard
              title={loginStatus}
              onClickEvent={() => {
                loginSubmit(LoginMutation);
              }}
            />
          </Form>
        );
      }}
    </Mutation>
  );
};
