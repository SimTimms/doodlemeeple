import gql from 'graphql-tag';

export const PROFILE = gql`
  {
    profile {
      name
      summary
      profileBG
      profileImg
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
      linkTo
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
      notableProjects {
        id
        summary
      }
      testimonials {
        id
        name
        summary
      }
    }
  }
`;
