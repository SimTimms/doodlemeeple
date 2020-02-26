import gql from 'graphql-tag';

export const PROFILE = gql`
  {
    profile {
      name
      summary
      profileBG
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

export const SECTIONS = gql`
  {
    getSections {
      id
      title
      summary
      gallery {
        id
        summary
        images {
          img
        }
      }
    }
  }
`;
