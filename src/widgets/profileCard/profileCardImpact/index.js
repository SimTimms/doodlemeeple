import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';
import { Query } from 'react-apollo';
import { BgImg, ProfileImg, Badges } from '../components';
import { Row, Column, HrefLink } from '../../../components';
import { PROFILE_IMAGES } from '../data';
import imageOptimiser from '../../../utils/imageOptimiser';
import { timeDifferenceForDate } from '../../../utils/dates';
import { MenuContext } from '../../../context';

export default function ProfileCardImpact({ creative, setLarge }) {
  const classes = useStyles();

  const [previewImage, setPreviewImage] = React.useState(null);
  const [images, setImages] = React.useState([]);

  useEffect(() => {
    setPreviewImage(creative.profileBG);
    setImages([{ img: creative.profileBG }]);
  }, [creative]);

  return (
    <MenuContext.Consumer>
      {(menu) => (
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
              <Row j="space-between" pr={10}>
                <HrefLink
                  title={creative.name}
                  url={`/user-profile/${creative._id}`}
                  underline={true}
                />
                <Badges creative={creative} />
              </Row>

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
        </div>
      )}
    </MenuContext.Consumer>
  );
}
