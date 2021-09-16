import gql from 'graphql-tag';

export const CLOSE_JOB = gql`
  mutation closeJob($jobId: MongoID!) {
    closeJob(_id: $jobId) {
      _id
    }
  }
`;

export const OPEN_JOB = gql`
  mutation openJob($jobId: MongoID!) {
    openJob(_id: $jobId) {
      _id
    }
  }
`;

export const PUBLISH_JOB = gql`
  mutation jobUpdateById($_id: MongoID!, $approved: Boolean) {
    jobUpdateById(record: { _id: $_id, approved: $approved }) {
      recordId
    }
  }
`;
