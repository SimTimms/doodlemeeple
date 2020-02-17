import React from 'react';
import Icon from '@material-ui/core/Icon';
import { useStyles } from './styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export function MediaGallery({ items, setItems, edit }) {
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
              style={{ background: 'none' }}
              onClick={() => setMediaViewer(tile)}
            >
              <img src={tile.img} alt={tile.title} />
            </GridListTile>
          ))}

          {edit && (
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
                <Icon
                  style={{ fontSize: 50, color: '#fff' }}
                  onClick={() => {
                    setItems();
                  }}
                >
                  add_circle
                </Icon>
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
