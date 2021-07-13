import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { Query } from 'react-apollo';
import { Row } from '../../../components';
import { PROFILE_IMAGES } from '../data';
import imageOptimiser from '../../../utils/imageOptimiser';

export default function ImageThumbs({
  profileBG,
  creativeId,
  setPreviewImage,
  setLarge,
}) {
  const classes = useStyles();

  return (
    <Query
      query={PROFILE_IMAGES}
      fetchPolicy="network-only"
      variables={{ userId: creativeId }}
      onCompleted={({ profileImages }) => {
        !profileBG &&
          profileImages.length > 0 &&
          setPreviewImage(profileImages[0].img);
      }}
    >
      {({ loading, data }) => {
        if (loading) return 'Loading';
        const images = data.profileImages;
        return (
          data && (
            <Row h={100} w="100%" bg="#222" of="hidden" pt={4} pb={4}>
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
                      onMouseEnter={() => {
                        setPreviewImage(image.img);
                      }}
                      onClick={() => {
                        setPreviewImage(image.img);
                        setLarge(image.img);
                      }}
                    ></div>
                  );
                })}
            </Row>
          )
        );
      }}
    </Query>
  );
}
