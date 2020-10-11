import React from 'react';
import { useStyles } from '../styles';
import {
  MenuButtonShortcut,
  TopMenuWrapper,
} from '../../../../../../components';

export default function CreatorMenu({ tabNbr, setTabNbr, activeContract }) {
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
            name: 'Creatives',
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
        {activeContract && (
          <MenuButtonShortcut
            text={{
              name: 'Contract',
              color: '#222',
              icon: 'request_quote',
              count: 0,
            }}
            onClickEvent={() => {
              setTabNbr(7);
            }}
            column={true}
            active={tabNbr === 7}
          />
        )}
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
