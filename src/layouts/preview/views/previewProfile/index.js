import React from 'react';
import { Slide } from '@material-ui/core';
import { useStyles } from './styles';
import logo from '../../../../assets/logo.svg';
import {
  Header,
  ColumnWrapper,
  HeaderTwo,
  Text,
  IconButton,
  MenuButtonShortcut,
  Row,
} from '../../../../components';
import { Query } from 'react-apollo';
import { PROFILE_PREVIEW, SECTIONS_PREVIEW } from '../../../../data/queries';
import GallerySection from './components/section/gallerySection';
import { TYPE_HELPER } from '../../../../utils';
import socialLinkedIn from '../../../../assets/socialLinkedIn.png';
import socialFacebook from '../../../../assets/socialFacebook.png';
import Avatar from './avatar';
import SocialIcon from './socialIcon';
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
              <SocialIcon img={socialLinkedIn} link={userProfile.linkedIn} />
              <SocialIcon img={socialLinkedIn} link={userProfile.linkedIn} />

              <Row>
                <MenuButtonShortcut
                  text={{
                    name: 'All Skills',
                    color: '#222',
                    icon: 'chevron_right',
                    count: 0,
                  }}
                  onClickEvent={() => {
                    setPage(-1);
                  }}
                  active={page === -1}
                />
                {sections &&
                  sections.map((section, index) => {
                    return (
                      <MenuButtonShortcut
                        text={{
                          name: `${TYPE_HELPER(section.type)} `,
                          color: '#222',
                          icon: 'chevron_right',
                          count: 0,
                        }}
                        onClickEvent={() => {
                          setPage(index);
                        }}
                        active={page === index}
                      />
                    );
                  })}
              </Row>
            </div>
          </ColumnWrapper>
          <ColumnWrapper>
            <HeaderTwo str="About Me" />
            <Text
              str={
                userProfile.summary !== ''
                  ? userProfile.summary
                  : `${userProfile.name} has not submitted a summary yet`
              }
            />
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
