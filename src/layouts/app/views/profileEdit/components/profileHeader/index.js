import React, { useEffect } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import TextField from '@material-ui/core/TextField';
import { useStyles } from './styles';
import clsx from 'clsx';
import { Uploader } from '../../../../../../components';
import autosave from '../../../../../../utils/autosave';

export function ProfileHeader({
  profile,
  setProfileImg,
  setProfileImgStyle,
  setBgImage,
  profileBGStyle,
  profileImgStyle,
  setProfileBGStyle,
  setUserName,
  setDisabledValue,
  autosaveFunction,
}) {
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:800px)');

  return (
    <div
      style={{
        backgroundImage: `url(${profile.bgImage})`,
        backgroundPosition: 'center center',
      }}
      className={clsx({
        [classes.root]: true,
        [classes.rootMobile]: mobile,
        [classes.rootDesktop]: !mobile,
      })}
    >
      <div style={{ position: 'absolute', right: 0, top: 0, display: 'flex' }}>
        <Uploader
          cbImage={(url) => {
            setDisabledValue(true);
            setBgImage(url);
            if (autosaveFunction) {
              autosave(autosaveFunction, 'image');
            }
          }}
          cbDelete={() => {
            setDisabledValue(true);
            setBgImage('');
            if (autosaveFunction) {
              autosave(autosaveFunction, 'image');
            }
          }}
          styleOverride={null}
          hasFile={profile.bgImage ? true : false}
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
              [classes.controlsWrapperCenter]: !profile.profileImg,
              [classes.controlsWrapperCenterMobile]: mobile,
            })}
          >
            <Uploader
              cbImage={(url) => {
                setDisabledValue(true);
                setProfileImg(url);
                if (autosaveFunction) {
                  autosave(autosaveFunction, 'image');
                }
              }}
              styleOverride={null}
              cbDelete={() => {
                setDisabledValue(true);
                setProfileImg('');
                if (autosaveFunction) {
                  autosave(autosaveFunction, 'image');
                }
              }}
              hasFile={profile.profileImg ? true : false}
              className={null}
              setImagePosition={null}
              size="140 x 140"
            />
          </div>
          {profile.profileImg && (
            <div
              style={{
                backgroundSize: 'cover',
                backgroundImage: `url(${profile.profileImg})`,
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
            id={'userName'}
            value={profile.userName}
            label={`Name ${
              profile.userName ? `(${26 - profile.userName.length})` : ''
            }`}
            inputProps={{ maxLength: 26 }}
            onChange={(e) => {
              setDisabledValue(true);
              if (autosaveFunction) {
                autosave(autosaveFunction, 'username');
              }
              setUserName(e.target.value.replace(/[^A-Za-z0-9 ]/g, ''));
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
