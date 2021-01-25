import React from 'react';
import { Slide, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import logo from '../../../../assets/logo.svg';
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

export function PreviewProfile({ history, profileId, publicView }) {
  const classes = useStyles();
  const [userProfile, setUserProfile] = React.useState({
    initialState,
  });
  const [sections, setSections] = React.useState([]);
  const [page, setPage] = React.useState(-1);

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <Query
          query={PROFILE_PREVIEW}
          variables={{ userId: profileId }}
          onCompleted={(data) => {
            setUserProfile({
              ...data.userById,
            });
          }}
        >
          {({ data }) => {
            return null;
          }}
        </Query>
        <div className={classes.root}>
          {!publicView && (
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
              <img src={logo} style={{ width: 500 }} alt="" />
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
                <SocialIcon
                  img={social.socialLinkedIn}
                  link={userProfile.linkedIn}
                />
                <SocialIcon
                  img={social.socialFacebook}
                  link={userProfile.facebook}
                />
                <SocialIcon
                  img={social.socialTwitter}
                  link={userProfile.twitter}
                />
                <SocialIcon
                  img={social.socialInstagram}
                  link={userProfile.instagram}
                />
                <SocialIcon img={social.socialSkype} link={userProfile.skype} />
                <SocialIcon
                  img={social.iconWebsite}
                  link={userProfile.website}
                />
              </Row>
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
          </Query>
        </div>
      </div>
    </Slide>
  );
}
