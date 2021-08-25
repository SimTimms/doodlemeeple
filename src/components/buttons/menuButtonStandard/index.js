import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';

export default function MenuButtonStandard({
  title,
  onClickEvent,
  disabled,
  type,
}) {
  const classes = useStyles();
  const [confirm, setConfirm] = React.useState(false);

  return (
    <div
      className={clsx({
        [classes.buttonWrapper]: true,
        [classes.delete]: type === 'delete',
      })}
      onClick={() =>
        disabled
          ? null
          : type === 'delete' && !confirm
          ? setConfirm(true)
          : onClickEvent()
      }
    >
      <Typography className={classes.title}>
        {type === 'delete' && !confirm
          ? title
          : type === 'delete' && confirm
          ? 'Confirm'
          : title}
      </Typography>
    </div>
  );
}
