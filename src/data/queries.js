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
  query GetConversations($status: String!) {
    getConversations(status: $status) {
      id
      createdAt
      unreadMessages
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

export const DETERMINE_CONVERSATION_ID = gql`
  query DetermineConversationId($jobId: String!, $userId: String) {
    determineConversationId(jobId: $jobId, userId: $userId)
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

export const JOB = gql`
  query GetJob($jobId: MongoID!) {
    jobById(_id: $jobId) {
      _id
      name
      keywords
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
  query GetJobs {
    jobsByUser {
      _id
      name
      submitted
      backgroundImg
      game {
        _id
        name
        backgroundImg
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
  query GetContract($jobId: String!) {
    getContract(jobId: $jobId) {
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
  query PreviewContract($contractId: String!) {
    previewContract(contractId: $contractId) {
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
      signedBy {
        id
        name
      }
      signedDate
      user {
        name
        email
        summary
        profileImg
        id
        profileBG
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

export const COUNTS = gql`
  {
    counts {
      invites
      messages
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
