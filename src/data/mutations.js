import gql from 'graphql-tag';

export const SIGNUP_MUTATION = gql`
  mutation SignupMutation($name: String!, $email: String!, $password: String!) {
    userCreateOne(record: { name: $name, email: $email, password: $password }) {
      recordId
    }
  }
`;

export const MAKE_PAYMENT = gql`
  mutation MakePayment(
    $amount: String!
    $currency: String!
    $contractId: String!
  ) {
    makePayment(amount: $amount, currency: $currency, contractId: $contractId)
  }
`;

export const SUBMIT_BRIEF = gql`
  mutation SubmitBrief($jobId: MongoID!) {
    submitBrief(_id: $jobId) {
      _id
    }
  }
`;

export const MARK_AS_READ = gql`
  mutation MarkAsRead($conversationId: String!) {
    markAsRead(conversationId: $conversationId)
  }
`;

export const UPDATE_EMAIL = gql`
  mutation UpdateEmail($email: String!) {
    updateEmail(email: $email)
  }
`;

export const DELETE_ACCOUNT = gql`
  mutation DeleteAccount {
    deleteAccount {
      _id
    }
  }
`;

export const DELETE_IMAGE = gql`
  mutation DeleteImage($id: MongoID!) {
    imageRemoveById(_id: $id) {
      recordId
    }
  }
`;

export const UPDATE_INVITE = gql`
  mutation UpdateInvite($id: String!, $invite: InviteInput!) {
    updateInvite(id: $id, invite: $invite)
  }
`;

export const CREATE_INVITE = gql`
  mutation CreateInvite(
    $title: String
    $message: String
    $receiverId: MongoID!
    $jobId: MongoID!
  ) {
    inviteCreateOne(
      record: {
        receiver: $receiverId
        message: $message
        title: $title
        job: $jobId
      }
    ) {
      recordId
    }
  }
`;

export const REMOVE_INVITE = gql`
  mutation RemoveInvite($_id: MongoID!) {
    inviteRemoveById(_id: $_id) {
      recordId
    }
  }
`;
export const UPDATE_TERM = gql`
  mutation UpdatePaymentTerm($id: String!, $paymentTerm: PaymentTermInput!) {
    updatePaymentTerm(id: $id, paymentTerm: $paymentTerm)
  }
`;

export const CREATE_TERM = gql`
  mutation CreatePaymentTerm($id: String!, $paymentTerm: PaymentTermInput!) {
    createPaymentTerm(id: $id, paymentTerm: $paymentTerm)
  }
`;

export const REMOVE_TERM = gql`
  mutation RemovePaymentTerm($id: String!) {
    removePaymentTerm(id: $id)
  }
`;

export const UPDATE_CONTRACT = gql`
  mutation UpdateContract($id: String!, $contract: ContractInput!) {
    updateContract(id: $id, contract: $contract)
  }
`;

export const SUBMIT_CONTRACT = gql`
  mutation SubmitContract($id: String!) {
    submitContract(id: $id)
  }
`;

export const SIGN_CONTRACT = gql`
  mutation SignContract($contractId: String!) {
    signContract(contractId: $contractId)
  }
`;

export const DECLINE_CONTRACT = gql`
  mutation DeclineContract($contractId: String!) {
    declineContract(contractId: $contractId)
  }
`;

export const CREATE_CONTRACT = gql`
  mutation CreateContract($id: String!, $contract: ContractInput!) {
    createContract(id: $id, contract: $contract)
  }
`;

export const REMOVE_CONTRACT = gql`
  mutation RemoveContract($id: String!) {
    removeContract(id: $id)
  }
`;

export const DECLINE_INVITE = gql`
  mutation DeclineInvite($id: String!) {
    declineInvite(id: $id)
  }
`;

export const UPDATE_GAME = gql`
  mutation UpdateGame(
    $id: MongoID!
    $name: String
    $img: String
    $backgroundImg: String
    $summary: String
    $location: String
    $showreel: String
    $type: String
  ) {
    gameUpdateById(
      record: {
        _id: $id
        name: $name
        img: $img
        backgroundImg: $backgroundImg
        summary: $summary
        location: $location
        showreel: $showreel
        type: $type
      }
    ) {
      recordId
    }
  }
`;

export const CREATE_GAME = gql`
  mutation CreateGame($name: String!) {
    gameCreateOne(record: { name: $name }) {
      recordId
    }
  }
`;

export const REMOVE_GAME = gql`
  mutation RemoveGame($id: MongoID!) {
    gameRemoveById(_id: $id) {
      recordId
    }
  }
`;

export const ADD_FAVOURITE = gql`
  mutation AddFavourite($id: MongoID!) {
    favouriteCreateOne(record: { receiver: $id }) {
      recordId
    }
  }
`;

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
  ) {
    jobUpdateById(
      record: {
        _id: $_id
        name: $name
        img: $img
        summary: $summary
        location: $location
        showreel: $showreel
        type: $type
        creativeSummary: $creativeSummary
        submitted: $submitted
      }
    ) {
      recordId
    }
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

export const UPDATE_USER_MUTATION = gql`
  mutation UpdateUserMutation(
    $name: String!
    $summary: String
    $profileBG: String
    $profileImg: String
  ) {
    userUpdateOne(
      record: {
        name: $name
        summary: $summary
        profileBG: $profileBG
        profileImg: $profileImg
      }
    ) {
      recordId
    }
  }
`;

export const UPDATE_SECTION_MUTATION = gql`
  mutation UpdateSectionMutation($section: Section) {
    updateSection(section: $section) {
      id
    }
  }
`;

export const UPDATE_GALLERY_SECTION_MUTATION = gql`
  mutation UpdateGallerySectionMutation(
    $summary: String
    $showreel: String
    $type: String
    $galleryId: MongoID!
  ) {
    sectionUpdateById(
      record: {
        _id: $galleryId
        summary: $summary
        showreel: $showreel
        type: $type
      }
    ) {
      recordId
      record {
        gallery {
          _id
        }
      }
    }
  }
`;

export const UPLOAD_IMAGE = gql`
  mutation UploadImage($img: String!, $galleryId: MongoID!) {
    imageCreateOne(record: { img: $img, gallery: $galleryId }) {
      recordId
      record {
        img
      }
    }
  }
`;

export const CREATE_GALLERY_SECTION_MUTATION = gql`
  mutation CreateGallerySectionMutation(
    $summary: String
    $showreel: String
    $type: String
  ) {
    sectionCreateOne(
      record: { summary: $summary, showreel: $showreel, type: $type }
    ) {
      recordId
      record {
        gallery {
          _id
        }
      }
    }
  }
`;

export const UPDATE_TESTIMONIAL = gql`
  mutation UpdatePaymentTestimonial(
    $summary: String
    $name: String
    $image: String
    $testimonialId: MongoID!
  ) {
    testimonialUpdateById(
      record: {
        _id: $testimonialId
        summary: $summary
        name: $name
        image: $image
      }
    ) {
      recordId
    }
  }
`;

export const CREATE_TESTIMONIAL = gql`
  mutation CreateTestimonial(
    $name: String
    $summary: String
    $image: String
    $sectionId: MongoID!
  ) {
    testimonialCreateOne(
      record: {
        summary: $summary
        name: $name
        image: $image
        section: $sectionId
      }
    ) {
      recordId
    }
  }
`;

export const UPDATE_PROJECT = gql`
  mutation UpdateProject(
    $summary: String
    $name: String
    $image: String
    $projectId: MongoID!
  ) {
    notableProjectUpdateById(
      record: { _id: $projectId, summary: $summary, name: $name, image: $image }
    ) {
      recordId
    }
  }
`;

export const CREATE_PROJECT = gql`
  mutation CreateProject(
    $summary: String
    $name: String
    $image: String
    $sectionId: MongoID!
  ) {
    notableProjectCreateOne(
      record: {
        summary: $summary
        name: $name
        image: $image
        section: $sectionId
      }
    ) {
      recordId
    }
  }
`;

export const REMOVE_SECTION_MUTATION = gql`
  mutation RemoveSectionMutation($id: MongoID!) {
    sectionRemoveById(_id: $id) {
      recordId
    }
  }
`;

export const REMOVE_NOTABLE_PROJECT_MUTATION = gql`
  mutation RemoveNotableProjectMutation($id: MongoID!) {
    removeNotableProject(id: $id)
  }
`;

export const REMOVE_TESTIMONIAL_MUTATION = gql`
  mutation RemoveTestimonialMutation($id: MongoID!) {
    testimonialRemoveById(_id: $id) {
      recordId
    }
  }
`;

export const REMOVE_PROJECT_MUTATION = gql`
  mutation RemoveProjectMutation($id: MongoID!) {
    notableProjectRemoveById(_id: $id) {
      recordId
    }
  }
`;

export const REMOVE_NOTIFICATION_MUTATION = gql`
  mutation RemoveNotificationMutation($id: MongoID!) {
    notificationRemoveById(_id: $id) {
      recordId
    }
  }
`;

export const CREATE_MESSAGE = gql`
  mutation CreateMessage($id: String!, $message: MessageInput!) {
    createMessage(id: $id, message: $message)
  }
`;

export const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    userLogin(email: $email, password: $password) {
      token
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
