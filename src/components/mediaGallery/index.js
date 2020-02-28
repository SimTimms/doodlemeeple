import React from 'react';
import { useStyles } from './styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Uploader } from '../../components/uploader';
import Icon from '@material-ui/core/Icon';

export function MediaGallery({ items, edit, setBgImage, setImages }) {
  const seedID = Math.floor(Math.random());
  const [mediaViewer, setMediaViewer] = React.useState(null);

  const classes = useStyles();

  return (
    <div className={classes.root} style={{ background: 'none' }}>
      {!mediaViewer ? (
        <GridList
          cellHeight={160}
          className={classes.gridList}
          cols={3}
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
                  console.log(imageArray);
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
                <Uploader cbImage={setBgImage} styleOverride={null} />
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
            color="secondary"
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
