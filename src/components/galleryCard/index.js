import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useStyles } from './styles';
import clsx from 'clsx';
import imageOptimiser from '../../utils/imageOptimiser';
import { LargeImage } from '../';

export default function GalleryCard({ img }) {
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:800px)');
  const [large, setLarge] = React.useState(null);

  return (
    <div
      className={clsx({
        [classes.imgWrapper]: true,
        [classes.imgWrapperMobile]: mobile,
      })}
    >
      <div
        className={classes.imgBack}
        style={{
          cursor: 'pointer',
          backgroundImage: `url(${imageOptimiser(img)})`,
        }}
        onClick={() => {
          setLarge(img);
        }}
      ></div>
      {large !== null && <LargeImage large={large} setLarge={setLarge} />}
    </div>
  );
}
