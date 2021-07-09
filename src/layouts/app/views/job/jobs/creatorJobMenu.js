import React from 'react';
import { useStyles } from './styles';
import { MenuButtonShortcut, TopMenuWrapper } from '../../../../../components';

export default function CreatorJobMenu({ tabNbr, setTabNbr }) {
  const classes = useStyles();

  return (
    <div className={classes.menuRoot}>
      <TopMenuWrapper j="center">
        <MenuButtonShortcut
          text={{
            name: 'Job Posts',
            color: 'light',
            icon: 'grid_view',
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
            name: 'Invites',
            color: 'light',
            icon: 'local_activity',
            count: 0,
          }}
          onClickEvent={() => {
            setTabNbr(3);
          }}
          active={tabNbr === 3}
          column={true}
        />
        <MenuButtonShortcut
          text={{
            name: 'My Work',
            color: 'light',
            icon: 'work',
            count: 0,
          }}
          onClickEvent={() => {
            setTabNbr(4);
          }}
          active={tabNbr === 4}
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
            setTabNbr(2);
          }}
          active={tabNbr === 2}
          column={true}
        />
      </TopMenuWrapper>
    </div>
  );
}
