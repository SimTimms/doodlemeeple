import gql from 'graphql-tag';

export const KICKSTARTERS_BY_ID = gql`
  query kickstarterMany($userId: MongoID!) {
    kickstarterMany(filter: { user: $userId, approved: true }) {
      _id
      name
      summary
      featuredImage
      url
    }
  }
`;

export const JOBS_BY_USER = gql`
  query jobMany($userId: MongoID!) {
    jobMany(filter: { user: $userId, approved: true }) {
      _id
      isPublic
      isExternal
      externalLink
      externalSource
      sourceLink
      approved
      name
      contactEmail
      genre
      keywords
      img
      backgroundImg
      summary
      scope
      mechanics
      timeframe
      budget
      extra
      location
      showreel
      creativeSummary
      gallery {
        _id
        summary
        images {
          img
        }
      }
    }
  }
`;

export const GAME_WIDGET_BY_USER = gql`
  query gameMany($userId: MongoID!) {
    gameMany(filter: { user: $userId, approved: true }) {
      _id
      name
      summary
      featuredImage
      url
      price
      user {
        _id
        name
        profileImg
      }
      webshop {
        _id
        name
        url
        price
      }
      gamePost {
        name
        url
        video
        img
        summary
      }
    }
  }
`;
