import gql from 'graphql-tag';

export const FEATURED_CREATIVES_WIDGET = gql`
  {
    featuredCreativesWidget {
      _id
      lastOn
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
