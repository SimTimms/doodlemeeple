import gql from 'graphql-tag';

export const FEATURED_GAME_WIDGET = gql`
  {
    featuredGameWidget {
      _id
      name
      summary
      featuredImage
      url
    }
  }
`;

export const REMOVE_GAME = gql`
  mutation gameRemoveById($_id: MongoID!) {
    gameRemoveById(_id: $_id) {
      recordId
    }
  }
`;

export const POSTS_BY_GAME = gql`
  query postsByGame($_id: MongoID!) {
    postsByGame(_id: $_id) {
      name
      logo
      featuredImage
      summary
      url
      showreel
      type
      approved
      user {
        _id
        name
        profileImg
      }
    }
  }
`;

export const GAME_BY_ID = gql`
  query gameById($_id: MongoID!) {
    gameById(_id: $_id) {
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

export const GAME_WIDGET = gql`
  {
    gameWidget {
      _id
      name
      summary
      featuredImage
      url
      price
      user {
        _id
        name
      }
      webshop {
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

export const MY_GAMES = gql`
  {
    myGames {
      _id
      name
      summary
      featuredImage
      url
      showreel
    }
  }
`;

export const CREATE_GAME = gql`
  mutation gameCreateOne(
    $name: String
    $summary: String
    $url: String
    $featuredImage: String
    $showreel: String
    $webshop: [GameWebshopInput]
    $gamePost: [GameGamePostInput]
  ) {
    gameCreateOne(
      record: {
        name: $name
        summary: $summary
        url: $url
        featuredImage: $featuredImage
        showreel: $showreel
        webshop: $webshop
        gamePost: $gamePost
      }
    ) {
      recordId
    }
  }
`;

export const UPDATE_GAME = gql`
  mutation gameUpdateById(
    $_id: MongoID!
    $name: String
    $summary: String
    $url: String
    $featuredImage: String
    $showreel: String
    $price: String
    $webshop: [GameWebshopInput]
    $gamePost: [GameGamePostInput]
  ) {
    gameUpdateById(
      record: {
        _id: $_id
        name: $name
        summary: $summary
        url: $url
        featuredImage: $featuredImage
        showreel: $showreel
        price: $price
        webshop: $webshop
        gamePost: $gamePost
      }
    ) {
      recordId
    }
  }
`;
