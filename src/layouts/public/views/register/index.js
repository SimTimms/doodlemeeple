import React from 'react';
import RegisterCard from './views/RegisterCard';
import ThanksCard from './views/ThanksCard';

function RegisterLayout() {
  const [page, setPage] = React.useState(0);
  return page === 0 ? (
    <RegisterCard setPage={setPage} />
  ) : (
    <ThanksCard setPage={setPage} />
  );
}

export default RegisterLayout;
