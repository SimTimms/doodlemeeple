import gql from 'graphql-tag';

const SIGNUP_MUTATION = gql`
  mutation SignupMutation(
    $name: String!
    $email: String!
    $password: String!
    $campaignId: String
    $available: Boolean
  ) {
    userCreateOne(
      record: {
        name: $name
        email: $email
        password: $password
        campaignId: $campaignId
        available: $available
      }
    ) {
      recordId
    }
  }
`;

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    userLogin(email: $email, password: $password) {
      token
    }
  }
`;

const PASSWORD_FORGOT_MUTATION = gql`
  mutation PasswordForgotMutation($email: String!) {
    passwordForgot(email: $email) {
      _id
    }
  }
`;

const PASSWORD_RESET_MUTATION = gql`
  mutation PasswordResetMutation($password: String!, $token: String!) {
    passwordReset(password: $password, token: $token)
  }
`;

export {
  SIGNUP_MUTATION,
  LOGIN_MUTATION,
  PASSWORD_FORGOT_MUTATION,
  PASSWORD_RESET_MUTATION,
};
