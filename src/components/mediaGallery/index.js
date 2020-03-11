import React from 'react';
import { useStyles } from './styles';
import {
  GridList,
  GridListTile,
  Typography,
  Button,
  useMediaQuery,
  Icon,
} from '@material-ui/core';
import { Uploader } from '../../components/uploader';

export function MediaGallery({ items, edit, setBgImage, setImages }) {
  const seedID = Math.floor(Math.random());
  const [mediaViewer, setMediaViewer] = React.useState(null);

  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:800px)');
  return (
    <div className={classes.root} style={{ background: 'none' }}>
      {!mediaViewer ? (
        <GridList
          cellHeight={160}
          className={classes.gridList}
          cols={mobile ? 1 : 3}
          style={{ background: 'none' }}
        >
          {items.map((tile, index) => (
            <GridListTile
              key={`${tile.img}_${seedID}_${index}`}
              cols={tile.cols || 1}
              style={{ background: 'none', position: 'relative' }}
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
              />
            </GridListTile>
          ))}

          {edit && items.length < 6 && (
            <GridListTile key="add_tile" cols={1}>
              <div
                style={{
                  height: '100%',
                  background: '#ddd',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center ',
                }}
              >
                <Uploader
                  cbImage={setBgImage}
                  styleOverride={null}
                  className={null}
                  cbDelete={null}
                  hasFile={false}
                />
              </div>
            </GridListTile>
          )}
        </GridList>
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
