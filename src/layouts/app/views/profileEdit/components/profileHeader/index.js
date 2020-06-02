import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import TextField from '@material-ui/core/TextField';
import { useStyles } from './styles';
import clsx from 'clsx';
import { Uploader, FieldTitle, Divider } from '../../../../../../components';
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
  autosaveFunction,
}) {
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:800px)');

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${profile.bgImage})`,
          backgroundPosition: 'center center',
        }}
        className={clsx({
          [classes.root]: true,
          [classes.rootImage]: profile.bgImage,
          [classes.rootMobile]: mobile,
          [classes.rootDesktop]: !mobile,
        })}
      >
        <Uploader
          cbImage={(url) => {
            setBgImage(url);
            if (autosaveFunction) {
              autosave(autosaveFunction, 'image');
            }
          }}
          cbDelete={() => {
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
      <Divider />
      <FieldTitle
        name="My Identity"
        description="Your profile picture or logo and name, callsign, company name, handle, alias or whatever else you want to be know as. Keep it clean please. Image Requirements: 140 x 140px, png or jpg, less than 2MB"
        warning=""
        inline={false}
      />
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
                setProfileImg(url);
                if (autosaveFunction) {
                  autosave(autosaveFunction, 'image');
                }
              }}
              styleOverride={null}
              cbDelete={() => {
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
