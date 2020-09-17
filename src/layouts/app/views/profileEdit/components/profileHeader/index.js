import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useStyles } from './styles';
import clsx from 'clsx';
import { Uploader, FieldTitle } from '../../../../../../components';
import autosave from '../../../../../../utils/autosave';

export function ProfileHeader({
  profile,
  setProfileImg,
  setBgImage,
  autosaveFunction,
}) {
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:800px)');

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${profile.profileBG})`,
          backgroundPosition: 'center center',
        }}
        className={clsx({
          [classes.root]: true,
          [classes.rootImage]: profile.profileBG,
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
          hasFile={profile.profileBG ? true : false}
          className={null}
          size="1920 x 300"
        />
      </div>
      <FieldTitle
        name="Profile Image"
        description="Your mugshot or logo"
        warning="PNG,GIF or JPG | optimum size 140 x 140 | 1MB Max"
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
        ></div>
      </div>
    </div>
  );
}
