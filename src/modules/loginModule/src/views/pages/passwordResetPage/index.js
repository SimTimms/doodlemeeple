import React from 'react';
import { ForgotCard, ThanksCard } from './components/';
import { sharedStyles } from '../sharedStyles';

export default function PasswordResetPage({ history }) {
  const classes = sharedStyles();

  const [page, setPage] = React.useState(0);
  return page === 0 ? (
    <div className={classes.pageWrapper}>
      <ForgotCard history={history} setPage={setPage} />
    </div>
  ) : (
    <div className={classes.pageWrapper}>
      <ThanksCard history={history} setPage={setPage} />
    </div>
  );
}
