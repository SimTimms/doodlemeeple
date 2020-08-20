import gql from 'graphql-tag';

export const CREATIVES = gql`
  query GetCreatives {
    getCreatives {
      _id
      name
      summary
      profileBG
      profileImg
      likedMe {
        _id
        receiver {
          _id
        }
        user {
          _id
        }
      }
      favourites {
        _id
        receiver {
          _id
        }
        user {
          _id
        }
      }
    }
  }
`;

export const GAME = gql`
  query GetGame($gameId: MongoID!) {
    gameById(_id: $gameId) {
      _id
      name
      keywords
      img
      backgroundImg
      summary
      location
      user {
        name
      }
      showreel
      type
      createdAt
    }
  }
`;

export const GAMES = gql`
  query GetGames {
    gamesByUser {
      _id
      name
      backgroundImg
    }
  }
`;

export const CONVERSATIONS = gql`
  query GetConversations {
    getConversations {
      _id
      count
      job {
        _id
        name
      }
      receiver {
        name
        _id
        profileImg
      }
      sender {
        _id
        name
        profileImg
      }
    }
  }
`;

export const GET_MESSAGES = gql`
  query getMessages($jobId: MongoID!, $userId: MongoID!, $pageNbr: Int!) {
    getMessages(jobId: $jobId, userId: $userId, pageNbr: $pageNbr) {
      _id
      messageStr
      createdAt
      type
      sender {
        _id
        name
        profileImg
      }
      receiver {
        _id
        name
        profileImg
      }
      job {
        _id
        name
      }
    }
  }
`;

export const CONVERSATION = gql`
  query GetConversation($conversationId: String!, $page: Int!) {
    getConversation(conversationId: $conversationId, page: $page) {
      id
      createdAt
      messages {
        id
        messageStr
        createdAt
        sender {
          id
          name
          profileImg
        }
      }
      participants {
        id
        name
        profileImg
      }
      job {
        id
        name
        game {
          backgroundImg
        }
      }
    }
  }
`;

export const MESSAGES = gql`
  query GetMessages($jobId: String!) {
    getMessages(jobId: $jobId) {
      id
      messageStr
      createdAt
      sender {
        id
        name
        profileImg
      }
      receiver {
        id
        name
        profileImg
      }
    }
  }
`;

export const PAYMENTS = gql`
  query GetPayments($contractId: MongoID!) {
    paymentMany(filter: { contract: $contractId }) {
      amount
      currency
      status
      paidBy {
        _id
      }
      contract {
        _id
      }
    }
  }
`;

export const INVITES = gql`
  query GetInvites {
    invitesByUser {
      _id
      receiver {
        name
      }
      user {
        _id
        name
        profileImg
      }
      job {
        _id
        name
        summary
        submitted
      }
    }
  }
`;

export const INVITE_BY_ID = gql`
  query inviteById($_id: MongoID!) {
    inviteById(_id: $_id) {
      _id
      status
      receiver {
        name
      }
      user {
        _id
        name
        profileImg
      }
      job {
        _id
        name
        summary
        submitted
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
      assignedCreative {
        _id
        name
      }
      invites {
        status
        receiver {
          _id
          name
          profileImg
        }
      }
      contracts {
        _id
        user {
          _id
        }
      }
      img
      summary
      location
      creativeSummary
      submitted
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
      }
      showreel
      type
      createdAt
    }
  }
`;

export const JOBS = gql`
  query GetJobs($status: String) {
    jobsByUser(status: $status) {
      _id
      name
      submitted
      backgroundImg
      contracts {
        _id
        user {
          _id
        }
      }
      game {
        _id
        name
        backgroundImg
      }
      invites {
        status
        receiver {
          _id
          name
          profileImg
        }
      }
    }
  }
`;

export const GET_PAYMENT_TERMS = gql`
  query GetPaymentTerms($contractId: String!) {
    getPaymentTerms(contractId: $contractId) {
      id
      description
      percent
    }
  }
`;

export const GET_CONTRACT = gql`
  query GetContract($jobId: MongoID!) {
    contractByJob(jobId: $jobId) {
      _id
      notes
      deadline
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
        creativeSummary
        user {
          _id
          email
        }
      }
      paymentTerms {
        _id
        percent
        description
      }
    }
  }
`;

export const GET_CONTRACT_ID = gql`
  query GetContractId($contractId: String!) {
    getContractId(contractId: $contractId) {
      id
      notes
      deadline
      cost
      currency
      status
      updatedAt
      payments {
        id
        amount
        currency
        status
        paidBy {
          id
          name
        }
        contract {
          id
        }
        paymentId
        createdAt
        updatedAt
      }
      user {
        email
        id
        name
        profileImg
      }
      job {
        id
        name
        summary
        creativeSummary
        user {
          id
          email
        }
      }
      paymentTerms {
        id
        percent
        description
      }
    }
  }
`;

export const PREVIEW_CONTRACT = gql`
  query PreviewContract($contractId: MongoID!) {
    contractById(_id: $contractId) {
      _id
      notes
      deadline
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
      signedBy {
        _id
        name
      }
      signedDate
      createdAt
      user {
        name
        email
        summary
        profileImg
        _id
        profileBG
        favourites {
          _id
          receiver {
            _id
          }
          user {
            _id
          }
        }
        likedMe {
          _id
          receiver {
            _id
          }
          user {
            _id
          }
        }
      }
      job {
        _id
        name
        summary
        creativeSummary
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
      }
    }
  }
`;

export const COUNTS = gql`
  {
    counts {
      invites
      messages
      quotes
    }
  }
`;

export const FAVOURITES = gql`
  {
    profile {
      favourites {
        _id
        receiver {
          _id
        }
      }
    }
  }
`;

export const PROFILE = gql`
  {
    profile {
      _id
      name
      summary
      profileBG
      profileImg
      autosave
      email
      favourites {
        receiver {
          _id
        }
      }
      sections {
        _id
        summary
        showreel
        type
        gallery {
          _id
          summary
          images {
            _id
            img
          }
        }
        notableProjects {
          _id
          summary
          name
          image
        }
        testimonials {
          _id
          name
          summary
          image
        }
      }
    }
  }
`;

export const PROFILE_PREVIEW = gql`
  query ProfilePreview($userId: MongoID!) {
    userById(_id: $userId) {
      _id
      name
      summary
      profileBG
      profileImg
    }
  }
`;

export const PROFILE_FEATURED = gql`
  query ProfilePreview($userId: MongoID!) {
    userById(_id: $userId) {
      _id
      profileImg
      autosave
    }
  }
`;

export const AUTOSAVE_IS = gql`
  {
    profile {
      autosave
      name
      favourites
    }
  }
`;

export const NOTIFICATIONS = gql`
  {
    notificationSecure {
      _id
      message
      icon
      title
      createdAt
      linkTo
    }
  }
`;

export const SECTIONS_PREVIEW = gql`
  query SectionsPreview($userId: MongoID!) {
    sectionMany(filter: { user: $userId }) {
      _id
      summary
      showreel
      type
      gallery {
        _id
        summary
        images {
          img
        }
      }
      notableProjects {
        _id
        summary
        name
        image
      }
      testimonials {
        _id
        name
        summary
        image
      }
    }
  }
`;

export const SECTIONS = gql`
  {
    getSections {
      id
      title
      summary
      showreel
      type
      gallery {
        id
        summary
        images {
          img
        }
      }
      notableProjects {
        id
        summary
        name
        image
      }
      testimonials {
        id
        name
        summary
        image
      }
    }
  }
`;
