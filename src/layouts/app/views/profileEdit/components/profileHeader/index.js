import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import TextField from '@material-ui/core/TextField';
import { useStyles } from './styles';
import clsx from 'clsx';
import { Uploader } from '../../../../../../components/uploader';

export function ProfileHeader({
  profile,
  setProfileImg,
  setBgImage,
  setUserName,
  setDisabledValue,
}) {
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:800px)');

  return (
    <div
      style={{
        backgroundImage: `url(${profile.bgImage})`,
      }}
      className={clsx({
        [classes.root]: true,
        [classes.rootMobile]: mobile,
        [classes.rootDesktop]: !mobile,
      })}
    >
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
          <Uploader
            cbImage={url => {
              setDisabledValue(true);
              setProfileImg(url);
            }}
            styleOverride={{
              position: 'absolute',
              width: '60px',
              height: '60px',
              marginLeft: 'auto',
              marginRight: 'auto',
              left: 0,
              top: 38,
              borderRadius: '50%',
              padding: 0,
              opacity: 0.5,
              background: 'none',
            }}
            cbDelete={() => {
              setDisabledValue(true);
              setProfileImg('');
            }}
            hasFile={profile.profileImg ? true : false}
            className={null}
          />
          {profile.profileImg && (
            <CardMedia
              component="img"
              alt={profile.profileImg}
              image={profile.profileImg}
              title="Profile Photo"
              className={classes.avatar}
            />
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
