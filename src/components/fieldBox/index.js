import React from 'react';
import { Typography, Icon } from '@material-ui/core';
import { useStyles } from './styles';
import { CurrencySelector, Column, Row } from '../';
import clsx from 'clsx';
import InputLabel from './inputLabel';
export default function FieldBox({ title, value, onChangeEvent, ...props }) {
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
          <InputLabel
            title={title}
            icon={icon}
            value={value}
            maxLength={maxLength}
            info={info}
            warning={warning}
            icon={icon}
          />
        </div>
        {multiline ? (
          <Row>
            {icon && <img src={icon} className={classes.socialIcon} alt="" />}
            <textarea
              rows={3}
              className={classes.input}
              placeholder={placeholder}
              value={value.substring(0, maxLength)}
              onChange={(e) => {
                const eReplaced =
                  replaceMode === 'loose'
                    ? e.target.value.replace(
                        /[^A-Za-z0-9&:;|/\\?!@=£$%*()_ ,-."`'[]\n]/g,
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
            {icon && <img src={icon} className={classes.socialIcon} alt="" />}
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
                        /[^A-Za-z0-9&:;|/\\?!@=£$%*()_ ,-."`'[\]\n]/g,
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
    </Column>
  );
}
