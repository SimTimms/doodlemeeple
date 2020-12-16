import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useStyles } from './styles';
import clsx from 'clsx';
import imageOptimiser from '../../utils/imageOptimiser';

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
      {large !== null && (
        <div
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            zIndex: 100,
            background: 'rgba(0,0,0,0.8)',
            cursor: 'pointer',
          }}
          onClick={() => setLarge(null)}
        >
          <img
            src={img}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
            }}
            alt=""
            onClick={() => {
              setLarge(null);
            }}
          />
        </div>
      )}
    </div>
  );
}
