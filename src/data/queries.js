import gql from 'graphql-tag';

export const PROFILE = gql`
  {
    profile {
      name
      summary
      profileBG
      sections {
        id
        summary
        gallery {
          id
          summary
          images
        }
      }
    }
  }
`;

export const NOTIFICATIONS = gql`
  {
    getNotifications {
      message
      id
      icon
      title
      createdAt
    }
  }
`;
