import gql from 'graphql-tag';

export const PROFILE = gql`
  {
    profile {
      name
      summary
    }
  }
`;
