import React from 'react';
import { Typography, Icon } from '@material-ui/core';
import { useStyles } from './styles';
import { Row, Column } from '../';
import clsx from 'clsx';

export default function InputLabel({
  title,
  value,
  maxLength,
  minLength,
  info,
  warning,
  icon,
}) {
  const [infoOpen, setInfoOpen] = React.useState(false);
  const classes = useStyles();
  value = value ? value : '';
  return (
    <Column>
      <div
        className={clsx({
          [classes.small]: true,
          [classes.hide]: title === '',
        })}
      >
        <Typography
          className={classes.inputLabel}
          style={{ marginLeft: icon && 44 }}
        >{`${title}`}</Typography>
        <Row j="flex-end" w={100}>
          {minLength - value.length > 0 ? (
            <Typography
              className={clsx({
                [classes.inputLabel]: true,
                [classes.inputLabelRed]: true,
              })}
            >{`min. ${
              minLength > 0 ? minLength - value.length : ''
            }`}</Typography>
          ) : (
            maxLength - value.length > 0 && (
              <Typography className={classes.inputLabel}>{`max. ${
                maxLength > 0 ? maxLength - value.length : ''
              }`}</Typography>
            )
          )}

          {(warning !== '' || info !== '') && (
            <Icon
              className={classes.helpIcon}
              onClick={() => {
                infoOpen === false ? setInfoOpen(true) : setInfoOpen(false);
              }}
            >
              {infoOpen === false ? 'info' : 'keyboard_arrow_up'}
            </Icon>
          )}
        </Row>
      </div>
      <div
        className={clsx({
          [classes.openClose]: true,
          [classes.openCloseOff]: !infoOpen,
        })}
      >
        <Typography variant="body1" className={classes.descriptionBox}>
          {info}
          {warning !== '' && (
            <span style={{ fontWeight: 900 }}>
              <br />
              <br />
              {warning}
            </span>
          )}
        </Typography>
      </div>
    </Column>
  );
}
