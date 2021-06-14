import gql from 'graphql-tag';

export const UPDATE_JOB = gql`
  mutation UpdateJob(
    $_id: MongoID!
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
    $gallery: MongoID!
    $budget: String
    $extra: String
    $funded: Boolean
    $speculative: Boolean
    $termsAccepted: Boolean
    $inLieu: Boolean
    $keywords: [String]
  ) {
    jobUpdateById(
      record: {
        _id: $_id
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
        scope: $scope
        genre: $genre
      }
    ) {
      recordId
    }
  }
`;

export const SUBMIT_PUBLIC_BRIEF = gql`
  mutation SubmitPublicBrief($jobId: MongoID!) {
    submitPublicBrief(_id: $jobId) {
      _id
    }
  }
`;

export const DECLINE_INVITE = gql`
  mutation DeclineInvite($_id: MongoID!) {
    declineInvite(_id: $_id) {
      _id
    }
  }
`;

export const CLOSE_JOB = gql`
  mutation closeJob($_id: MongoID!) {
    closeJob(_id: $_id) {
      _id
    }
  }
`;

export const COMPLETE_JOB = gql`
  mutation completeJob($_id: MongoID!) {
    completeJob(_id: $_id) {
      _id
    }
  }
`;

export const CLOSE_EARLY = gql`
  mutation closeEarly($_id: MongoID!) {
    closeEarly(_id: $_id)
  }
`;

export const CREATE_JOB = gql`
  mutation CreateJob($name: String!) {
    jobCreateOne(record: { name: $name }) {
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
