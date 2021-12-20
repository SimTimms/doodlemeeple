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
      lastOn
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
  query creativeRosterWidget($page: Int, $filter: [String]) {
    creativeRosterWidget(page: $page, filter: $filter) {
      _id
      name
      profileBG
      priority
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
