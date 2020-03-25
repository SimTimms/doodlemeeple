import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import TextField from '@material-ui/core/TextField';
import { useStyles } from './styles';
import clsx from 'clsx';
import { Uploader } from '../../../../../../components/uploader';
import { ImagePos } from '../../../../../../components/imagePos';

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
}) {
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:800px)');

  const [imagePosition, setImagePosition] = React.useState([
    profileBGStyle[0],
    profileBGStyle[1],
  ]);
  const [imagePositionBG, setImagePositionBG] = React.useState([
    profileBGStyle[0],
    profileBGStyle[1],
  ]);

  console.log(imagePositionBG);

  return (
    <div
      style={{
        backgroundImage: `url(${profile.bgImage})`,
        backgroundPosition: `${-imagePositionBG[0] *
          2}px ${-imagePositionBG[1] * 2}px`,
      }}
      className={clsx({
        [classes.root]: true,
        [classes.rootMobile]: mobile,
        [classes.rootDesktop]: !mobile,
      })}
    >
      <div style={{ position: 'absolute', right: 0, top: 0, display: 'flex' }}>
        {profile.bgImage && (
          <ImagePos
            imagePosition={imagePositionBG}
            setImagePosition={setImagePositionBG}
            setStyle={setProfileBGStyle}
          />
        )}
        <Uploader
          cbImage={url => {
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
            })}
          >
            {profile.profileImg && (
              <ImagePos
                imagePosition={imagePosition}
                setImagePosition={setImagePosition}
                setStyle={setProfileImgStyle}
              />
            )}
            <Uploader
              cbImage={url => {
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
                backgroundPosition: `${-imagePosition[0] *
                  2}px ${-imagePosition[1] * 2}px`,
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
            onChange={e => {
              setDisabledValue(true);
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
