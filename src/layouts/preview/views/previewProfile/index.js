import React from 'react';
import { Slide } from '@material-ui/core';
import { useStyles } from './styles';
import logo from '../../../../assets/logo.svg';
import logoDevice from '../../../../assets/dm_device.png';
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

export function PreviewProfile({ history, theme, profileId, publicView }) {
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
              background:
                userProfile.profileBG !== null
                  ? `url(${userProfile.profileBG}`
                  : '#fafafa',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              minHeight: 300,
              maxHeight: 300,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            {userProfile.profileBG === null && (
              <img src={logo} style={{ width: 500 }} />
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
              <div
                style={{
                  backgroundColor: theme.palette.primary.main,
                  backgroundImage: userProfile.profileImg
                    ? `url(${userProfile.profileImg}`
                    : `url(${logoDevice})`,
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
