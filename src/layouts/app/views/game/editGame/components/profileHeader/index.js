import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useStyles } from './styles';
import clsx from 'clsx';
import { Uploader } from '../../../../../../../components';
import autosave from '../../../../../../../utils/autosave';

export function ProfileHeader({
  game,
  setGame,
  setGameImage,
  autosaveFunction,
  setDisabledValue,
}) {
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:800px)');

  return (
    <div
      style={{
        backgroundImage: `url(${game.backgroundImg})`,
        backgroundPosition: 'center center',
      }}
      className={clsx({
        [classes.root]: true,
        [classes.rootMobile]: mobile,
        [classes.rootDesktop]: !mobile,
      })}
    >
      {game.id !== 'new' && (
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            display: 'flex',
            padding: 5,
          }}
        >
          <Uploader
            cbImage={(url) => {
              //  setDisabledValue(true);
              setGameImage('backgroundImg', url);
              if (autosaveFunction) {
                autosave(autosaveFunction, 'image');
              }
            }}
            cbDelete={() => {
              //  setDisabledValue(true);
              setGameImage('backgroundImg', '');
              if (autosaveFunction) {
                autosave(autosaveFunction, 'image');
              }
            }}
            styleOverride={null}
            hasFile={game.backgroundImg ? true : false}
            className={null}
            setImagePosition={null}
            size="700 x 400"
          />
        </div>
      )}
    </div>
  );
}
