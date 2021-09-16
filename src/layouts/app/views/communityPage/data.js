import gql from 'graphql-tag';

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
