import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';
import { Query } from 'react-apollo';
import { BgImg, ProfileImg } from './components';
import { Row, Column } from '../../components';
import { PROFILE_IMAGES } from './data';
import imageOptimiser from '../../utils/imageOptimiser';

export default function ProfileCardMini({ creative, setLarge, history }) {
  const classes = useStyles();

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
          skill={creative.sections.map((section, index) =>
            index > 0 ? ` | ${section.type}` : section.type
          )}
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
    </div>
  );
}
