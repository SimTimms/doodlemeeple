import React from 'react';
import { Row } from '../../../../components';
import * as images from '../../../../assets/social.svg';

import FieldButton from './fieldButton';

export default function SocialHeader({ profile, visible, setVisible }) {
  return (
    <Row>
      <FieldButton
        icon={images.iconEmail}
        title="Email"
        on={profile.publicEmail !== ''}
        onClickEvent={() =>
          setVisible({
            ...visible,
            publicEmail:
              visible.publicEmail && profile.publicEmail === '' ? false : true,
          })
        }
        visible={visible.publicEmail}
      />
      <FieldButton
        icon={images.iconWebsite}
        title="Website"
        on={profile.website !== ''}
        onClickEvent={() =>
          setVisible({
            ...visible,
            website: visible.website && profile.website === '' ? false : true,
          })
        }
        visible={visible.website}
      />
      <FieldButton
        icon={images.socialSkype}
        title="Skype"
        on={profile.skype !== ''}
        onClickEvent={() =>
          setVisible({
            ...visible,
            skype: visible.skype && profile.skype === '' ? false : true,
          })
        }
        visible={visible.skype}
      />
      <FieldButton
        icon={images.socialFacebook}
        title="Facebook"
        on={profile.facebook !== ''}
        onClickEvent={() =>
          setVisible({
            ...visible,
            facebook:
              visible.facebook && profile.facebook === '' ? false : true,
          })
        }
        visible={visible.facebook}
      />
      <FieldButton
        icon={images.socialTwitter}
        title="Twitter"
        on={profile.twitter !== ''}
        onClickEvent={() =>
          setVisible({
            ...visible,
            twitter: visible.twitter && profile.twitter === '' ? false : true,
          })
        }
        visible={visible.twitter}
      />
      <FieldButton
        icon={images.socialLinkedIn}
        title="LinkedIn"
        on={profile.linkedIn !== ''}
        onClickEvent={() =>
          setVisible({
            ...visible,
            linkedIn:
              visible.linkedIn && profile.linkedIn === '' ? false : true,
          })
        }
        visible={visible.linkedIn}
      />
      <FieldButton
        icon={images.socialInstagram}
        title="Instagram"
        on={profile.instagram !== ''}
        onClickEvent={() =>
          setVisible({
            ...visible,
            instagram:
              visible.instagram && profile.instagram === '' ? false : true,
          })
        }
        visible={visible.instagram}
      />
    </Row>
  );
}
