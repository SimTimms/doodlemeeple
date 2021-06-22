import React from 'react';
import logout from '../../../utils/logout';

export default function LoggedOut({ history }) {
  logout(history);
  return <div>Logging Outs</div>;
}
