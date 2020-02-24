import React from 'react';
import ForgotCard from './views/ForgotCard';
import ThanksCard from './views/ThanksCard';

export function PasswordForgot({ history }) {
  const [page, setPage] = React.useState(0);
  return (
    <div>
      {page === 0 ? (
        <ForgotCard history={history} setPage={setPage} />
      ) : (
        <ThanksCard history={history} setPage={setPage} />
      )}
    </div>
  );
}
