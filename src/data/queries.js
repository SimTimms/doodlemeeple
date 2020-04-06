import gql from 'graphql-tag';

export const PROFILE = gql`
  {
    profile {
      id
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

export const PROFILE_PREVIEW = gql`
  query ProfilePreview($userId: String!) {
    profilePreview(userId: $userId) {
      id
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

export const SECTIONS_PREVIEW = gql`
  query SectionsPreview($userId: String!) {
    sectionsPreview(userId: $userId) {
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
