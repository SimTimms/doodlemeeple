import gql from 'graphql-tag';

export const PROFILE = gql`
  {
    profile {
      name
      summary
      profileBG
      profileBGStyle
      profileImg
      profileImgStyle
      autosave
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
      showreel
      type
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
        image
      }
    }
  }
`;
