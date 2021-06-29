import gql from 'graphql-tag';

export const PROFILE_IMAGES = gql`
  query profileImages($userId: MongoID!) {
    profileImages(userId: $userId) {
      img
    }
  }
`;

export const FEATURED_CREATIVES_WIDGET = gql`
  {
    featuredCreativesWidget {
      _id
      name
      summary
      profileBG
      profileImg
      sections {
        type
      }
      badges {
        badgeType
        link
        badgeIcon
        description
      }
      facebook
      twitter
      linkedIn
      instagram
      website
      publicEmail
    }
  }
`;

export const CREATIVE_ROSTER_WIDGET = gql`
  {
    creativeRosterWidget {
      _id
      name
      profileBG
      profileImg
      sections {
        type
      }
      badges {
        badgeType
        link
        badgeIcon
        description
      }
      facebook
      twitter
      linkedIn
      instagram
      website
      publicEmail
    }
  }
`;
