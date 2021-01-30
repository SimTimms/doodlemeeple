import React from 'react';
import { Typography, Icon } from '@material-ui/core';
import { useStyles } from './styles';
import { CurrencySelector, Column, Row, Divider } from '../';
import clsx from 'clsx';

export default function FieldBox({ title, value, onChangeEvent, ...props }) {
  const [infoOpen, setInfoOpen] = React.useState(false);
  const classes = useStyles();
  const {
    maxLength,
    replaceMode,
    placeholder,
    info,
    warning,
    size,
    multiline,
    width,
    type,
    icon,
  } = props;
  value = value ? value : '';
  return (
    <Column w={width ? '' : '100%'}>
      <Column a="flex-start">
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
          <Row j="flex-end" w={70}>
            <Typography className={classes.inputLabel}>{`${
              maxLength > 0 && maxLength - value.length
            }`}</Typography>
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
        {multiline ? (
          <Row>
            {icon && <img src={icon} className={classes.socialIcon} />}
            <textarea
              rows={3}
              className={classes.input}
              placeholder={placeholder}
              value={value.substring(0, maxLength)}
              onChange={(e) => {
                const eReplaced =
                  replaceMode === 'loose'
                    ? e.target.value.replace(
                        /[^A-Za-z0-9&:;|/\\?!@£$%*()_ ,-."`'[]\n]/g,
                        ''
                      )
                    : replaceMode === 'tight'
                    ? e.target.value.replace(/[^A-Za-z -0-9]/g, '')
                    : e.target.value;

                onChangeEvent(eReplaced.substring(0, maxLength));
              }}
            />
          </Row>
        ) : replaceMode === 'currency' ? (
          <CurrencySelector
            selectedCurrency={value}
            onChangeEvent={onChangeEvent}
          />
        ) : (
          <Row>
            {icon && <img src={icon} className={classes.socialIcon} />}
            <input
              className={clsx({
                [classes.input]: true,
                [classes.tiny]: size === 'xs',
              })}
              style={{ width: width ? width : '100%' }}
              placeholder={placeholder}
              value={value.substring(0, maxLength)}
              type={type ? type : 'text'}
              onChange={(e) => {
                const eReplaced =
                  replaceMode === 'loose'
                    ? e.target.value.replace(
                        /[^A-Za-z0-9&:;|/\\?!@£$%*()_ ,-."`'[\]\n]/g,
                        ''
                      )
                    : replaceMode === 'number'
                    ? e.target.value.replace(/[^0-9'\n]/g, '')
                    : replaceMode === 'tight'
                    ? e.target.value.replace(/[^A-Za-z \-0-9]/g, '')
                    : e.target.value;
                onChangeEvent(eReplaced.substring(0, maxLength));
              }}
            />
          </Row>
        )}
      </Column>
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
