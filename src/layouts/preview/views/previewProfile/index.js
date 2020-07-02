import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Typography, Slide, Button } from '@material-ui/core';
import { useStyles } from './styles';
import {
  Header,
  SubHeader,
  ColumnWrapper,
  HeaderTwo,
  Text,
} from '../../../../components';
import { Query } from 'react-apollo';
import { PROFILE_PREVIEW, SECTIONS_PREVIEW } from '../../../../data/queries';
import GallerySection from './components/section/gallerySection';
import EditorSection from './components/section/editorSection';

export function PreviewProfile({ theme, profileId, publicView }) {
  const classes = useStyles();

  const [userProfile, setUserProfile] = React.useState({
    profileBG: null,
    profileBGStyle: [0, 0],
    userName: '',
    userId: '',
    summary: '',
    sections: [],
    profileImg: null,
    profileImgStyle: [0, 0],
  });
  const [sections, setSections] = React.useState([]);

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <Query
          query={PROFILE_PREVIEW}
          variables={{ userId: profileId }}
          onCompleted={(data) => {
            const {
              name,
              summary,
              profileBG,
              id,
              profileBGStyle,
              profileImg,
              profileImgStyle,
            } = data.profilePreview;
            setUserProfile({
              profileBG: profileBG,
              profileBGStyle: profileBGStyle
                ? profileBGStyle.split(':')
                : [0, 0],
              userName: name,
              userId: id,
              summary,
              sections: [],
              profileImg,
              profileImgStyle: profileImgStyle
                ? profileImgStyle.split(':')
                : [0, 0],
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
                paddingBottom: 5,
              }}
            >
              <Link
                to={`/app/edit-profile`}
                style={{ maxWidth: 326, width: '100%', lineHeight: 0.6 }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  style={{ width: 60, marginLeft: 10 }}
                >
                  <Icon style={{ fontSize: 18, color: '#fff' }}>edit</Icon>
                </Button>
              </Link>
            </div>
          )}

          <div
            style={{
              backgroundImage:
                userProfile.profileBG !== null
                  ? `url(${userProfile.profileBG}`
                  : 'linear-gradient(to bottom right, #fff, #555)',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              minHeight: 300,
              maxHeight: 300,
              width: '100%',
            }}
          ></div>
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
            {userProfile.profileImg && (
              <div
                style={{
                  backgroundImage: `url(${userProfile.profileImg}`,
                  minWidth: 140,
                  maxWidth: 140,
                  minHeight: 140,
                  maxHeight: 140,
                  backgroundSize: 'cover',
                  backgroundPosition: `center center`,
                  borderRadius: 20,
                  border: '4px solid #fff',
                  boxShadow: '0 0 30px rgba(0,0,0,0.2)',
                }}
              ></div>
            )}
          </div>

          <Header str={userProfile.userName} />
          <SubHeader str="Artist" />

          <ColumnWrapper>
            <HeaderTwo str="About Me" />
            <Text
              str={
                userProfile.summary !== ''
                  ? userProfile.summary
                  : `${userProfile.userName} has not submitted a summary yet`
              }
            />
          </ColumnWrapper>

          {sections &&
            sections.map((section, index) =>
              section.type === 'artist' ||
              section.type === 'graphic-artist' ||
              section.type === '3d-artist' ? (
                <GallerySection section={section} key={`section_${index}`} />
              ) : (
                <EditorSection section={section} key={`section_${index}`} />
              ),
            )}
          <Query
            query={SECTIONS_PREVIEW}
            onCompleted={(data) => {
              const sections = data.sectionsPreview;
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
