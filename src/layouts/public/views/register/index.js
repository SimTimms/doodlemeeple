import React from 'react';
import RegisterCard from './views/RegisterCard';
import ThanksCard from './views/ThanksCard';
import { Content } from '../../../../components';

function RegisterLayout() {
  const [page, setPage] = React.useState(0);
  return (
    <div>
      {page === 0 ? (
        <RegisterCard setPage={setPage} />
      ) : (
        <ThanksCard setPage={setPage} />
      )}
    </div>
  );
}

export default RegisterLayout;
