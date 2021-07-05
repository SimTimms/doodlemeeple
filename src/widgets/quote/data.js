import gql from 'graphql-tag';

export const QUOTE_VIEW_WIDGET = gql`
  query contractById($id: MongoID!) {
    contractById(_id: $id) {
      _id
      startDate
      status
      notes
      deadline
      cost
      currency
      user {
        _id
        name
        website
        publicEmail
      }
      job {
        _id
      }
    }
  }
`;
export const QUOTE_WIDGET = gql`
  query quoteWidget {
    quoteWidget {
      _id
      deadline
      startDate
      status
      cost
      job {
        _id
        name
        user {
          _id
          name
          profileImg
        }
      }
    }
  }
`;

export const QUOTE_IN_WIDGET = gql`
  query quoteInWidget {
    quoteInWidget {
      _id
      deadline
      startDate
      status
      cost
      job {
        name
        user {
          _id
          name
        }
      }
    }
  }
`;
