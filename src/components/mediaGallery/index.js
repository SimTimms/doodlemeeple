import React from 'react';
import Icon from '@material-ui/core/Icon';
import { useStyles } from './styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import map from 'src/assets/map.jpg';

export function MediaGallery({ items, sketches, setSketches, edit }) {
  const seedID = Math.floor(Math.random());
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ background: 'none' }}>
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
                  const newArr = [
                    ...sketches,
                    {
                      img: map,
                      title: 'Image',
                      author: 'author',
                      cols: 1,
                    },
                  ];
                  setSketches(newArr);
                }}
              >
                add_circle
              </Icon>
            </div>
          </GridListTile>
        )}
      </GridList>
    </div>
  );
}
