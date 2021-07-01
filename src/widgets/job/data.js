import gql from 'graphql-tag';

export const JOB_WIDGET = gql`
  query jobWidget($jobId: MongoID!) {
    jobWidget(jobId: $jobId) {
      name
      genre
      keywords
      img
      backgroundImg
      summary
      scope
      mechanics
      timeframe
      budget
      extra
      location
      showreel
      creativeSummary
      gallery {
        _id
        summary
        images {
          img
        }
      }
    }
  }
`;
