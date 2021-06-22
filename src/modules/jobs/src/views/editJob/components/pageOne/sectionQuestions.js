import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import {
  Column,
  Paper,
  Row,
  IconButton,
} from '../../../../../imports/sharedComponents';

export default function SectionQuestions({ setJob, job }) {
  const [hiring, setHiring] = React.useState(false);
  const [funds, setFunds] = React.useState(false);
  const [inLieu, setInLieu] = React.useState(false);
  const [termsAccepted, setTermsAccepted] = React.useState(false);

  useEffect(() => {
    setHiring(job.speculative);
    setFunds(job.funded);
    setInLieu(job.inLieu);
    setTermsAccepted(job.termsAccepted);
  }, [job]);

  return (
    <Paper>
      <Column a="flex-start">
        {/*
        <Row j="space-between">
          <Typography variant="body1" align="center">
            Are you hoping to start work within 4 weeks?
          </Typography>
          <IconButton
            color="text-dark"
            title={hiring ? 'Yes' : 'No'}
            icon={hiring ? 'toggle_on' : 'toggle_off'}
            onClickEvent={() => {
              setJob({
                ...job,
                speculative: hiring ? false : true,
              });
              hiring ? setHiring(false) : setHiring(true);
            }}
            styleOverride={{
              width: 150,
              border: '1px solid #ccc',
              marginLeft: 10,
            }}
          />
        </Row>
        <Row j="space-between">
          <Typography variant="body1" align="center">
            Are funds available to pay for this project?
          </Typography>
          <IconButton
            color="text-dark"
            title={funds ? 'Yes' : 'No'}
            icon={funds ? 'toggle_on' : 'toggle_off'}
            onClickEvent={() => {
              setJob({
                ...job,
                funded: funds ? false : true,
              });

              funds ? setFunds(false) : setFunds(true);
            }}
            styleOverride={{
              width: 150,
              border: '1px solid #ccc',
              marginLeft: 10,
            }}
          />
        </Row>
        <Row j="space-between">
          <Typography variant="body1" align="center">
            Are you offering shares, or similar in lieu of pay?
          </Typography>
          <IconButton
            color="text-dark"
            title={inLieu ? 'Yes' : 'No'}
            icon={inLieu ? 'toggle_on' : 'toggle_off'}
            onClickEvent={() => {
              setJob({
                ...job,
                inLieu: inLieu ? false : true,
              });
              inLieu ? setInLieu(false) : setInLieu(true);
            }}
            styleOverride={{
              width: 150,
              border: '1px solid #ccc',
              marginLeft: 10,
            }}
          />
        </Row>
          */}
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
