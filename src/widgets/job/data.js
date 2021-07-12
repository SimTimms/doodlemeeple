import gql from 'graphql-tag';

export const JOB_RESPONSES_WIDGET = gql`
  query jobResponsesWidget($jobId: MongoID!) {
    jobResponsesWidget(jobId: $jobId) {
      _id
      user {
        _id
        profileImg
        name
      }
      job {
        _id
        name
      }
      status
    }
  }
`;

export const JOB_BOARD_MINI_WIDGET = gql`
  query jobBoardMiniWidget {
    jobBoardMiniWidget {
      _id
      name
      genre
      summary
      isPublic
      isExternal
      externalLink
      externalSource
      sourceLink
    }
  }
`;

export const JOB_BOARD_WIDGET = gql`
  query jobBoardWidget {
    jobBoardWidget {
      _id
      isPublic
      isExternal
      externalLink
      externalSource
      sourceLink
      approved
      name
      contactEmail
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

export const JOB_WIDGET = gql`
  query jobWidget($jobId: MongoID!) {
    jobWidget(jobId: $jobId) {
      _id
      isPublic
      approved
      name
      contactEmail
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
      submitted
      gallery {
        _id
        summary
        images {
          img
        }
      }
      user {
        _id
      }
    }
  }
`;