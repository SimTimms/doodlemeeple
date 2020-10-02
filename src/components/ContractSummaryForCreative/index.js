import React from 'react';
import { useStyles } from './styles';
import { Row, Divider, PaymentSchedule } from '../';
import moment from 'moment';
import { Typography } from '@material-ui/core';

export default function ContractSummaryForCreative({ contractData }) {
  const classes = useStyles();
  const { job } = contractData;
  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.alignLeftOnly}>
        About The Job
      </Typography>
      <Divider />
      <Row j="flex-start">
        <Typography className={classes.alignLeft}>{`Name: `}</Typography>
        <Typography className={classes.alignLeftOnly}>{job.name}</Typography>
      </Row>
      <Row j="flex-start">
        <Typography className={classes.alignLeft}>{`Posted by: `}</Typography>
        <Typography className={classes.alignLeftOnly}>
          {job.user.name}
        </Typography>
      </Row>
      <Row j="flex-start" a="flex-start">
        <Typography className={classes.alignLeft}>{`Summary: `}</Typography>
        <Typography className={classes.alignLeftOnly}>{job.summary}</Typography>
      </Row>
      <Row j="flex-start" a="flex-start">
        <Typography className={classes.alignLeft}>{`Date: `}</Typography>
        <Typography>{moment(job.createdAt).format('LLLL')}</Typography>
      </Row>
      <Row j="flex-start" a="flex-start">
        <Typography
          className={classes.alignLeft}
        >{`Creative Skills: `}</Typography>
        <Typography>
          {job.keywords.map((keyword, index) => {
            return index === 0 ? keyword : `, ${keyword}`;
          })}
        </Typography>
      </Row>
      <Divider />
      <Divider />
      <Typography variant="h4" className={classes.alignLeftOnly}>
        Creative Terms
      </Typography>
      <Divider />
      <Row j="flex-start" a="flex-start">
        <Typography className={classes.alignLeft}>{`Total Cost: `}</Typography>
        <Typography>{`${contractData.cost} ${contractData.currency}`}</Typography>
      </Row>
      <Row j="flex-start" a="flex-start">
        <Typography className={classes.alignLeft}>{`Start Date: `}</Typography>
        {contractData.startDate !== '' &&
        contractData.startDate !== null &&
        contractData.startDate !== undefined ? (
          <Typography>{`${contractData.startDate}`}</Typography>
        ) : (
          <Typography className={classes.warning}>Not Provided</Typography>
        )}
      </Row>
      <Row j="flex-start" a="flex-start">
        <Typography
          className={classes.alignLeft}
        >{`Delivery Date: `}</Typography>
        {contractData.deadline !== '' && contractData.deadline !== null ? (
          <Typography>{`${contractData.deadline}`}</Typography>
        ) : (
          <Typography className={classes.warning}>Not Provided</Typography>
        )}
      </Row>
      <Row j="flex-start" a="flex-start">
        <Typography
          className={classes.alignLeft}
        >{`Additional Terms: `}</Typography>
        {contractData.notes !== '' && contractData.notes !== null ? (
          <Typography>{`${contractData.notes}`}</Typography>
        ) : (
          <Typography className={classes.warning}>Not Provided</Typography>
        )}
      </Row>
      <Divider />
      <Divider />
      <Typography variant="h4" className={classes.alignLeftOnly}>
        Payment Schedule
      </Typography>
      <Divider />
      <PaymentSchedule contractData={contractData} isClient={false} />
    </div>
  );
}
