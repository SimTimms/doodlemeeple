import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { IconButton, Column } from '../';
import clsx from 'clsx';

export default function NoticeBox({ title, ...props }) {
  const classes = useStyles();
  const { subTitle, color, actionTitle, actionEvent } = props;
  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.primary]: color === 'primary',
        [classes.secondary]: color === 'secondary',
        [classes.warning]: color === 'warning',
      })}
    >
      <Typography variant="h4">{title}</Typography>
      <Typography
        variant="body1"
        style={{
          background: 'rgba(0,0,0,0.5)',
          marginTop: 10,
          marginBottom: 6,
          padding: 20,
          borderRadius: 10,
          fontSize: 16,
        }}
      >
        {subTitle}
      </Typography>
      <Column>
        {actionTitle && (
          <IconButton
            title={actionTitle}
            icon="payment"
            color="text-white"
            onClickEvent={actionEvent}
            styleOverride={{
              border: '1px solid #fff',
              borderRadius: 10,
              boxShadow: '5px 5px 10px rgba(0,0,0,0.2)',
            }}
          />
        )}
      </Column>
    </div>
  );
}
