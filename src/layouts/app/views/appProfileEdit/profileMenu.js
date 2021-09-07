import React from 'react';
import { MenuButtonShortcut, TopMenuWrapper } from '../../../../components';

export default function ProfileMenu({ tabNbr, setTabNbr, history, profile }) {
  return (
    <div style={{ width: '100%' }}>
      <TopMenuWrapper j="center">
        <MenuButtonShortcut
          text={{
            name: 'Profile',
            color: 'light',
            icon: 'face',
            count: 0,
          }}
          onClickEvent={() => {
            setTabNbr(0);
          }}
          active={tabNbr === 0}
          column={true}
        />
        <MenuButtonShortcut
          text={{
            name: 'Preview',
            color: 'light',
            icon: 'preview',
            count: 0,
          }}
          onClickEvent={() => {
            history.push(`/app/user-profile/${profile._id}`);
          }}
          active={tabNbr === 1}
          column={true}
        />
        <MenuButtonShortcut
          text={{
            name: 'Preferences',
            color: 'light',
            icon: 'settings',
            count: 0,
          }}
          onClickEvent={() => {
            setTabNbr(2);
          }}
          active={tabNbr === 2}
          column={true}
        />
      </TopMenuWrapper>
    </div>
  );
}
