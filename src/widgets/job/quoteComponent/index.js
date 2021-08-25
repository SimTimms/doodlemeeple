import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import {
  MenuButtonStandard,
  Column,
  Row,
  CardComponent,
  StatusBadge,
} from '../../../components';
import clsx from 'clsx';

export default function QuoteComponent({ contract, onClickEvent }) {
  const classes = useStyles();
  const accepted = contract.status === 'accepted';
  const declined = contract.status === 'declined';
  const closed = contract.status === 'closed';
  const deleted = contract.status === 'deleted';
  const unseen = contract.seenByOwner === false;
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
              className={clsx({
                [classes.profileThumb]: true,
                [classes.unseen]: (declined && unseen) || (accepted && unseen),
              })}
            ></div>
            <Column a="flex-start">
              <Typography
                style={{ fontSize: 12, cursor: 'pointer' }}
                onClick={() => onClickEvent()}
              >
                {`Quote for ${contract.job.name}`}
              </Typography>
              <StatusBadge
                status={contract.status === '' ? 'Draft' : contract.status}
                red={(declined && unseen) || (accepted && unseen)}
              />
            </Column>
          </Row>
          {!accepted && !declined && !closed && !deleted ? (
            <MenuButtonStandard
              title="Edit"
              onClickEvent={() => {
                onClickEvent();
              }}
            />
          ) : (
            accepted && (
              <MenuButtonStandard
                title="Dashboard"
                onClickEvent={() => {
                  onClickEvent();
                }}
              />
            )
          )}
        </Row>
      </Column>
    </CardComponent>
  );
}
