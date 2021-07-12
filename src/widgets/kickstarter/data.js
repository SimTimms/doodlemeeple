import gql from 'graphql-tag';

export const FEATURED_KICKSTARTER_WIDGET = gql`
  {
    featuredKickstarterWidget {
      _id
      name
      summary
      featuredImage
      url
    }
  }
`;

export const REMOVE_KICKSTARTER = gql`
  mutation kickstarterRemoveById($_id: MongoID!) {
    kickstarterRemoveById(_id: $_id) {
      recordId
    }
  }
`;
export const KICKSTARTER_WIDGET = gql`
  {
    kickstarterWidget {
      _id
      name
      summary
      featuredImage
      url
    }
  }
`;

export const MY_KICKSTARTERS = gql`
  {
    myKickstarters {
      _id
      name
      summary
      featuredImage
      url
      showreel
    }
  }
`;

export const CREATE_KICKSTARTER = gql`
  mutation kickstarterCreateOne(
    $name: String
    $summary: String
    $url: String
    $featuredImage: String
    $showreel: String
  ) {
    kickstarterCreateOne(
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

export const UPDATE_KICKSTARTER = gql`
  mutation kickstarterUpdateById(
    $_id: MongoID!
    $name: String
    $summary: String
    $url: String
    $featuredImage: String
    $showreel: String
  ) {
    kickstarterUpdateById(
      record: {
        _id: $_id
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
