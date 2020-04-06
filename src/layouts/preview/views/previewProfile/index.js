import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Card, Typography, Slide, Button } from '@material-ui/core';
import { useStyles } from './styles';
import { LoadIcon } from '../../../../components';
import { Query } from 'react-apollo';
import { PROFILE_PREVIEW, SECTIONS_PREVIEW } from '../../../../data/queries';
import { animated, useSpring } from 'react-spring';
import GallerySection from './components/section/gallerySection';

export function PreviewProfile({ theme, profileId }) {
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
  const [sectionNames, setSectionNames] = React.useState([]);
  const [sections, setSections] = React.useState([]);
  const [imagePos, setImagePos] = React.useState({
    x: 0,
    y: 0,
  });
  const [index, set] = useState(0);

  const props = useSpring({
    from: {
      backgroundSize: '120%',
    },
    to: {
      backgroundSize: '100%',
    },
    config: {
      duration: 30000,
    },
  });

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

            profileImgStyle &&
              setImagePos({
                x: profileImgStyle[0] * 1,
                y: profileImgStyle[1] * 1,
              });
          }}
        >
          {({ loading, error, data }) => {
            if (loading) return <LoadIcon />;
            if (error) return <div>Error</div>;
            return <div></div>;
          }}
        </Query>

        <div className={classes.root}>
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
          <Card className={classes.card}>
            <animated.div
              style={{
                backgroundImage:
                  userProfile.profileBG !== null
                    ? `url(${userProfile.profileBG}`
                    : 'linear-gradient(to bottom right, #fff, #555)',
                backgroundSize: '100%',
                ...props,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: 20,
                  background: '#fff',
                  marginTop: 100,
                  marginBottom: 100,
                  borderRadius: '0 5px 5px 0',
                  boxShadow: ' 5px 5px 10px rgba(0,0,0,0.5)',
                  border: '1px solid rgba(0,0,0,0.1)',
                  borderLeft: 'none',
                }}
              >
                <div
                  style={{
                    backgroundImage: `url(${userProfile.profileImg}`,
                    width: 100,
                    height: 100,
                    backgroundSize: 'cover',
                    backgroundPosition: `${-imagePos.x}px ${-imagePos.y}px`,
                    borderRadius: '50%',
                    border: '3px solid #ddd',
                  }}
                ></div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    flexDirection: 'column',
                    marginLeft: 10,
                  }}
                >
                  <Typography
                    variant="h1"
                    style={{
                      textShadow: '3px 3px 3px rgba(0,0,0,0.2)',
                    }}
                  >
                    {userProfile.userName}
                  </Typography>
                  <Typography variant="h6">
                    {sectionNames.map((item, index) => {
                      return index === 0 ? item : `, ${item}`;
                    })}
                  </Typography>
                </div>
              </div>
            </animated.div>

            <Typography
              variant="h2"
              style={{ padding: 30, background: '#222', color: '#fff' }}
            >
              {userProfile.summary}
            </Typography>
            {sections &&
              sections.map((section, index) =>
                section.type === 'artist' ||
                section.type === 'graphic-artist' ||
                section.type === '3d-artist' ? (
                  <GallerySection section={section} />
                ) : null,
              )}
            <Query
              query={SECTIONS_PREVIEW}
              onCompleted={(data) => {
                const sections = data.sectionsPreview;
                console.log(sections);
                setSectionNames(sections.map((item) => item.type));
                setSections(sections);
              }}
              variables={{ userId: profileId }}
              fetchPolicy="network-only"
            >
              {({ loading, error, data }) => {
                if (loading) return <LoadIcon />;
                if (error) return <div>Error</div>;
                return null;
              }}
            </Query>
          </Card>
        </div>
      </div>
    </Slide>
  );
}
