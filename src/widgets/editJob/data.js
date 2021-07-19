import gql from 'graphql-tag';

export const UPDATE_JOB = gql`
  mutation UpdateJob(
    $_id: MongoID!
    $contactEmail: String
    $name: String
    $img: String
    $summary: String
    $location: String
    $showreel: String
    $type: String
    $creativeSummary: String
    $submitted: String
    $genre: String
    $scope: String
    $mechanics: String
    $timeframe: String
    $gallery: MongoID
    $budget: String
    $extra: String
    $funded: Boolean
    $speculative: Boolean
    $termsAccepted: Boolean
    $isPublic: Boolean
    $inLieu: Boolean
    $keywords: [String]
  ) {
    jobUpdateById(
      record: {
        _id: $_id
        contactEmail: $contactEmail
        name: $name
        img: $img
        summary: $summary
        location: $location
        mechanics: $mechanics
        showreel: $showreel
        funded: $funded
        speculative: $speculative
        inLieu: $inLieu
        type: $type
        termsAccepted: $termsAccepted
        creativeSummary: $creativeSummary
        submitted: $submitted
        gallery: $gallery
        keywords: $keywords
        timeframe: $timeframe
        extra: $extra
        budget: $budget
        isPublic: $isPublic
        scope: $scope
        genre: $genre
      }
    ) {
      recordId
    }
  }
`;

export const SET_PUBLIC_JOB = gql`
  mutation UpdateJob($_id: MongoID!, $isPublic: Boolean) {
    jobUpdateById(record: { _id: $_id, isPublic: $isPublic }) {
      recordId
    }
  }
`;

export const REMOVE_JOB = gql`
  mutation RemoveJob($id: MongoID!) {
    jobRemoveById(_id: $id) {
      recordId
    }
  }
`;

export const CREATE_JOB = gql`
  mutation CreateJob($name: String!) {
    jobCreateOne(record: { name: $name }) {
      recordId
      record {
        gallery {
          _id
          images {
            img
          }
        }
      }
    }
  }
`;

export const JOB = gql`
  query GetJob($jobId: MongoID!) {
    jobById(_id: $jobId) {
      _id
      name
      contactEmail
      keywords
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
      img
      summary
      location
      creativeSummary
      submitted
      paid
      gallery {
        _id
        summary
        images {
          _id
          img
        }
      }
      showreel
      type
      createdAt
    }
  }
`;
