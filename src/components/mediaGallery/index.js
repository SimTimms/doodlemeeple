import React from 'react';
import { useStyles } from './styles';
import { Typography, Button, useMediaQuery, Icon } from '@material-ui/core';
import { Uploader } from '../../components';
import clsx from 'clsx';

function MediaGallery({ items, edit, setBgImage, setImages }) {
  const seedID = Math.floor(Math.random());
  const [mediaViewer, setMediaViewer] = React.useState(null);

  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:800px)');
  return (
    <div className={classes.root} style={{ background: 'none', padding: 20 }}>
      {!mediaViewer ? (
        <div className={classes.gridList} style={{ background: 'none' }}>
          {items.map((tile, index) => (
            <div
              key={`${tile.img}_${seedID}_${index}`}
              className={clsx({
                [classes.image]: true,
                [classes.imageMobile]: mobile,
              })}
            >
              <Button
                className={classes.iconButton}
                onClick={() => {
                  let imageArray = Object.assign([], items);
                  imageArray = imageArray.filter(
                    arrItem => arrItem.img !== tile.img,
                  );

                  setImages(imageArray);
                }}
              >
                <Icon className={classes.iconButtonIcon}>delete</Icon>
              </Button>
              <img
                src={tile.img}
                alt={tile.title}
                onClick={() => setMediaViewer(tile)}
                style={{
                  width: '100%',
                  boxShadow: '10px 10px 10px rgba(0,0,0,0.3)',
                }}
              />
            </div>
          ))}

          {edit && items.length < 6 && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center ',
                width: '33%',
                minHeight: 200,
              }}
            >
              <Uploader
                cbImage={setBgImage}
                styleOverride={null}
                className={null}
                cbDelete={null}
                hasFile={false}
                setImagePosition={null}
              />
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
