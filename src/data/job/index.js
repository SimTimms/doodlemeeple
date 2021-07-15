import gql from 'graphql-tag';

export const JOB_CONTACT_DETAILS = gql`
  query GetJob($jobId: MongoID!) {
    jobById(_id: $jobId) {
      assignedCreative {
        _id
        name
        email
        profileImg
        publicEmail
        facebook
        twitter
        linkedIn
        website
        skype
        instagram
      }
    }
  }
`;

export const JOB_RESPONSES = gql`
  query jobResponsesWidget {
    jobResponsesWidget {
      _id
      user {
        _id
      }
      status
    }
  }
`;

export const JOB_CONTRACT = gql`
  query jobContract($jobId: MongoID!) {
    jobContract(jobId: $jobId) {
      _id
      user {
        _id
      }
      status
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

export const JOB_CREATIVE = gql`
  query GetJob($jobId: MongoID!) {
    jobChecklist(_id: $jobId) {
      contract {
        _id
        notes
        deadline
        startDate
        cost
        currency
        status
        updatedAt
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
          submitted
          scope
          mechanics
          gallery {
            _id
            summary
            images {
              _id
              img
            }
          }
          timeframe
          budget
          extra
          showreel
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
          status
          paid
        }
      }
      creator {
        _id
        name
        profileImg
        publicEmail
      }
      job {
        _id
        isPublic
        name
        summary
        createdAt
        creativeSummary
        keywords
        contactEmail
        submitted
        scope
        mechanics
        timeframe
        budget
        extra
        showreel
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
          publicEmail
        }
        activeContract {
          _id
        }
      }
      invite {
        status
        messages
        _id
      }
    }
  }
`;

export const JOBS = gql`
  query GetJobs($status: [String]) {
    jobsByUser(status: $status) {
      _id
      name
      isPublic
      contactEmail
      submitted
      backgroundImg
      assignedCreative {
        _id
        name
        profileImg
        email
      }
      contracts {
        _id
        status
        user {
          _id
          name
          profileImg
        }
        status
      }

      invites {
        status
        messages
        job {
          _id
        }
        receiver {
          _id
          name
          profileImg
        }
      }
    }
  }
`;
