import React from 'react';
import RegisterCard from './views/RegisterCard';
import ThanksCard from './views/ThanksCard';
import { Content } from 'src/components';

function RegisterLayout() {
  const [page, setPage] = React.useState(0);
  return (
    <div>
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
