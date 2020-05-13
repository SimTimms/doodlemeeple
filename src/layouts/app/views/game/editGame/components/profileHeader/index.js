import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import TextField from '@material-ui/core/TextField';
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
              setDisabledValue(true);
              setGameImage('backgroundImg', url);
              if (autosaveFunction) {
                autosave(autosaveFunction, 'image');
              }
            }}
            cbDelete={() => {
              setDisabledValue(true);
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
      <div
        className={clsx({
          [classes.profileWrapper]: true,
          [classes.profileWrapperMobile]: mobile,
          [classes.profileWrapperDesktop]: !mobile,
        })}
      >
        <div
          className={clsx({
            [classes.profileName]: true,
            [classes.profileNameMobile]: mobile,
          })}
        >
          <TextField
            id={'name'}
            value={game.name}
            label={`Game Name ${game.name ? `(${86 - game.name.length})` : ''}`}
            inputProps={{ maxLength: 86 }}
            onChange={(e) => {
              setDisabledValue(true);
              if (autosaveFunction) {
                autosave(autosaveFunction, 'username');
              }
              setGame({
                ...game,
                name: e.target.value.replace(/[^A-Za-z0-9 ,\-.!()£$"'\n]/g, ''),
              });
            }}
            margin="normal"
            variant="outlined"
            style={{ marginRight: 10 }}
          />
        </div>
      </div>
    </div>
  );
}
