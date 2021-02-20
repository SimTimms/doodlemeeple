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
            name: 'Projects',
            color: '#fff',
            icon: 'work',
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
            color: '#fff',
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
