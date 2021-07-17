import gql from 'graphql-tag';

export const CLOSE_JOB = gql`
  mutation closeJob($jobId: MongoID!) {
    closeJob(_id: $jobId) {
      _id
    }
  }
`;
