import gql from 'graphql-tag';

export const REMOVE_INVITE = gql`
  mutation RemoveInvite($_id: MongoID!) {
    inviteRemoveById(_id: $_id) {
      recordId
    }
  }
`;

export const SUBMIT_BRIEF = gql`
  mutation SubmitBrief($jobId: MongoID!) {
    submitBrief(_id: $jobId) {
      _id
    }
  }
`;
