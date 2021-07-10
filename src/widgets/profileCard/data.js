import gql from 'graphql-tag';

export const PROFILE_IMAGES = gql`
  query profileImages($userId: MongoID!) {
    profileImages(userId: $userId) {
      img
    }
  }
`;
