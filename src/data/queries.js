import gql from 'graphql-tag';

export const GAME = gql`
  query GetGame($gameId: String!) {
    getGame(gameId: $gameId) {
      id
      name
      keywords
      img
      backgroundImg
      summary
      location
      gallery {
        id
        summary
        images {
          img
        }
      }
      showreel
      type
      createdAt
    }
  }
`;

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
      email
      sections {
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
          name
          image
        }
        testimonials {
          id
          name
          summary
          image
        }
      }
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
        name
        image
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
        name
        image
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
