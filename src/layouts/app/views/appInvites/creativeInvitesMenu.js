import React from 'react';
import { useStyles } from './styles';
import { MenuButtonShortcut, TopMenuWrapper } from '../../../../components';

export default function CreativeInvitesMenu({ tabNbr, setTabNbr }) {
  const classes = useStyles();

  return (
    <div className={classes.menuRoot}>
      <TopMenuWrapper j="center">
        <MenuButtonShortcut
          text={{
            name: 'Invites',
            color: 'light',
            icon: 'local_post_office',
            count: 0,
          }}
          onClickEvent={() => {
            setTabNbr(1);
          }}
          active={tabNbr === 1}
          column={true}
        />
        <MenuButtonShortcut
          text={{
            name: 'History',
            color: 'light',
            icon: 'history',
            count: 0,
          }}
          onClickEvent={() => {
            setTabNbr(3);
          }}
          active={tabNbr === 3}
          column={true}
        />
      </TopMenuWrapper>
    </div>
  );
}
