import gql from 'graphql-tag';

import {
  JOBS,
  JOB_CREATIVE,
  JOB,
  JOB_CONTACT_DETAILS,
  JOB_RESPONSES,
  JOB_CONTRACT,
} from './job';
export {
  JOBS,
  JOB_CREATIVE,
  JOB,
  JOB_CONTACT_DETAILS,
  JOB_RESPONSES,
  JOB_CONTRACT,
};

export const CREATIVES = gql`
  query GetCreatives($type: [String], $job: MongoID, $page: Int) {
    getCreatives(type: $type, page: $page, job: $job) {
      _id
      name
      summary
      profileBG
      profileImg
      badges {
        badgeType
        link
        badgeIcon
        description
      }
      viewCount
      responsePercent
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
  }
`;

export const LIKES = gql`
  query GetLikes {
    getLikes {
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
  query GetPayments(
    $contractId: MongoID!
    $accountOne: String
    $accountTwo: String
  ) {
    paymentMany(
      filter: {
        contract: $contractId
        OR: [{ account: $accountOne }, { account: $accountTwo }]
      }
      sort: CREATEDAT__UPDATEDAT_ASC
    ) {
      amount
      currency
      status
      account
      updatedAt
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
  query GetInvites($status: [String]) {
    invitesByUser(status: $status) {
      status
      messages
      _id
      receiver {
        name
      }
      sender {
        _id
        name
        profileImg
      }
      job {
        _id
        name
        summary
        submitted
        user {
          name
        }
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
      sender {
        _id
        name
        profileImg
      }
      job {
        _id
        name
        summary
        submitted
        user {
          name
        }
      }
    }
  }
`;

export const GET_PAYMENT_TERMS = gql`
  query GetPaymentTerms($contractId: String!) {
    getPaymentTerms(contractId: $contractId) {
      _id
      description
      percent
      paid
      withdrawRequest
      withdrawApproved
      withdrawPaid
      contract {
        _id
        currency
      }
    }
  }
`;

export const GET_CONTRACT = gql`
  query GetContract($jobId: MongoID!) {
    contractByJob(jobId: $jobId) {
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

export const GET_CONTRACT_ID = gql`
  query GetContractId($contractId: String!) {
    contractById(_id: $contractId) {
      _id
      notes
      deadline
      startDate
      cost
      currency
      signedDate
      signedBy
      status
      updatedAt
      user {
        email
        _id
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
          name
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
  query AppViewContract($contractId: MongoID!) {
    contractById(_id: $contractId) {
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
        keywords
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
      jobs
      socials
      contact
      skills
      draftQuotes
      totalDeclined
      draftJobs
      unansweredQuotes
      quotesDeclined
      quotesAccepted
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
      badges {
        badgeType
      }
      profileBG
      profileImg
      autosave
      email
      creatorTrue
      creativeTrue
      paymentMethod
      available
      acceptsSpeculative
      acceptsRoyalties
      acceptsUnfunded
      onboarding
      facebook
      twitter
      website
      instagram
      linkedIn
      publicEmail
      skype
      phone
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
      viewCount
      paymentMethod
      responsePercent
      facebook
      skype
      publicEmail
      website
      twitter
      linkedIn
      instagram
      badges {
        badgeType
        link
        badgeIcon
        description
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

export const PROFILE_FEATURED = gql`
  query ProfilePreview($userId: MongoID!) {
    featuredProfile(userId: $userId) {
      _id
      profileImg
      autosave
    }
  }
`;

export const CATEGORY_IMAGES = gql`
  query CategoryImages($type: [String]) {
    imageCategory(type: $type) {
      img
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
    notificationMany {
      _id
      message
      icon
      title
      createdAt
      linkTo
      sender {
        name
        profileImg
      }
    }
  }
`;

export const NOTIFICATIONS_BY_JOB = gql`
  query NotificationsByJob($jobId: MongoID!) {
    notificationMany(filter: { job: $jobId }) {
      _id
      message
      icon
      title
      createdAt
      linkTo
      sender {
        name
        profileImg
      }
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
      referenceImage
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
