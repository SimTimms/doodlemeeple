import React from 'react';
import { useStyles } from '../styles';
import {
  MenuButtonShortcut,
  TopMenuWrapper,
} from '../../../../../../components';

export default function CreativeMenu({ tabNbr, setTabNbr }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopMenuWrapper j="center">
        <MenuButtonShortcut
          text={{
            name: 'Dashboard',
            color: '#FFF',
            icon: 'dashboard',
            count: 0,
          }}
          onClickEvent={() => {
            setTabNbr(-1);
          }}
          column={true}
          active={tabNbr === -1}
        />
        <MenuButtonShortcut
          text={{
            name: 'Summary',
            color: '#FFF',
            icon: 'list_alt',
            count: 0,
          }}
          onClickEvent={() => {
            setTabNbr(1);
          }}
          column={true}
          active={tabNbr === 1}
        />

        <MenuButtonShortcut
          text={{
            name: 'Client',
            color: '#FFF',
            icon: 'account_box',
            count: 0,
          }}
          onClickEvent={() => {
            setTabNbr(2);
          }}
          column={true}
          active={tabNbr === 2}
        />

        <MenuButtonShortcut
          text={{
            name: 'My Quote',
            color: '#FFF',
            icon: 'request_quote',
            count: 0,
          }}
          onClickEvent={() => {
            setTabNbr(6);
          }}
          column={true}
          active={tabNbr === 6}
        />

        <MenuButtonShortcut
          text={{
            name: 'Payments',
            color: '#FFF',
            icon: 'credit_card',
            count: 0,
          }}
          onClickEvent={() => {
            setTabNbr(4);
          }}
          column={true}
          active={tabNbr === 4}
        />
      </TopMenuWrapper>
    </div>
  );
}
