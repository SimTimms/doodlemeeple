import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import {
  MenuButtonStandard,
  Column,
  Row,
  CardComponent,
} from '../../../components';
import clsx from 'clsx';

export default function QuoteComponent({ contract, onClickEvent }) {
  const classes = useStyles();
  const accepted = contract.status === 'accepted';
  const declined = contract.status === 'declined';
  if (!contract.job)
    return (
      <CardComponent type="dark">
        <Typography>This Job No Longer Exists</Typography>
      </CardComponent>
    );
  if (!contract.job.user)
    return (
      <CardComponent type="dark">
        <Typography>This User No Longer Exists</Typography>
      </CardComponent>
    );
  return (
    <CardComponent p={10}>
      <Column>
        <Row j="space-between" a="center">
          <Row a="center" j="flex-start">
            <div
              style={{
                backgroundImage: `url(${contract.job.user.profileImg})`,
              }}
              className={classes.profileThumb}
            ></div>
            <Column a="flex-start">
              <Typography
                style={{ fontSize: 12, cursor: 'pointer' }}
                onClick={() => onClickEvent()}
              >
                {`Quote for ${contract.job.name}`}
              </Typography>
              <Typography
                style={{ fontSize: 12 }}
                className={clsx({
                  [classes.dull]: true,
                  [classes.red]: false,
                })}
              >
                {contract.status}
              </Typography>
            </Column>
          </Row>
          {!accepted && !declined ? (
            <MenuButtonStandard
              title="Edit"
              onClickEvent={() => {
                onClickEvent();
              }}
            />
          ) : (
            <MenuButtonStandard
              title="Dashboard"
              onClickEvent={() => {
                onClickEvent();
              }}
            />
          )}
        </Row>
      </Column>
    </CardComponent>
  );
}
