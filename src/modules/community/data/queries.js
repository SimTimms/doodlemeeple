import gql from 'graphql-tag';

export const CREATIVE_MINIS = gql`
  query CreativeMinis($count: Int) {
    creativeMinis(count: $count) {
      _id
      name
      profileBG
      profileImg
      sections {
        type
      }
    }
  }
`;
