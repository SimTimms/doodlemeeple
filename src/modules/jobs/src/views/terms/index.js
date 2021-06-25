import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import {
  Column,
  Paper,
  Row,
  IconButton,
  NoticeBoardSecondary,
} from '../../../imports/sharedComponents';
import { useMutation } from '@apollo/client';
import { ACCEPT_TERMS } from '../../../data';
import { toaster } from '../sharedUtils';

export default function Terms({ setJob, job }) {
  const [termsAccepted, setTermsAccepted] = React.useState(false);

  const [updateJob] = useMutation(
    ACCEPT_TERMS,
    {
      variables: {
        _id: job._id,
        termsAccepted,
      },
    },
    {
      onCompleted() {
        toaster('Saved...');
      },
    }
  );

  useEffect(() => {
    setTermsAccepted(job.termsAccepted);
  }, [job]);

  return (
    <NoticeBoardSecondary
      title=""
      subTitle="Terms of Service"
      onClickEvent={() => updateJob()}
      buttonLocked={!job.termsAccepted}
      lockedMsg="You must read and accept the terms of service"
    >
      <div style={{ padding: '10px 10px 0 10px' }}>
        <Column>
          <Paper>
            <Column a="flex-start">
              <Row j="space-between">
                <Typography variant="body1" align="center">
                  Have you read the{' '}
                  <a
                    href={`${process.env.REACT_APP_TERMS_LINK}/terms-of-service/`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
                    termsAccepted
                      ? setTermsAccepted(false)
                      : setTermsAccepted(true);
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
        </Column>
      </div>
    </NoticeBoardSecondary>
  );
}
