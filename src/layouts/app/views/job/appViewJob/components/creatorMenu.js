import React from 'react';
import { useStyles } from '../styles';
import {
  MenuButtonShortcut,
  TopMenuWrapper,
} from '../../../../../../components';

export default function CreatorMenu({
  tabNbr,
  setTabNbr,
  activeContract,
  jobClosed,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopMenuWrapper j="center">
        <MenuButtonShortcut
          text={{
            name: 'Dashboard',
            color: '#fff',
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
            name: 'Job Details',
            color: '#fff',
            icon: 'list_alt',
            count: 0,
          }}
          onClickEvent={() => {
            setTabNbr(1);
          }}
          column={true}
          active={tabNbr === 1}
        />

        {activeContract && (
          <MenuButtonShortcut
            text={{
              name: 'Contract',
              color: '#fff',
              icon: 'request_quote',
              count: 0,
            }}
            onClickEvent={() => {
              setTabNbr(3);
            }}
            column={true}
            active={tabNbr === 3}
          />
        )}
        {/*
          <MenuButtonShortcut
            text={{
              name: 'Payments',
              color: '#fff',
              icon: 'credit_card',
              count: 0,
            }}
            onClickEvent={() => {
              setTabNbr(4);
            }}
            column={true}
            active={tabNbr === 4}
          />
          */}
      </TopMenuWrapper>
    </div>
  );
}
