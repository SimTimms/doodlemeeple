import gql from 'graphql-tag';

export const CREATIVE_ROSTER_WIDGET = gql`
  query creativeRosterWidget($page: Int, $filter: [String]) {
    creativeRosterWidget(page: $page, filter: $filter) {
      _id
      name
      profileBG
      lastOn
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
