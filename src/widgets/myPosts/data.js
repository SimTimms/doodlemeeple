import gql from 'graphql-tag';

export const REMOVE_MY_POST = gql`
  mutation myPostRemoveById($_id: MongoID!) {
    myPostRemoveById(_id: $_id) {
      recordId
    }
  }
`;

export const MY_POST_BY_ID = gql`
  query myPostById($_id: MongoID!) {
    myPostById(_id: $_id) {
      _id
      createdAt
      name
      summary
      featuredImage
      url
      approved
      showreel
      tags
    }
  }
`;

export const GAME_POSTS_WIDGET = gql`
  query myPostMany($gameId: MongoID) {
    myPostMany(
      filter: { game: $gameId }
      limit: 12
      sort: CREATEDAT__UPDATEDAT_DESC
    ) {
      _id
      createdAt
      name
      summary
      featuredImage
      url
      approved
      user {
        name
        _id
        profileImg
      }
    }
  }
`;

export const MY_POSTS_WIDGET = gql`
  {
    myPostsWidget {
      _id
      createdAt
      name
      summary
      featuredImage
      showreel
      url
      tags
      user {
        _id
        name
        profileImg
      }
    }
  }
`;

export const MY_POSTS = gql`
  {
    myPosts {
      _id
      name
      summary
      featuredImage
      url
      showreel
      approved
    }
  }
`;

export const CREATE_MY_POST = gql`
  mutation myPostCreateOne(
    $name: String
    $summary: String
    $url: String
    $featuredImage: String
    $showreel: String
    $type: String
    $game: MongoID
    $tags: [String]
  ) {
    myPostCreateOne(
      record: {
        name: $name
        summary: $summary
        url: $url
        featuredImage: $featuredImage
        showreel: $showreel
        type: $type
        game: $game
        tags: $tags
      }
    ) {
      recordId
      record {
        createdAt
        summary
        _id
        user {
          name
          _id
          profileImg
        }
      }
    }
  }
`;

export const UPDATE_MY_POST = gql`
  mutation myPostUpdateById(
    $_id: MongoID!
    $name: String
    $summary: String
    $url: String
    $featuredImage: String
    $showreel: String
    $approved: Boolean
    $type: String
    $game: MongoID
    $tags: [String]
  ) {
    myPostUpdateById(
      record: {
        _id: $_id
        name: $name
        summary: $summary
        url: $url
        featuredImage: $featuredImage
        showreel: $showreel
        approved: $approved
        type: $type
        game: $game
        tags: $tags
      }
    ) {
      recordId
    }
  }
`;
