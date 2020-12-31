import React from 'react';
import { useStyles } from './styles';
import { MenuButtonShortcut, TopMenuWrapper } from '../../../../components';

export default function ProfileMenu({
  tabNbr,
  setTabNbr,
  history,
  profile,
  changes,
}) {
  const classes = useStyles();

  return (
    <div style={{ width: '100%' }}>
      <TopMenuWrapper j="center">
        <MenuButtonShortcut
          text={{
            name: 'Profile',
            color: '#fff',
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
            color: '#fff',
            icon: 'preview',
            count: 0,
          }}
          onClickEvent={() => {
            history.push(`/app/public-preview/${profile._id}`);
          }}
          active={tabNbr === 1}
          column={true}
        />
        <MenuButtonShortcut
          text={{
            name: 'Preferences',
            color: '#fff',
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
