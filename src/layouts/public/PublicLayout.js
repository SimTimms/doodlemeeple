import React from 'react';
import LoginCard from './views/LoginCard';
import { Content, StyledNavBar } from '../../components';

function PublicLayout() {
  const [page, setPage] = React.useState(0);

  return (
    <div>
      <StyledNavBar title="Register" open={false}></StyledNavBar>
      <Content>{page === 1 ? <LoginCard setPage={setPage} /> : null}</Content>
    </div>
  );
}

export default PublicLayout;
