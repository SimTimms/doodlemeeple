import React from 'react';
import RegisterCard from './views/RegisterCard';
import ThanksCard from './views/ThanksCard';

function RegisterLayout({ ...props }) {
  const { campaignId } = props;
  const [page, setPage] = React.useState(0);
  return page === 0 ? (
    <RegisterCard setPage={setPage} campaignId={campaignId} />
  ) : (
    <ThanksCard setPage={setPage} />
  );
}

export default RegisterLayout;
