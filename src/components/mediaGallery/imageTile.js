import React from 'react';
import { useStyles } from './styles';
import { Button, useMediaQuery, Icon } from '@material-ui/core';
import clsx from 'clsx';
import { DELETE_IMAGE } from '../../data/mutations';
import { useMutation } from '@apollo/client';

export default function ImageTile({ items, setImages, imgData }) {
  const seedID = Math.floor(Math.random());
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:800px)');

  const [deleteImage] = useMutation(DELETE_IMAGE, {
    variables: {
      id: imgData._id,
    },
  });

  return (
    <div
      className={clsx({
        [classes.image]: true,
        [classes.imageMobile]: mobile,
      })}
      style={{
        backgroundImage: `url(${imgData.img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        border: '5px solid #fff',
      }}
    >
      <Button
        className={classes.iconButton}
        onClick={() => {
          let imageArray = Object.assign([], items);
          imageArray = imageArray.filter(
            (arrItem) => arrItem.img !== imgData.img
          );
          setImages(imageArray);
          deleteImage();
        }}
      >
        <Icon className={classes.iconButtonIcon}>delete</Icon>
      </Button>
    </div>
  );
}
