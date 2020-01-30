import React from 'react';
import Icon from '@material-ui/core/Icon';
import { useStyles } from './styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

export function MediaGallery({ items }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {items.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
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
            <Icon style={{ fontSize: 50, color: '#fff' }}>add_circle</Icon>
          </div>
        </GridListTile>
      </GridList>
    </div>
  );
}
