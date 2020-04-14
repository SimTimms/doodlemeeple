import React, { useEffect } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import TextField from '@material-ui/core/TextField';
import { useStyles } from './styles';
import clsx from 'clsx';
import { ImagePos, Uploader } from '../../../../../../components';
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

  const [imagePositionBG, setImagePositionBG] = React.useState({
    x: 0,
    y: 0,
  });
  const [imagePosition, setImagePosition] = React.useState({
    x: 0,
    y: 0,
  });

  const [timer, setTimer] = React.useState(null);

  useEffect(() => {
    setImagePositionBG({
      x: profileBGStyle[0] * 1,
      y: profileBGStyle[1] * 1,
    });
    setImagePosition({
      x: profileImgStyle[0] * 1,
      y: profileImgStyle[1] * 1,
    });
  }, [profileBGStyle, profileImgStyle]);

  return (
    <div
      style={{
        backgroundImage: `url(${profile.bgImage})`,
        backgroundPosition: `${-imagePositionBG.x}px ${-imagePositionBG.y}px`,
      }}
      className={clsx({
        [classes.root]: true,
        [classes.rootMobile]: mobile,
        [classes.rootDesktop]: !mobile,
      })}
    >
      <div style={{ position: 'absolute', right: 0, top: 0, display: 'flex' }}>
        {/*profile.bgImage && !mobile && (
          <ImagePos
            imagePosition={imagePositionBG}
            setImagePosition={setImagePositionBG}
            setCB={() => {
              setDisabledValue(true);
              if (autosaveFunction) {
                autosave(autosaveFunction, 'imagepos');
              }
            }}
            setStyle={setProfileBGStyle}
          />
          )*/}
        <Uploader
          cbImage={(url) => {
            setDisabledValue(true);
            setBgImage(url);
          }}
          cbDelete={() => {
            setDisabledValue(true);
            setBgImage('');
          }}
          styleOverride={null}
          hasFile={profile.bgImage ? true : false}
          className={null}
          setImagePosition={setImagePositionBG}
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
            {/*profile.profileImg && !mobile && (
              <ImagePos
                imagePosition={imagePosition}
                setImagePosition={setImagePosition}
                setStyle={setProfileImgStyle}
                setCB={() => {
                  setDisabledValue(true);
                  setDisabledValue(true);
                  if (autosaveFunction) {
                    autosave(autosaveFunction, 'imageposprofile');
                  }
                }}
              />
              )*/}
            <Uploader
              cbImage={(url) => {
                setDisabledValue(true);
                setProfileImg(url);
              }}
              styleOverride={null}
              cbDelete={() => {
                setDisabledValue(true);
                setProfileImg('');
              }}
              hasFile={profile.profileImg ? true : false}
              className={null}
              setImagePosition={setImagePosition}
            />
          </div>
          {profile.profileImg && (
            <div
              style={{
                backgroundSize: 'cover',
                backgroundImage: `url(${profile.profileImg})`,
                backgroundPosition: `${-imagePosition.x}px ${-imagePosition.y}px`,
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
