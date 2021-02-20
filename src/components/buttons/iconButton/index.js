import React from 'react';
import { Button, Icon, Zoom } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';
import playSound from '../../../utils/playSound';

function ButtonObj({ ...props }) {
  const classes = useStyles();
  const {
    disabled,
    onClickEvent,
    icon,
    title,
    color,
    styleOverride,
    type,
    iconPos,
    clickSound,
    likeSound,
  } = props.props;

  return (
    <Button
      type={type}
      className={clsx({
        [classes.iconButton]: true,
        [classes.iconButtonStripe]: color === 'stripe',
        [classes.iconButtonSecondary]: color === 'secondary',
        [classes.iconButtonWarning]: color === 'warning',
        [classes.iconButtonText]: color === 'text',
        [classes.iconButtonTextWhite]: color === 'text-white',
        [classes.iconButtonTextWhiteMini]: color === 'text-white-mini',
        [classes.iconButtonTextDark]: color === 'text-dark',
        [classes.iconButtonTextError]: color === 'text-error',
        [classes.iconButtonTextMini]: color === 'text-mini',
        [classes.iconButtonDisabled]: disabled,
      })}
      disabled={disabled}
      onClick={() => {
        clickSound && playSound('click');
        likeSound && playSound('like');
        onClickEvent();
      }}
      style={styleOverride && styleOverride}
    >
      {icon !== '' && iconPos !== 'right' && (
        <Icon
          className={clsx({
            [classes.iconButtonIcon]: true,
            [classes.iconButtonIconStripe]: color === 'stripe',
            [classes.iconButtonIconSecondary]: color === 'secondary',
            [classes.iconButtonIconText]: color === 'text',
            [classes.iconButtonIconTextWhite]: color === 'text-white',
            [classes.iconButtonIconTextWhiteMini]: color === 'text-white-mini',
            [classes.iconButtonIconTextDark]: color === 'text-dark',
            [classes.iconButtonIconTextError]: color === 'text-error',
            [classes.iconButtonIconTextMini]: color === 'text-mini',
            [classes.iconLeft]: iconPos !== 'right',
            [classes.noTitle]: title === '',
          })}
        >
          {icon}
        </Icon>
      )}
      {title}
      {icon !== '' && iconPos === 'right' && (
        <Icon
          className={clsx({
            [classes.iconButtonIcon]: true,
            [classes.iconButtonIconStripe]: color === 'stripe',
            [classes.iconButtonIconSecondary]: color === 'secondary',
            [classes.iconButtonIconText]: color === 'text',
            [classes.iconButtonIconTextWhite]: color === 'text-white',
            [classes.iconButtonIconTextWhiteMini]: color === 'text-white-mini',
            [classes.iconButtonIconTextDark]: color === 'text-dark',
            [classes.iconButtonIconTextMini]: color === 'text-mini',
            [classes.iconButtonIconTextError]: color === 'text-error',
            [classes.iconRight]: iconPos === 'right',
            [classes.noTitle]: title === '',
          })}
        >
          {icon}
        </Icon>
      )}
    </Button>
  );
}
export default function IconButton(props) {
  const { zoom } = props;
  return zoom ? (
    <Zoom in={true} timeout={500}>
      <div>
        <ButtonObj props={props} />
      </div>
    </Zoom>
  ) : (
    <ButtonObj props={props} />
  );
}
