import gql from 'graphql-tag';

export const PROFILE = gql`
  {
    profile {
      name
      summary
    }
  }
`;

export const NOTIFICATIONS = gql`
  {
    getNotifications {
      message
    }
  }
`;
