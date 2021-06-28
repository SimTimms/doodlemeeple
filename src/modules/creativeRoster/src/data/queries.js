import gql from 'graphql-tag';

export const FAVOURITES = gql`
  {
    profile {
      favourites {
        _id
        receiver {
          _id
        }
      }
    }
  }
`;

export const CREATIVES = gql`
  query GetCreatives($type: [String], $job: MongoID, $page: Int) {
    getCreatives(type: $type, page: $page, job: $job) {
      _id
      name
      summary
      profileBG
      profileImg
      badges {
        badgeType
        link
        badgeIcon
        description
      }
      viewCount
      responsePercent
      likedMe {
        _id
        receiver {
          _id
        }
        user {
          _id
        }
      }
    }
  }
`;
