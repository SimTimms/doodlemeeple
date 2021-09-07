import gql from 'graphql-tag';

export const PROFILE = gql`
  query ProfilePreview($userId: MongoID!) {
    userById(_id: $userId) {
      name
    }
  }
`;
