import React from 'react';
import { useStyles } from './styles';
import { Row, FavouriteButton } from '../../';

export default function FavMenu({ creative, favourite }) {
  const classes = useStyles();

  return (
    <div className={classes.favWrapper}>
      <Row j="flex-end" w="100%">
        <FavouriteButton favourite={favourite} creative={creative} />
      </Row>
    </div>
  );
}
