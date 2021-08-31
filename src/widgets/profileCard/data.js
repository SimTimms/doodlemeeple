import gql from 'graphql-tag';

export const PROFILE_IMAGES = gql`
  query profileImages($userId: MongoID!) {
    profileImages(userId: $userId) {
      img
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
      sections {
        _id
        type
        summary
        showreel
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
  }
`;
