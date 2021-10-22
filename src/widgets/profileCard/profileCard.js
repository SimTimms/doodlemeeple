import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';
import { Query } from 'react-apollo';
import { BgImg, ProfileImg } from './components';
import { Row, Column, IconButton, StatusBadge } from '../../components';
import * as socials from '../../assets/social';
import dmDevice from '../../assets/dmDevice.png';
import { PROFILE_IMAGES, MAKE_FEATURED } from './data';
import imageOptimiser from '../../utils/imageOptimiser';
import { nameShortener } from '../../utils';
import { HistoryContext } from '../../context';
import { timeDifferenceForDate } from '../../utils/dates';
import { ProfileContext } from '../../context';
import { Mutation } from 'react-apollo';

export default function ProfileCard({ creative, setLarge }) {
  const classes = useStyles();

  const linkedIn = !creative.linkedIn ? null : creative.linkedIn;
  const twitter = !creative.twitter ? null : creative.twitter;
  const facebook = !creative.facebook ? null : creative.facebook;
  const instagram = !creative.instagram ? null : creative.instagram;
  const [previewImage, setPreviewImage] = React.useState(null);
  const [images, setImages] = React.useState([]);
  const [featured, setFeatured] = React.useState(0);

  useEffect(() => {
    creative.profileBG && setPreviewImage(creative.profileBG);
    creative.profileBG && setImages([{ img: creative.profileBG }]);
    creative.priority && setFeatured(creative.priority);
  }, [creative]);

  return (
    <HistoryContext.Consumer>
      {(history) => (
        <div
          className={clsx({
            [classes.creativeCard]: true,
          })}
        >
          <Row>
            <BgImg
              previewImage={previewImage}
              onClick={() => {
                setLarge(previewImage);
              }}
              skill={creative.sections.map((section, index) =>
                index > 0 ? ` | ${section.type}` : section.type
              )}
            />

            <Query
              query={PROFILE_IMAGES}
              fetchPolicy="network-only"
              variables={{ userId: creative._id }}
              onCompleted={({ profileImages }) => {
                setImages([...images, ...profileImages]);
                !creative.profileBG &&
                  profileImages.length > 0 &&
                  setPreviewImage(profileImages[0].img);
              }}
            >
              {({ loading, data }) => {
                if (loading) return 'Loading';
                return null;
              }}
            </Query>
          </Row>
          <Row h={60} w="100%" bg="#222" of="hidden">
            {images.length === 0 && (
              <Typography style={{ color: '#fff' }}>No Images</Typography>
            )}
            {images.length > 0 &&
              images.map((image, index) => {
                if (index > 4) return null;
                return (
                  <div
                    className={classes.imageThumb}
                    style={{
                      backgroundImage: `url(${imageOptimiser(image.img)})`,
                    }}
                    onMouseEnter={() => setPreviewImage(image.img)}
                    onClick={() => {
                      setPreviewImage(image.img);
                      setLarge(image.img);
                    }}
                  ></div>
                );
              })}
          </Row>
          <Row>
            <ProfileImg creative={creative} />
            <Column a="flex-start">
              <a
                href={`${process.env.REACT_APP_URL}/user-profile/${creative._id}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: '#222', width: '100%' }}
              >
                <Typography
                  style={{ fontWeight: 'bold', textDecoration: 'underline' }}
                >
                  {creative.name}
                </Typography>
              </a>
              <Typography className={classes.types}>
                {creative.sections.map(
                  (section, index) => `${index > 0 ? ', ' : ''} ${section.type}`
                )}
              </Typography>
              <Typography className={classes.types}>
                {creative.lastOn
                  ? `Last on ${timeDifferenceForDate(creative.lastOn)}`
                  : `Hasn't logged in recently`}
              </Typography>
            </Column>
          </Row>
          {creative.summary && <div className={classes.divider}></div>}
          {creative.summary && (
            <Typography align="center" className={classes.summary}>
              {nameShortener(creative.summary ? creative.summary : '', 60)}
            </Typography>
          )}
          <div className={classes.divider}></div>
          <Column a="center" p="0 0 10px 0">
            <Column w={'100%'}>
              <Row j="space-between" w="100%">
                <Row j="flex-start" w={160}>
                  <a
                    href={`${process.env.REACT_APP_URL}/user-profile/${creative._id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.social}
                  >
                    <img
                      src={dmDevice}
                      className={classes.socialImg}
                      alt="Doodle Meeple"
                    />
                  </a>
                  {linkedIn && (
                    <a
                      href={`${
                        linkedIn.indexOf('linkedin.com/') === -1
                          ? `https://www.linkedin.com/${linkedIn}`
                          : linkedIn
                      }`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classes.social}
                    >
                      <img
                        src={socials.socialLinkedIn}
                        className={classes.socialImg}
                        alt="LinkedIn"
                      />
                    </a>
                  )}
                  {facebook && (
                    <a
                      href={`${
                        facebook.indexOf('facebook.com/') === -1
                          ? `https://www.facebook.com/${facebook}`
                          : facebook
                      }`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classes.social}
                    >
                      <img
                        src={socials.socialFacebook}
                        className={classes.socialImg}
                        alt="Facebook"
                      />
                    </a>
                  )}
                  {twitter && (
                    <a
                      href={`${
                        twitter.indexOf('twitter.com/') === -1
                          ? `https://www.twitter.com/${twitter}`
                          : twitter
                      }`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classes.social}
                    >
                      <img
                        src={socials.socialTwitter}
                        className={classes.socialImg}
                        alt="Twitter"
                      />
                    </a>
                  )}
                  {instagram && (
                    <a
                      href={`${
                        instagram.indexOf('instagram.com/') === -1
                          ? `https://www.instagram.com/${instagram}`
                          : instagram
                      }`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classes.social}
                    >
                      <img
                        src={socials.socialInstagram}
                        className={classes.socialImg}
                        alt="Instagram"
                      />
                    </a>
                  )}
                </Row>

                {creative.website && (
                  <a
                    href={`${
                      creative.website.indexOf('http') === -1
                        ? `https://${creative.website}`
                        : creative.website
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.website}
                  >
                    <Typography className={classes.website}>Website</Typography>
                  </a>
                )}
              </Row>
            </Column>
            {history && (
              <IconButton
                title="Hire on DoodleMeeple"
                color="text-dark"
                icon=""
                iconPos="right"
                onClickEvent={() =>
                  history.push(`/app/new-job-post/${creative._id}`)
                }
                styleOverride={{
                  width: '100%',
                  borderRadius: 0,
                  borderTop: '1px solid #eee',
                  margin: 0,
                  justifyContent: 'center',
                }}
              />
            )}
            <Mutation
              mutation={MAKE_FEATURED}
              variables={{
                _id: creative._id,
                priority: creative.priority === 0 ? 1 : 0,
              }}
              onCompleted={() => setFeatured(featured === 0 ? 1 : 0)}
            >
              {(mutation) => {
                return (
                  <ProfileContext.Consumer>
                    {(profile) =>
                      (profile.email === 'tim-simms@hotmail.com' ||
                        profile.email === 'jamie@doodlemeeple.com') &&
                      featured === 0 ? (
                        <StatusBadge
                          status="Featured"
                          key="key"
                          onClickEvent={() => mutation()}
                        />
                      ) : (
                        <StatusBadge
                          status="Normal"
                          key="key"
                          onClickEvent={() => mutation()}
                        />
                      )
                    }
                  </ProfileContext.Consumer>
                );
              }}
            </Mutation>
          </Column>
        </div>
      )}
    </HistoryContext.Consumer>
  );
}
