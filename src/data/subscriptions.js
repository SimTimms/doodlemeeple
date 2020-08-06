import gql from 'graphql-tag';

export const NEW_MESSAGES = gql`
  subscription newMessage($jobId: MongoID!, $userId: MongoID!, $pageNbr: Int!) {
    messageSub(jobId: $jobId, userId: $userId, pageNbr: $pageNbr) {
      id
      messageStr
      createdAt
      sender {
        id
        name
        profileImg
      }
    }
  }
`;
