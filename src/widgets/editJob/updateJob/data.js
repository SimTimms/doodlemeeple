import gql from 'graphql-tag';

export const SUBMIT_BRIEF_SINGLE = gql`
  mutation SubmitBriefSingle($jobId: MongoID!, $userId: MongoID!) {
    submitBriefSingle(_id: $jobId, userId: $userId) {
      _id
    }
  }
`;

export const CHOSEN_CREATIVE = gql`
  query userById($userId: MongoID!) {
    userById(_id: $userId) {
      _id
      name
      summary
      profileBG
      profileImg
      sections {
        type
      }
      badges {
        badgeType
        link
        badgeIcon
        description
      }
      facebook
      twitter
      linkedIn
      instagram
      website
      publicEmail
    }
  }
`;
