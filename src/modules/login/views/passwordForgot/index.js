import React from 'react';
import ForgotCard from './views/ForgotCard';
import ThanksCard from './views/ThanksCard';
import { sharedStyles } from '../sharedStyles';

export default function PasswordForgot({ history }) {
  const classes = sharedStyles();

  const [page, setPage] = React.useState(0);
  return page === 0 ? (
    <div className={classes.pageWrapper}>
      <ForgotCard history={history} setPage={setPage} />
    </div>
  ) : (
    <ThanksCard history={history} setPage={setPage} />
  );
}
