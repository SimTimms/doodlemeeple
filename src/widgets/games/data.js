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

export const GAME_BY_ID = gql`
  query gameById($_id: MongoID!) {
    gameById(_id: $_id) {
      _id
      name
      summary
      featuredImage
      url
      price
      webshop {
        _id
        name
        url
        price
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
  ) {
    gameCreateOne(
      record: {
        name: $name
        summary: $summary
        url: $url
        featuredImage: $featuredImage
        showreel: $showreel
        webshop: $webshop
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
      }
    ) {
      recordId
    }
  }
`;
