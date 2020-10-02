import React from 'react';
import { useStyles } from '../styles';
import {
  MenuButtonShortcut,
  TopMenuWrapper,
} from '../../../../../../components';
import Cookies from 'js-cookie';

export default function CreativeMenu({ tabNbr, setTabNbr }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopMenuWrapper j="center">
        <MenuButtonShortcut
          text={{
            name: 'Dashboard',
            color: '#222',
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
            color: '#222',
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
            color: '#222',
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
            color: '#222',
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
            color: '#222',
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
