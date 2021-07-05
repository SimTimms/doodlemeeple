import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { MenuButtonShortcut, Column, Row } from '../';
import clsx from 'clsx';

export default function ResponseComponent({ contract, history }) {
  const classes = useStyles();

  return (
    <div
      style={{ width: '100%', cursor: 'pointer' }}
      onClick={() => {
        history.push(`/app/view-quote/${contract._id}`);
      }}
    >
      <Column>
        <Row j="space-between" a="center">
          <Row a="center" j="flex-start">
            <div
              style={{
                backgroundImage: `url(${contract.user.profileImg})`,
              }}
              className={classes.profileThumb}
            ></div>
            <Column a="flex-start">
              <Typography style={{ fontSize: 12 }}>
                {`Invite from ${contract.user.name} for ${contract.job.name}`}
              </Typography>
              <Typography
                style={{ fontSize: 12 }}
                className={clsx({
                  [classes.dull]: true,
                  [classes.red]: false,
                })}
              >
                Task: Review
              </Typography>
            </Column>
          </Row>

          <MenuButtonShortcut
            text={{
              name: 'Open',
              color: 'light',
              icon: '',
              count: 0,
              back: 'primary',
            }}
            onClickEvent={() => {
              history.push(`/app/view-quote/${contract._id}`);
            }}
            active={false}
            countIcon="star"
          />
        </Row>
      </Column>
    </div>
  );
}
