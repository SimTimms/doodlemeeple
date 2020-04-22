import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import TextField from '@material-ui/core/TextField';
import { useStyles } from './styles';
import clsx from 'clsx';
import { Uploader } from '../../../../../../components';
import autosave from '../../../../../../utils/autosave';

export function ProfileHeader({
  game,
  setGame,
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
            setGame({ ...game, backgroundImg: url });
            if (autosaveFunction) {
              autosave(autosaveFunction, 'image');
            }
          }}
          cbDelete={() => {
            setDisabledValue(true);
            setGame({ ...game, backgroundImg: '' });
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
      <div
        className={clsx({
          [classes.profileWrapper]: true,
          [classes.profileWrapperMobile]: mobile,
          [classes.profileWrapperDesktop]: !mobile,
        })}
      >
        <div
          className={clsx({
            [classes.avatarWrapper]: true,
            [classes.avatarWrapperMobile]: mobile,
          })}
        >
          <div
            className={clsx({
              [classes.controlsWrapper]: true,
              [classes.controlsWrapperCenter]: !game.img,
              [classes.controlsWrapperCenterMobile]: mobile,
            })}
          >
            <Uploader
              cbImage={(url) => {
                setDisabledValue(true);
                setGame({ ...game, img: url });
                if (autosaveFunction) {
                  autosave(autosaveFunction, 'image');
                }
              }}
              styleOverride={null}
              cbDelete={() => {
                setDisabledValue(true);
                setGame({ ...game, img: '' });
                if (autosaveFunction) {
                  autosave(autosaveFunction, 'image');
                }
              }}
              hasFile={game.img ? true : false}
              className={null}
              setImagePosition={null}
              size="140 x 140"
            />
          </div>
          {game.img && (
            <div
              style={{
                backgroundSize: 'cover',
                backgroundImage: `url(${game.img})`,
              }}
              className={classes.avatar}
            ></div>
          )}
        </div>
        <div
          className={clsx({
            [classes.profileName]: true,
            [classes.profileNameMobile]: mobile,
          })}
        >
          <TextField
            id={'name'}
            value={game.name}
            label={`Name ${game.name ? `(${126 - game.name.length})` : ''}`}
            inputProps={{ maxLength: 126 }}
            onChange={(e) => {
              setDisabledValue(true);
              if (autosaveFunction) {
                autosave(autosaveFunction, 'username');
              }
              setGame({
                ...game,
                name: e.target.value.replace(/[^A-Za-z0-9 ]/g, ''),
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
