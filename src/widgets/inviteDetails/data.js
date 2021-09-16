import gql from 'graphql-tag';

export const INVITE_DETAILS = gql`
  query inviteDetails($jobId: MongoID!) {
    inviteDetails(jobId: $jobId) {
      _id
    }
  }
`;
