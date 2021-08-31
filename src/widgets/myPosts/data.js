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
      url
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
  ) {
    myPostCreateOne(
      record: {
        name: $name
        summary: $summary
        url: $url
        featuredImage: $featuredImage
        showreel: $showreel
      }
    ) {
      recordId
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
      }
    ) {
      recordId
    }
  }
`;
