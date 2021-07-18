import React, { useEffect } from 'react';
import { IconButton } from '../../../../components';

export default function SectionQuestions({ setJob, job }) {
  const [termsAccepted, setTermsAccepted] = React.useState(false);

  useEffect(() => {
    setTermsAccepted(job.termsAccepted);
  }, [job]);

  return (
    <IconButton
      color="text-dark"
      title={termsAccepted ? 'Yes' : 'No'}
      icon={termsAccepted ? 'toggle_on' : 'toggle_off'}
      onClickEvent={() => {
        setJob({
          ...job,
          termsAccepted: termsAccepted ? false : true,
        });
        termsAccepted ? setTermsAccepted(false) : setTermsAccepted(true);
      }}
      styleOverride={{
        width: 150,
        border: '1px solid #ccc',
        marginBottom: 20,
      }}
    />
  );
}
