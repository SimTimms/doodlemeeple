import gql from 'graphql-tag';

export const JOB_HISTORY = gql`
  query jobHistory {
    jobHistory {
      _id
      name
      genre
      scope
      isPublic
      mechanics
      timeframe
      budget
      extra
      funded
      speculative
      inLieu
      termsAccepted
      gallery {
        _id
        summary
        images {
          _id
          img
        }
      }
      summary
      location
      creativeSummary
      user {
        _id
        name
        profileImg
      }
      showreel
      type
      createdAt
    }
  }
`;
