import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';
import { Query } from 'react-apollo';
import { BgImg, ProfileImg } from './components';
import { Row, Column, IconButton } from '../../components';
import * as socials from '../../assets/social';
import dmDevice from '../../assets/dmDevice.png';
import { PROFILE_IMAGES } from '../data';
import imageOptimiser from '../../utils/imageOptimiser';
import { nameShortener } from '../../utils';

export default function ProfileCard({ creative, setLarge, history }) {
  const classes = useStyles();

  const linkedIn = !creative.linkedIn ? null : creative.linkedIn;
  const twitter = !creative.twitter ? null : creative.twitter;
  const facebook = !creative.facebook ? null : creative.facebook;
  const instagram = !creative.instagram ? null : creative.instagram;
  const [previewImage, setPreviewImage] = React.useState(null);
  const [images, setImages] = React.useState([]);

  useEffect(() => {
    setPreviewImage(creative.profileBG);
    setImages([{ img: creative.profileBG }]);
  }, [creative]);

  return (
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
        />

        <Query
          query={PROFILE_IMAGES}
          fetchPolicy="network-only"
          variables={{ userId: creative._id }}
          onCompleted={({ profileImages }) => {
            setImages([{ img: creative.profileBG }, ...profileImages]);
          }}
        >
          {({ loading, data }) => {
            if (loading) return 'Loading';
            return null;
          }}
        </Query>
      </Row>
      <Row h={60} w="100%" bg="#222" of="hidden">
        {images.map((image, index) => {
          if (index > 4) return null;
          return (
            <div
              className={classes.imageThumb}
              style={{ backgroundImage: `url(${imageOptimiser(image.img)})` }}
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
            href={`${process.env.REACT_APP_URL}/public-preview/${creative._id}`}
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
          {creative.publicEmail && (
            <a
              href={`mailto:${creative.publicEmail}`}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.email}
            >
              <Typography className={classes.email}>
                {`${creative.publicEmail}`}{' '}
              </Typography>
            </a>
          )}
        </Column>
      </Row>
      {creative.summary && <div className={classes.divider}></div>}
      {creative.summary && (
        <Typography align="center" className={classes.summary}>
          {nameShortener(creative.summary ? creative.summary : '', 60)}
        </Typography>
      )}
      <div className={classes.divider}></div>
      <Column a="center" p="0" h={70}>
        <Column w={'100%'}>
          <Row j="space-between" w="100%">
            <Row j="flex-start" w={160}>
              <a
                href={`${process.env.REACT_APP_URL}/public-preview/${creative._id}`}
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
              history.push(`/app/edit-job/new/${creative._id}`)
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
      </Column>
    </div>
  );
}
