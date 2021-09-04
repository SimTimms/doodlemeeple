import gql from 'graphql-tag';

export const GAME_WIDGET_BY_USER = gql`
  query gameMany($userId: MongoID!) {
    gameMany(filter: { user: $userId, approved: true }) {
      _id
      name
      summary
      featuredImage
      url
      price
      user {
        _id
        name
        profileImg
      }
      webshop {
        _id
        name
        url
        price
      }
      gamePost {
        name
        url
        video
        img
        summary
      }
    }
  }
`;
