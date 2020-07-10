import gql from 'graphql-tag';

export const CREATIVES = gql`
  query GetCreatives {
    getCreatives {
      id
      name
      summary
      profileBG
      profileBGStyle
      profileImg
      profileImgStyle
      autosave
      invites {
        id
        job {
          id
        }
      }
      invitesReceived {
        id
        user {
          id
        }
        job {
          id
        }
      }
    }
  }
`;

export const GAME = gql`
  query GetGame($gameId: String!) {
    getGame(gameId: $gameId) {
      id
      name
      keywords
      img
      backgroundImg
      summary
      location
      createdAt
      jobs {
        id
        name
      }
      user {
        name
      }
      gallery {
        id
        summary
        images {
          img
        }
      }
      showreel
      type
      createdAt
    }
  }
`;

export const GAMES = gql`
  query GetGames {
    getGames {
      id
      name
      backgroundImg
      jobs {
        id
        name
      }
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
    getInvites {
      id
      receiver {
        name
      }
      game {
        id
        name
        backgroundImg
        summary
      }
      user {
        id
        name
        profileImg
      }
      job {
        id
        name
        summary
      }
    }
  }
`;

export const JOB = gql`
  query GetJob($jobId: String!) {
    getJob(jobId: $jobId) {
      id
      name
      keywords
      img
      summary
      location
      creativeSummary
      submitted
      game {
        id
        backgroundImg
        name
        summary
      }
      user {
        id
        name
      }
      invite {
        id
        job {
          id
        }
        game {
          id
        }
        receiver {
          name
          id
          profileImg
        }
      }
      gallery {
        id
        summary
        images {
          img
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
    getJobs {
      id
      name
      summary
      submitted
      game {
        id
        backgroundImg
        name
      }
      contracts {
        id
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
      favourites
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
