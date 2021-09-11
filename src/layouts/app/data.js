import gql from 'graphql-tag';

export const STATS = gql`
  query activityLogMany {
    activityLogMany(sort: CREATEDAT__UPDATEDAT_DESC, limit: 100) {
      action
      value
      createdAt
      actionBy {
        _id
        email
      }
      user {
        _id
        email
      }
    }
  }
`;
