import React from 'react';
import { Typography, Icon } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';

export default function MenuButtonStandard({
  title,
  onClickEvent,
  disabled,
  type,
  icon,
  ...props
}) {
  const classes = useStyles();
  const [confirm, setConfirm] = React.useState(false);
  const { ml, mr, mt, mb, fullWidth } = props;

  return (
    <div
      className={clsx({
        [classes.buttonWrapper]: true,
        [classes.delete]: type === 'delete',
        [classes.ml]: ml,
        [classes.mr]: mr,
        [classes.mt]: mt,
        [classes.mb]: mb,
        [classes.fullWidth]: fullWidth,
        [classes.disabled]: disabled,
      })}
      onClick={() =>
        disabled
          ? null
          : type === 'delete' && !confirm
          ? setConfirm(true)
          : onClickEvent()
      }
    >
      <div className={classes.title}>
        {type === 'delete' && !confirm ? (
          icon && !title ? (
            <Icon className={classes.title}>{disabled ? 'lock' : icon}</Icon>
          ) : icon && title ? (
            <div className={classes.titleWithIcon}>
              <Icon className={classes.titleIcon}>
                {disabled ? 'lock' : icon}
              </Icon>
              <Typography className={classes.title}>{title}</Typography>
            </div>
          ) : (
            title && <Typography className={classes.title}>{title}</Typography>
          )
        ) : type === 'delete' && confirm ? (
          <div className={classes.titleWithIcon}>
            <Icon className={classes.titleIcon}>warning</Icon>
            <Typography className={classes.title}>Confirm Delete</Typography>
          </div>
        ) : icon && !title ? (
          <Icon className={classes.title}>{disabled ? 'lock' : icon}</Icon>
        ) : icon && title ? (
          <div className={classes.titleWithIcon}>
            <Icon className={classes.titleIcon}>
              {disabled ? 'lock' : icon}
            </Icon>
            <Typography className={classes.title}>{title}</Typography>
          </div>
        ) : (
          <Typography className={classes.title}>{title}</Typography>
        )}
      </div>
    </div>
  );
}
