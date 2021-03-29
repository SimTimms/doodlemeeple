import React from 'react';
import { useStyles } from './styles';
import { Row } from '../';
import { Typography } from '@material-ui/core';

export default function ContractSummaryForCreator({ contractData }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
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
    </div>
  );
}
