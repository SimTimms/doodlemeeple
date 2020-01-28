import React from 'react';
import LoginCard from './views/LoginCard';
import { HomePage } from './views/HomePage';
import { Content, StyledNavBar } from '../../components';
import { PublicMenu } from '../menus';

function PublicLayout(props) {
  const [page, setPage] = React.useState('home');
  const pageJump = props.match ? props.match.params.page : null;

  if (pageJump !== page) {
    setPage(pageJump);
  }

  return (
    <div>
      <StyledNavBar title="" open={false}>
        <PublicMenu />
      </StyledNavBar>
      <Content>
        {page === 'login' ? <LoginCard setPage={setPage} /> : <HomePage />}
      </Content>
    </div>
  );
}

export default PublicLayout;
