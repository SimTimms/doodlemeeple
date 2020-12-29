import gql from 'graphql-tag';

export const SIGNUP_MUTATION = gql`
  mutation SignupMutation(
    $name: String!
    $email: String!
    $password: String!
    $campaignId: String
  ) {
    userCreateOne(
      record: {
        name: $name
        email: $email
        password: $password
        campaignId: $campaignId
      }
    ) {
      recordId
    }
  }
`;
export const DELETE_STRIPE_ACCOUNT = gql`
  mutation deleteStripe {
    deleteStripe
  }
`;

export const DISCONNECT_STRIPE_ACCOUNT = gql`
  mutation disconnectStripeAccount {
    disconnectStripe
  }
`;

export const REQUEST_WITHDRAW = gql`
  mutation RequestWithdraw($_id: MongoID!) {
    requestWithdraw(_id: $_id)
  }
`;

export const CONNECT_STRIPE = gql`
  mutation connectStripe($token: String!) {
    connectStripe(token: $token)
  }
`;

export const APPROVE_WITHDRAW = gql`
  mutation ApproveWithdraw($_id: MongoID!) {
    approveWithdraw(_id: $_id)
  }
`;

export const MAKE_PAYMENT = gql`
  mutation MakePayment($contractId: MongoID!) {
    makePayment(contractId: $contractId)
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
    userUpdateOne(record: { email: $email }) {
      recordId
    }
  }
`;

export const UPDATE_AVAILABILITY = gql`
  mutation UpdateAvailability($available: Boolean!) {
    userUpdateOne(record: { available: $available }) {
      recordId
    }
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
  mutation UpdateInvite($_id: MongoID!, $status: String) {
    inviteUpdateById(record: { _id: $_id, status: $status }) {
      record {
        _id
      }
    }
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
  mutation UpdatePaymentTerm(
    $_id: MongoID!
    $percent: Float
    $description: String
  ) {
    paymentTermsUpdateById(
      record: { _id: $_id, percent: $percent, description: $description }
    ) {
      recordId
    }
  }
`;

export const SKIP_ONBOARDING = gql`
  mutation SkipOnboarding {
    skipOnboarding
  }
`;

export const CREATE_TERM = gql`
  mutation CreatePaymentTerm(
    $percent: Float
    $description: String
    $contractId: MongoID!
  ) {
    paymentTermsCreateOne(
      record: {
        percent: $percent
        description: $description
        contract: $contractId
      }
    ) {
      recordId
    }
  }
`;

export const REMOVE_TERM = gql`
  mutation RemovePaymentTerm($_id: MongoID!) {
    paymentTermsRemoveById(_id: $_id) {
      recordId
    }
  }
`;

export const SUBMIT_CONTRACT = gql`
  mutation SubmitContract($_id: MongoID!) {
    submitContract(_id: $_id) {
      _id
    }
  }
`;

export const SIGN_CONTRACT = gql`
  mutation SignContract($contractId: MongoID!) {
    signContract(_id: $contractId) {
      _id
      signedDate
    }
  }
`;

export const DECLINE_CONTRACT = gql`
  mutation DeclineContract($contractId: MongoID!) {
    declineContract(_id: $contractId) {
      _id
    }
  }
`;

export const CREATE_CONTRACT = gql`
  mutation CreateContract(
    $currency: String!
    $cost: String!
    $jobId: MongoID!
  ) {
    contractCreateOne(
      record: { currency: $currency, cost: $cost, job: $jobId }
    ) {
      recordId
      record {
        currency
        cost
        user {
          name
        }
        job {
          _id
          name
          keywords
          user {
            name
          }
        }
        createdAt
        updatedAt
      }
    }
  }
`;

export const UPDATE_CONTRACT = gql`
  mutation UpdateContract(
    $_id: MongoID!
    $notes: String
    $deadline: String
    $startDate: String
    $currency: String
    $cost: String
    $status: String
  ) {
    contractUpdateById(
      record: {
        _id: $_id
        notes: $notes
        deadline: $deadline
        startDate: $startDate
        currency: $currency
        cost: $cost
        status: $status
      }
    ) {
      recordId
    }
  }
`;

export const REMOVE_CONTRACT = gql`
  mutation RemoveContract($id: String!) {
    removeContract(id: $id)
  }
`;

export const DECLINE_INVITE = gql`
  mutation DeclineInvite($_id: MongoID!) {
    declineInvite(_id: $_id) {
      _id
    }
  }
`;

export const UPDATE_GAME = gql`
  mutation UpdateGame(
    $id: MongoID!
    $name: String
    $img: String
    $backgroundImg: String
    $mechanics: String
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
        mechanics: $mechanics
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
    $genre: String
    $scope: String
    $mechanics: String
    $timeframe: String
    $gallery: MongoID!
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

export const CLOSE_JOB = gql`
  mutation closeJob($_id: MongoID!) {
    closeJob(_id: $_id) {
      _id
    }
  }
`;

export const COMPLETE_JOB = gql`
  mutation completeJob($_id: MongoID!) {
    completeJob(_id: $_id) {
      _id
    }
  }
`;

export const CLOSE_EARLY = gql`
  mutation closeEarly($_id: MongoID!) {
    closeEarly(_id: $_id)
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
    $creativeTrue: Boolean
    $creatorTrue: Boolean
  ) {
    userUpdateOne(
      record: {
        name: $name
        summary: $summary
        profileBG: $profileBG
        profileImg: $profileImg
        creativeTrue: $creativeTrue
        creatorTrue: $creatorTrue
      }
    ) {
      recordId
    }
  }
`;

export const SET_AS_CREATOR = gql`
  mutation SetAsCreator($creatorTrue: Boolean!) {
    userUpdateOne(record: { creatorTrue: $creatorTrue }) {
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
  mutation CreateMessage(
    $receiverId: MongoID!
    $message: String!
    $jobId: MongoID!
    $type: String
  ) {
    messageCreateOne(
      record: {
        messageStr: $message
        receiver: $receiverId
        job: $jobId
        type: $type
      }
    ) {
      recordId
      record {
        messageStr
        type
        sender {
          name
          _id
          profileImg
        }
      }
    }
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
    passwordForgot(email: $email) {
      _id
    }
  }
`;

export const PASSWORD_RESET_MUTATION = gql`
  mutation PasswordResetMutation($password: String!, $token: String!) {
    passwordReset(password: $password, token: $token)
  }
`;
