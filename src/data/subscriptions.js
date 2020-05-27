import gql from 'graphql-tag';

export const NEW_MESSAGES = gql`
  subscription {
    newMessage {
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
