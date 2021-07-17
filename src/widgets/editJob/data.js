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
      gallery {
        _id
        summary
        images {
          _id
          img
        }
      }
      activeContract {
        _id
        notes
        deadline
        startDate
        cost
        currency
        status
        updatedAt
        signedBy {
          _id
          name
        }
        signedDate
        payments {
          _id
          amount
          currency
          status
          paidBy {
            _id
            name
          }
          contract {
            _id
          }
          paymentId
          createdAt
          updatedAt
        }
        user {
          email
          _id
          name
          profileImg
        }
        job {
          _id
          name
          summary
          createdAt
          creativeSummary
          keywords
          gallery {
            _id
            summary
            images {
              _id
              img
            }
          }
          user {
            _id
            email
            name
          }
        }
        paymentTerms {
          _id
          percent
          description
          updatedAt
          paid
          status
        }
      }
      assignedCreative {
        _id
        name
        email
        profileImg
      }
      invites {
        status
        messages
        receiver {
          _id
          name
          profileImg
        }
      }
      contracts {
        _id
        status
        user {
          _id
        }
      }
      img
      summary
      location
      creativeSummary
      submitted
      paid
      user {
        _id
        name
        profileImg
      }
      invites {
        _id
        receiver {
          _id
          name
          profileImg
        }
        job {
          contracts {
            status
            _id
            user {
              _id
            }
          }
        }
      }
      showreel
      type
      createdAt
    }
  }
`;
