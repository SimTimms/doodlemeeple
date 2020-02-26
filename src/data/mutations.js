import gql from 'graphql-tag';

export const SIGNUP_MUTATION = gql`
  mutation SignupMutation($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      token
      user {
        id
      }
    }
  }
`;

export const UPDATE_USER_MUTATION = gql`
  mutation UpdateUserMutation(
    $name: String!
    $summary: String
    $profileBG: String
    $sections: [SectionInput]
  ) {
    updateUser(
      name: $name
      summary: $summary
      profileBG: $profileBG
      sections: $sections
    ) {
      id
    }
  }
`;

export const UPDATE_SECTION_MUTATION = gql`
  mutation UpdateSectionMutation($id: String!, $section: SectionInput) {
    updateSection(id: $id, section: $section) {
      id
    }
  }
`;

export const REMOVE_SECTION_MUTATION = gql`
  mutation RemoveSectionMutation($id: String!) {
    removeSection(id: $id)
  }
`;

export const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
      }
    }
  }
`;

export const PASSWORD_FORGOT_MUTATION = gql`
  mutation PasswordForgotMutation($email: String!) {
    passwordForgot(email: $email)
  }
`;

export const PASSWORD_RESET_MUTATION = gql`
  mutation PasswordResetMutation($password: String!, $token: String!) {
    passwordReset(password: $password, token: $token)
  }
`;
