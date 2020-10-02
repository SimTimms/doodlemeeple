import React from 'react';
import { Row, MenuButtonShortcut } from '../../../../../../../../components';

export default function Menu() {
  const [page, setPage] = React.useState(0);

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
          setPage(0);
        }}
        active={page === 0}
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
          setPage(1);
        }}
        active={page === 1}
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
          setPage(2);
        }}
        active={page === 2}
        column={true}
      />
    </Row>
  );
}
