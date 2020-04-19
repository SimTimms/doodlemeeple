import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Card, Typography, Slide, Button } from '@material-ui/core';
import { useStyles } from './styles';
import { LoadIcon } from '../../../../components';
import { Query } from 'react-apollo';
import { PROFILE_PREVIEW, SECTIONS_PREVIEW } from '../../../../data/queries';
import { animated, useSpring } from 'react-spring';
import GallerySection from './components/section/gallerySection';
import EditorSection from './components/section/editorSection';
const { detect } = require('detect-browser');
const browser = detect();

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
  const [sections, setSections] = React.useState([]);
  const [imagePos, setImagePos] = React.useState({
    x: 0,
    y: 0,
  });

  const { o } = useSpring({
    from: {
      o: 130,
    },
    o: 100,
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
                backgroundSize:
                  browser && browser.name === 'firefoxblam'
                    ? o.interpolate((o) => {
                        return `${o}%`;
                      })
                    : 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'flex-start',

                minHeight: 400,
                maxHeight: 400,
                boxShadow: 'inset 0 0 10px rgba(255,255,255,0.5)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  flexDirection: 'row',
                  background: 'rgba(0,0,0,0.7)',
                  alignItems: 'center',
                  padding: 20,
                  width: '100%',
                }}
              >
                <div
                  style={{
                    backgroundImage: `url(${userProfile.profileImg}`,
                    minWidth: 100,
                    maxWidth: 100,
                    minHeight: 100,
                    maxHeight: 100,
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
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-start',
                      flexDirection: 'row',
                      marginLeft: 10,
                      marginBottom: 10,
                    }}
                  >
                    <Typography
                      variant="h1"
                      style={{
                        textShadow: '3px 3px 3px rgba(0,0,0,0.4)',
                        color: '#fff',
                        lineHeight: 0.8,
                      }}
                    >
                      {userProfile.userName}
                    </Typography>
                  </div>
                  <Typography
                    variant="h2"
                    style={{ color: '#fff', marginLeft: 10 }}
                  >
                    {userProfile.summary}
                  </Typography>
                </div>
              </div>
            </animated.div>

            {sections &&
              sections.map((section, index) =>
                section.type === 'artist' ||
                section.type === 'graphic-artist' ||
                section.type === '3d-artist' ? (
                  <GallerySection section={section} />
                ) : (
                  <EditorSection section={section} />
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
