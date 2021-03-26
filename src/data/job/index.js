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

export const JOB = gql`
  query GetJob($jobId: MongoID!) {
    jobById(_id: $jobId) {
      _id
      name
      keywords
      genre
      scope
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
      game {
        _id
        backgroundImg
        name
        summary
      }
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
        name
        summary
        createdAt
        creativeSummary
        keywords
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
      submitted
      backgroundImg
      assignedCreative {
        _id
        name
        profileImg
      }
      contracts {
        _id
        user {
          _id
        }
        status
      }
      game {
        _id
        name
        backgroundImg
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