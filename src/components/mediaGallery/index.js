import React from 'react';
import { useStyles } from './styles';
import { Typography, Button, useMediaQuery, Icon } from '@material-ui/core';
import { Uploader } from '../../components';
import clsx from 'clsx';
import { UPLOAD_IMAGE, DELETE_IMAGE } from '../../data/mutations';
import { Mutation } from 'react-apollo';

function MediaGallery({ items, edit, setImages, galleryId, ...props }) {
  const seedID = Math.floor(Math.random());
  const [mediaViewer, setMediaViewer] = React.useState(null);
  const [saveImage, setSaveImage] = React.useState(null);
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:800px)');
  const { sectionType, badges } = props;
  const maxImages = badges
    ? badges.filter((badge) => badge.badgeType === 'golden').length > 0
      ? 12
      : 6
    : 6;

  return (
    <div className={classes.root} style={{ background: 'none', padding: 0 }}>
      {!mediaViewer ? (
        <div className={classes.gridList} style={{ background: 'none' }}>
          {items.map((tile, index) => (
            <div
              key={`${tile.img}_${seedID}_${index}`}
              className={clsx({
                [classes.image]: true,
                [classes.imageMobile]: mobile,
              })}
              style={{
                backgroundImage: `url(${tile.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                border: '5px solid #fff',
              }}
            >
              <Mutation
                mutation={DELETE_IMAGE}
                variables={{ id: tile._id }}
                onCompleted={(data) => {
                  let imageArray = Object.assign([], items);
                  imageArray = imageArray.filter(
                    (arrItem) => arrItem.img !== tile.img
                  );
                  setImages(imageArray);
                }}
              >
                {(mutation) => {
                  return (
                    <Button
                      className={classes.iconButton}
                      onClick={() => {
                        mutation();
                      }}
                    >
                      <Icon className={classes.iconButtonIcon}>delete</Icon>
                    </Button>
                  );
                }}
              </Mutation>
            </div>
          ))}

          {edit && items.length < maxImages && (
            <div
              className={clsx({
                [classes.image]: true,
                [classes.imageMobile]: mobile,
              })}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '5px solid #fff',
              }}
            >
              <Mutation
                mutation={UPLOAD_IMAGE}
                variables={{
                  img: saveImage,
                  galleryId: galleryId,
                  category: sectionType,
                }}
                onCompleted={(data) => {
                  let imageArray = Object.assign([], items);
                  imageArray = [
                    ...imageArray,
                    {
                      _id: data.imageCreateOne.recordId,
                      img: data.imageCreateOne.record.img,
                    },
                  ];
                  setImages(imageArray);
                }}
              >
                {(mutation) => {
                  return (
                    <Uploader
                      cbImage={(url) => {
                        setSaveImage(url);
                        mutation();
                      }}
                      styleOverride={null}
                      className={null}
                      cbDelete={null}
                      hasFile={false}
                      size="2MB PNG JPG GIF"
                      imageCategory={sectionType}
                    />
                  );
                }}
              </Mutation>
            </div>
          )}
        </div>
      ) : (
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center ',
            flexDirection: 'column',
          }}
        >
          <img src={mediaViewer.img} alt={mediaViewer.title} />
          <Typography color="textSecondary" component="p" variant="h5">
            {mediaViewer.title}
          </Typography>
          <Button
            color="primary"
            onClick={() => {
              setMediaViewer(null);
            }}
          >
            Back
          </Button>
        </div>
      )}
    </div>
  );
}

export default MediaGallery;
