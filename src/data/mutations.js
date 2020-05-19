import gql from 'graphql-tag';

export const SIGNUP_MUTATION = gql`
  mutation SignupMutation($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      token
      user {
        id
      }
    }
  }
`;

export const SUBMIT_BRIEF = gql`
  mutation SubmitBrief($jobId: String!) {
    submitBrief(jobId: $jobId)
  }
`;

export const UPDATE_EMAIL = gql`
  mutation UpdateEmail($email: String!) {
    updateEmail(email: $email)
  }
`;

export const DELETE_ACCOUNT = gql`
  mutation DeleteAccount {
    deleteAccount
  }
`;

export const UPDATE_INVITE = gql`
  mutation UpdateInvite($id: String!, $invite: InviteInput!) {
    updateInvite(id: $id, invite: $invite)
  }
`;

export const CREATE_INVITE = gql`
  mutation CreateInvite($id: String!, $invite: InviteInput!) {
    createInvite(id: $id, invite: $invite)
  }
`;

export const REMOVE_INVITE = gql`
  mutation RemoveInvite($id: String!) {
    removeInvite(id: $id)
  }
`;

export const DECLINE_INVITE = gql`
  mutation DeclineInvite($id: String!) {
    declineInvite(id: $id)
  }
`;

export const UPDATE_GAME = gql`
  mutation UpdateGame($id: String!, $game: GameInput!) {
    updateGame(id: $id, game: $game)
  }
`;

export const CREATE_GAME = gql`
  mutation CreateGame($id: String!, $game: GameInput!) {
    createGame(id: $id, game: $game)
  }
`;

export const REMOVE_GAME = gql`
  mutation RemoveGame($id: String!) {
    removeGame(id: $id)
  }
`;

export const ADD_FAVOURITE = gql`
  mutation AddFavourite($id: String!, $addRemove: String!) {
    addFavourite(id: $id, addRemove: $addRemove)
  }
`;

export const UPDATE_JOB = gql`
  mutation UpdateJob($id: String!, $job: JobInput!) {
    updateJob(id: $id, job: $job)
  }
`;

export const CREATE_JOB = gql`
  mutation CreateJob($id: String!, $job: JobInput!) {
    createJob(id: $id, job: $job)
  }
`;

export const REMOVE_JOB = gql`
  mutation RemoveJob($id: String!) {
    removeJob(id: $id)
  }
`;

export const UPDATE_USER_MUTATION = gql`
  mutation UpdateUserMutation(
    $name: String!
    $summary: String
    $profileBG: String
    $profileBGStyle: String
    $profileImg: String
    $profileImgStyle: String
    $sections: [SectionInput]
    $autosave: Boolean
  ) {
    updateUser(
      name: $name
      summary: $summary
      profileBG: $profileBG
      profileBGStyle: $profileBGStyle
      profileImg: $profileImg
      profileImgStyle: $profileImgStyle
      sections: $sections
      autosave: $autosave
    ) {
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

export const UPDATE_SECTION_MUTATION = gql`
  mutation UpdateSectionMutation($id: String!, $section: SectionInput) {
    updateSection(id: $id, section: $section) {
      id
    }
  }
`;

export const UPDATE_GALLERY_SECTION_MUTATION = gql`
  mutation UpdateGallerySectionMutation($id: String!, $section: SectionInput) {
    updateGallerySection(id: $id, section: $section) {
      id
    }
  }
`;

export const CREATE_GALLERY_SECTION_MUTATION = gql`
  mutation CreateGallerySectionMutation($id: String!, $section: SectionInput) {
    createGallerySection(id: $id, section: $section)
  }
`;

export const UPDATE_TESTIMONIAL = gql`
  mutation UpdateTestimonial(
    $testimonial: TestimonialInput!
    $sectionId: String!
  ) {
    updateTestimonial(testimonial: $testimonial, sectionId: $sectionId) {
      id
    }
  }
`;

export const CREATE_TESTIMONIAL = gql`
  mutation CreateTestimonial(
    $testimonial: TestimonialInput!
    $sectionId: String!
  ) {
    createTestimonial(testimonial: $testimonial, sectionId: $sectionId)
  }
`;

export const UPDATE_PROJECT = gql`
  mutation UpdateProject($project: NotableProjectsInput!, $sectionId: String!) {
    updateProject(project: $project, sectionId: $sectionId)
  }
`;

export const CREATE_PROJECT = gql`
  mutation CreateProject($project: NotableProjectsInput!, $sectionId: String!) {
    createProject(project: $project, sectionId: $sectionId)
  }
`;

export const REMOVE_SECTION_MUTATION = gql`
  mutation RemoveSectionMutation($id: String!) {
    removeSection(id: $id)
  }
`;

export const REMOVE_NOTABLE_PROJECT_MUTATION = gql`
  mutation RemoveNotableProjectMutation($id: String!) {
    removeNotableProject(id: $id)
  }
`;

export const REMOVE_TESTIMONIAL_MUTATION = gql`
  mutation RemoveTestimonialMutation($id: String!) {
    removeTestimonial(id: $id)
  }
`;

export const REMOVE_PROJECT_MUTATION = gql`
  mutation RemoveProjectMutation($id: String!) {
    removeProject(id: $id)
  }
`;

export const REMOVE_NOTIFICATION_MUTATION = gql`
  mutation RemoveNotificationMutation($id: String!) {
    removeNotification(id: $id)
  }
`;

export const CREATE_MESSAGE = gql`
  mutation CreateMessage($id: String!, $message: MessageInput!) {
    createMessage(id: $id, message: $message)
  }
`;

export const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
      }
    }
  }
`;

export const PASSWORD_FORGOT_MUTATION = gql`
  mutation PasswordForgotMutation($email: String!) {
    passwordForgot(email: $email)
  }
`;

export const PASSWORD_RESET_MUTATION = gql`
  mutation PasswordResetMutation($password: String!, $token: String!) {
    passwordReset(password: $password, token: $token)
  }
`;
