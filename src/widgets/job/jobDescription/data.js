import gql from 'graphql-tag';

export const DECLINE_INVITE = gql`
  mutation declineInviteByJob($jobId: MongoID!) {
    declineInviteByJob(jobId: $jobId) {
      _id
    }
  }
`;

export const CREATE_CONTRACT = gql`
  mutation CreateContract(
    $currency: String!
    $cost: String!
    $jobId: MongoID!
    $status: String!
  ) {
    contractCreateOne(
      record: { currency: $currency, cost: $cost, job: $jobId, status: $status }
    ) {
      recordId
      record {
        currency
        cost
        user {
          name
        }
        job {
          _id
          name
          keywords
          user {
            name
          }
        }
        createdAt
        updatedAt
      }
    }
  }
`;

export const JOB_CONTRACT = gql`
  query jobContract($jobId: MongoID!) {
    jobContract(jobId: $jobId) {
      _id
      user {
        _id
      }
      status
    }
  }
`;
