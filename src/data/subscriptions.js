import gql from 'graphql-tag';

export const NEW_MESSAGES = gql`
  subscription newMessage($conversationId: String!) {
    newMessage(conversationId: $conversationId) {
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
