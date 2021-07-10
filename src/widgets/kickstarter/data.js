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

export const CREATE_KICKSTARTER = gql`
  mutation kickstarterCreateOne($name: String!) {
    kickstarterCreateOne(record: { name: $name }) {
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
