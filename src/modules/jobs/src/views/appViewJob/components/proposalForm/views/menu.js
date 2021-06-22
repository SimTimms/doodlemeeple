import React from 'react';
import {
  Row,
  MenuButtonShortcut,
} from '../../../../../../imports/sharedComponents';

export default function Menu({ tab }) {
  return (
    <Row j="center">
      <MenuButtonShortcut
        text={{
          name: 'Details',
          color: '#222',
          icon: 'list',
          count: 0,
        }}
        onClickEvent={() => {
          tab.setTabNbr(0);
        }}
        active={tab.tabNbr === 0}
        column={true}
      />
      <MenuButtonShortcut
        text={{
          name: 'Payment',
          color: '#222',
          icon: 'credit_card',
          count: 0,
        }}
        onClickEvent={() => {
          tab.setTabNbr(1);
        }}
        active={tab.tabNbr === 1}
        column={true}
      />
      <MenuButtonShortcut
        text={{
          name: 'Contract',
          color: '#222',
          icon: 'request_quote',
          count: 0,
        }}
        onClickEvent={() => {
          tab.setTabNbr(3);
        }}
        active={tab.tabNbr === 3}
        column={true}
      />
      <MenuButtonShortcut
        text={{
          name: 'Submit',
          color: '#222',
          icon: 'check_circle',
          count: 0,
        }}
        onClickEvent={() => {
          tab.setTabNbr(2);
        }}
        active={tab.tabNbr === 2}
        column={true}
      />
    </Row>
  );
}
