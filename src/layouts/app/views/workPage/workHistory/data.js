import gql from 'graphql-tag';

export const INVITE_HISTORY = gql`
  query inviteHistory {
    inviteHistory {
      _id
      status
      receiver {
        _id
        name
        profileImg
      }
      sender {
        name
        profileImg
        _id
      }
      job {
        _id
        name
        user {
          _id
          email
          name
          profileImg
        }
      }
    }
  }
`;

export const CONTRACT_HISTORY = gql`
  query contractHistory {
    contractHistory {
      _id
      notes
      deadline
      startDate
      cost
      currency
      status
      updatedAt
      createdAt
      seenByOwner
      user {
        name
        profileImg
        _id
      }
      job {
        _id
        name
        user {
          _id
          email
          name
          profileImg
        }
      }
    }
  }
`;
