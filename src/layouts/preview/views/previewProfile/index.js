import React from 'react';
import { Link } from 'react-router-dom';
import { Slide } from '@material-ui/core';
import { useStyles } from './styles';
import {
  Header,
  SubHeader,
  ColumnWrapper,
  HeaderTwo,
  Text,
  IconButton,
} from '../../../../components';
import { Query } from 'react-apollo';
import { PROFILE_PREVIEW, SECTIONS_PREVIEW } from '../../../../data/queries';
import GallerySection from './components/section/gallerySection';
import EditorSection from './components/section/editorSection';

export function PreviewProfile({ theme, profileId, publicView }) {
  const classes = useStyles();

  const [userProfile, setUserProfile] = React.useState({
    profileBG: null,
    userName: '',
    userId: '',
    summary: '',
    sections: [],
    profileImg: null,
  });
  const [sections, setSections] = React.useState([]);

  return (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <Query
          query={PROFILE_PREVIEW}
          variables={{ userId: profileId }}
          onCompleted={(data) => {
            const { name, summary, profileBG, _id, profileImg } = data.userById;
            setUserProfile({
              profileBG: profileBG,
              userName: name,
              userId: _id,
              summary,
              sections: [],
              profileImg,
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
              <Link
                to={`/app/edit-profile`}
                style={{ maxWidth: 326, width: '100%', lineHeight: 0.6 }}
              >
                <IconButton
                  title="Edit"
                  icon="edit"
                  iconPos="right"
                  disabled={false}
                  color="secondary"
                  styleOverride={null}
                  type="button"
                  onClickEvent={() => {}}
                ></IconButton>
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
              <Header str={userProfile.userName} />
              <SubHeader str="Artist" />
            </div>
          </ColumnWrapper>
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
            sections.map((section, index) => (
              <GallerySection section={section} key={`section_${index}`} />
            ))}
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
