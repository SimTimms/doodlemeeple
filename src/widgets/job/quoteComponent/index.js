import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { MenuButtonShortcut, Column, Row, Paper } from '../../../components';
import clsx from 'clsx';

export default function QuoteComponent({ contract, history }) {
  const classes = useStyles();
  const accepted = contract.status === 'accepted';
  if (!contract.job) return null;
  return (
    <Paper p={10}>
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
                onClick={() =>
                  history.push(`/app/job-description/${contract.job._id}`)
                }
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
          {!accepted ? (
            <MenuButtonShortcut
              text={{
                name: 'Edit',
                color: 'light',
                icon: 'edit',
                count: 0,
                back: 'primary',
              }}
              onClickEvent={() => {
                history.push(`/app/edit-quote/${contract._id}`);
              }}
              active={false}
              countIcon="star"
            />
          ) : (
            <MenuButtonShortcut
              text={{
                name: 'Dashboard',
                color: 'light',
                icon: 'dashboard',
                count: 0,
                back: 'primary',
              }}
              onClickEvent={() => {
                history.push(`/app/view-job/${contract.job._id}`);
              }}
              active={false}
              countIcon="star"
            />
          )}
        </Row>
      </Column>
    </Paper>
  );
}
