import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import { useStyles } from './styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';
import { Uploader } from '../../../../../../components/uploader';

export function ProfileHeader({ bgImage, profile, setBgImage, setUserName }) {
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:800px)');
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
      className={clsx({
        [classes.root]: true,
        [classes.rootMobile]: mobile,
        [classes.rootDesktop]: !mobile,
      })}
    >
      <Uploader cbImage={setBgImage} />
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
          <CardMedia
            component="img"
            alt="Profile Photo"
            image={profile.profileImg}
            title="Profile Photo"
            className={classes.avatar}
          />
        </div>
        <div
          className={clsx({
            [classes.profileName]: true,
            [classes.profileNameMobile]: mobile,
          })}
        >
          <TextField
            id={'userName'}
            label={'Name'}
            value={profile.userName}
            onChange={e => {
              setUserName(e.target.value);
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
