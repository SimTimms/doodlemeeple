import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import {
  Column,
  Paper,
  Row,
  IconButton,
} from '../../../../../../../components';

export default function SectionQuestions({ setJob, job }) {
  const [termsAccepted, setTermsAccepted] = React.useState(false);

  useEffect(() => {
    setTermsAccepted(job.termsAccepted);
  }, [job]);

  return (
    <Paper>
      <Column a="flex-start">
        <Row j="space-between">
          <Typography variant="body1" align="center">
            Have you read the{' '}
            <a href={`${process.env.REACT_APP_INFO_EMAIL}/terms-of-service/`}>
              terms of service?
            </a>
          </Typography>
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
              marginLeft: 10,
            }}
          />
        </Row>
      </Column>
    </Paper>
  );
}
