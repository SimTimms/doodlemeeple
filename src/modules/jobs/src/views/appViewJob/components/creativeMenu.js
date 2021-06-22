import React from 'react';
import { useStyles } from '../styles';
import {
  MenuButtonShortcut,
  TopMenuWrapper,
} from '../../../components/sharedComponents';

export default function CreativeMenu({
  tabNbr,
  setTabNbr,
  activeContract,
  closed,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopMenuWrapper j="center">
        <MenuButtonShortcut
          text={{
            name: 'Dashboard',
            color: 'light',
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
            name: 'Project Details',
            color: 'light',
            icon: 'work',
            count: 0,
          }}
          onClickEvent={() => {
            setTabNbr(1);
          }}
          column={true}
          active={tabNbr === 1}
        />
        {!activeContract && !closed && (
          <MenuButtonShortcut
            text={{
              name: 'My Quote',
              color: 'light',
              icon: 'request_quote',
              count: 0,
            }}
            onClickEvent={() => {
              setTabNbr(6);
            }}
            column={true}
            active={tabNbr === 6}
          />
        )}
        {activeContract && (
          <MenuButtonShortcut
            text={{
              name: 'Contract',
              color: 'light',
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
        {/*activeContract && (
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
          )*/}
      </TopMenuWrapper>
    </div>
  );
}
