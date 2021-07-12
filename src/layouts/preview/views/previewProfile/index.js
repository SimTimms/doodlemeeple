import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import {
  Header,
  ColumnWrapper,
  HeaderThree,
  Text,
  IconButton,
  Row,
  Divider,
  DividerMini,
} from '../../../../components';
import { Query } from 'react-apollo';
import { PROFILE_PREVIEW, SECTIONS_PREVIEW } from '../../../../data/queries';
import GallerySection from './components/section/gallerySection';
import { TYPE_HELPER } from '../../../../utils';
import * as social from '../../../../assets/social';
import Avatar from './avatar';
import SocialIcon from './socialIcon';
import imageOptimiser from '../../../../utils/imageOptimiser';
import { initialState } from './initialState';
import Cookies from 'js-cookie';
import clsx from 'clsx';
import { FullProfileCard } from '../../../../widgets/profileCard';

export function PreviewProfile({ history, profileId, publicView, ...props }) {
  const classes = useStyles();
  const [userProfile, setUserProfile] = React.useState({
    initialState,
  });
  const [sections, setSections] = React.useState([]);
  const [page, setPage] = React.useState(-1);
  const userId = Cookies.get('userId');
  const [large, setLarge] = React.useState(null);

  const { setFullProfile } = props;

  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.popup]: setFullProfile,
      })}
    >
      <div className={classes.root}>
        {setFullProfile && (
          <IconButton
            title="Close"
            icon="close"
            color="primary"
            onClickEvent={() => {
              setFullProfile(null);
            }}
          ></IconButton>
        )}

        {!publicView && profileId === userId && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              top: 0,
              position: 'absolute',
            }}
          >
            <IconButton
              title="Edit"
              icon="edit"
              color="primary"
              onClickEvent={() => {
                history.push('/app/edit-profile');
              }}
            ></IconButton>
          </div>
        )}
        <FullProfileCard history={history} creativeId={profileId} />
        {/*
        <div
          style={{
            backgroundImage:
              userProfile.profileBG !== null
                ? `url(${userProfile.profileBG}`
                : '#fafafa',
          }}
          className={classes.profileWrapper}
        >
          {userProfile.profileBG === null && (
            <img
              src={process.env.REACT_APP_DEVICE}
              style={{ width: 500 }}
              alt=""
            />
          )}
        </div>
        <ColumnWrapper>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              marginTop: -70,
            }}
          >
            <Avatar img={userProfile.profileImg} />
            <Header str={userProfile.name} />

            <Text
              str={
                userProfile.summary !== ''
                  ? userProfile.summary
                  : `${userProfile.name} has not submitted a summary yet`
              }
            />
            <Divider />
            <HeaderThree str="Social" />
            <DividerMini />
            <Row>
              {userProfile.linkedIn && (
                <SocialIcon
                  img={social.socialLinkedIn}
                  link={
                    userProfile.linkedIn.indexOf('linkedin.com') === -1
                      ? `https://www.linkedin.com/in/${userProfile.linkedIn}`
                      : userProfile.linkedIn
                  }
                />
              )}
              {userProfile.facebook && (
                <SocialIcon
                  img={social.socialFacebook}
                  link={
                    userProfile.facebook.indexOf('facebook.com') === -1
                      ? `https://facebook.com/${userProfile.facebook}`
                      : userProfile.facebook
                  }
                />
              )}
              {userProfile.twitter && (
                <SocialIcon
                  img={social.socialTwitter}
                  link={
                    userProfile.twitter.indexOf('twitter.com') === -1
                      ? `https://twitter.com/${userProfile.twitter}`
                      : userProfile.twitter
                  }
                />
              )}
              {userProfile.instagram && (
                <SocialIcon
                  img={social.socialInstagram}
                  link={
                    userProfile.instagram.indexOf('instagram.com/') === -1
                      ? `https://www.instagram.com/${userProfile.instagram}`
                      : userProfile.instagram
                  }
                />
              )}
              <SocialIcon img={social.socialSkype} link={userProfile.skype} />
              <SocialIcon img={social.iconWebsite} link={userProfile.website} />
            </Row>
            <Divider />
            <HeaderThree str="Profile Address" />
            <Divider />
            <a
              href={`${process.env.REACT_APP_URL}/preview/${profileId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography
                className={classes.shareLink}
              >{`${process.env.REACT_APP_URL}/preview/${profileId}`}</Typography>
            </a>
            <Divider />
            <HeaderThree str="Skills" />
            <Row>
              {sections &&
                sections.map((section, index) => {
                  return (
                    <div
                      onClick={() => {
                        setPage(index);
                      }}
                      className={classes.catWrapper}
                      style={{
                        backgroundImage: `url(${imageOptimiser(
                          section.referenceImage
                        )})`,
                      }}
                    >
                      <Typography
                        className={classes.catTitle}
                        align="center"
                      >{`${TYPE_HELPER(section.type)}`}</Typography>
                    </div>
                  );
                })}
            </Row>
          </div>
        </ColumnWrapper>

        {sections &&
          sections.map((section, index) => {
            return (
              (index === page || page === -1) && (
                <GallerySection section={section} key={`section_${index}`} />
              )
            );
          })}
        <Query
          query={SECTIONS_PREVIEW}
          onCompleted={(data) => {
            const sections = data.sectionMany;
            setSections(sections);
          }}
          variables={{ userId: profileId }}
          fetchPolicy="network-only"
        >
          {({ data }) => {
            return null;
          }}
        </Query>   */}
      </div>
    </div>
  );
}
