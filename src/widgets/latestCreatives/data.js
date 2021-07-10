import gql from 'graphql-tag';

export const LATEST_CREATIVES_WIDGET = gql`
  {
    latestCreativesWidget {
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
