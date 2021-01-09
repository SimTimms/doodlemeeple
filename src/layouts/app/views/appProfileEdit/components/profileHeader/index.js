import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useStyles } from './styles';
import clsx from 'clsx';
import {
  Uploader,
  FieldTitle,
  ErrorBox,
  FieldBox,
  Row,
  Column,
} from '../../../../../../components';
import autosave from '../../../../../../utils/autosave';

export function ProfileHeader({
  profile,
  setProfile,
  errors,
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
        name="You"
        description="Provide your name and a photo or image of you, then tell everyone about yourself"
        warning="PNG or JPG | optimum size 140 x 140 | 2MB Max"
        inline={false}
      />
      <Row>
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
        <Column>
          <FieldBox
            value={profile.name}
            title="Name"
            maxLength={26}
            onChangeEvent={(e) => {
              setProfile({ ...profile, name: e });
              e.length > 5 && autosave(autosaveFunction, 'username');
            }}
            replaceMode="loose"
            placeholder="Example: David Jones"
            info="Your name"
            warning=""
            size="s"
            multiline={false}
          />
          <ErrorBox errorMsg={errors.name} />
          <FieldBox
            value={profile.summary}
            title="Summary"
            maxLength={256}
            onChangeEvent={(e) => {
              setProfile({ ...profile, summary: e });
              autosave(autosaveFunction, 'summary');
            }}
            replaceMode="loose"
            placeholder="Example: Digital artist with 12 years experience..."
            info="Coming Soon"
            warning=""
            size="s"
            multiline={true}
          />
        </Column>
      </Row>
    </div>
  );
}
