import React from 'react';
import { Row } from '../../../../components';
import * as images from '../../../../assets/social';
import FieldButton from './fieldButton';

export default function ContactHeader({ profile, visible, setVisible }) {
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
    </Row>
  );
}
