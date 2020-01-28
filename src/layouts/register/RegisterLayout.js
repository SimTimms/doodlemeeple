import React from 'react';
import RegisterCard from './views/RegisterCard';
import ThanksCard from './views/ThanksCard';
import { Content, StyledNavBar } from '../../components';

import { PublicMenu } from '../menus';

function RegisterLayout() {
  const [page, setPage] = React.useState(0);
  return (
    <div>
      <StyledNavBar title="Register" open={false}>
        <PublicMenu />
      </StyledNavBar>
      <Content>
        {page === 0 ? (
          <RegisterCard setPage={setPage} />
        ) : (
          <ThanksCard setPage={setPage} />
        )}
      </Content>
    </div>
  );
}

export default RegisterLayout;
