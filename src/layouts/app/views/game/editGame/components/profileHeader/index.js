import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useStyles } from './styles';
import clsx from 'clsx';
import { Uploader } from '../../../../../../../components';
import autosave from '../../../../../../../utils/autosave';

export function ProfileHeader({
  game,
  setGameImage,
  setGame,
  autosaveFunction,
}) {
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:800px)');

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${game.backgroundImg})`,
          backgroundPosition: 'center center',
        }}
        className={clsx({
          [classes.root]: true,
          [classes.rootImage]: game.backgroundImg,
          [classes.rootMobile]: mobile,
          [classes.rootDesktop]: !mobile,
        })}
      >
        <Uploader
          cbImage={(url) => {
            setGameImage('backgroundImg', url);
            if (autosaveFunction) {
              autosave(autosaveFunction, 'image');
            }
          }}
          cbDelete={() => {
            setGameImage('backgroundImg', '');
            if (autosaveFunction) {
              autosave(autosaveFunction, 'image');
            }
          }}
          styleOverride={null}
          hasFile={game.backgroundImg ? true : false}
          className={null}
          setImagePosition={null}
          size="1920 x 300"
        />
      </div>
    </div>
  );
}
