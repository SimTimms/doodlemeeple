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
      jobs {
        id
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
      }
      job {
        id
        name
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
    }
  }
`;

export const COUNTS = gql`
  {
    counts {
      id
      invites
    }
  }
`;

export const PROFILE = gql`
  {
    profile {
      id
      name
      summary
      profileBG
      profileBGStyle
      profileImg
      profileImgStyle
      autosave
      email
      sections {
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
  }
`;

export const PROFILE_PREVIEW = gql`
  query ProfilePreview($userId: String!) {
    profilePreview(userId: $userId) {
      id
      name
      summary
      profileBG
      profileBGStyle
      profileImg
      profileImgStyle
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
    getNotifications {
      message
      id
      icon
      title
      createdAt
      linkTo
    }
  }
`;

export const SECTIONS_PREVIEW = gql`
  query SectionsPreview($userId: String!) {
    sectionsPreview(userId: $userId) {
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
