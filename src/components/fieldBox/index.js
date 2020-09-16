import React from 'react';
import { Typography, Icon } from '@material-ui/core';
import { useStyles } from './styles';
import { CurrencySelector } from '../';
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
    titlePos,
    width,
  } = props;
  value = value ? value : '';
  return (
    <div className={classes.one} style={{ width: width ? '' : '100%' }}>
      <div
        className={classes.two}
        style={{
          alignItems: multiline ? 'flex-start' : 'center',
        }}
      >
        {(!titlePos || titlePos === 'left') && (
          <Typography
            className={clsx({
              [classes.tiny]: size === 'xs',
              [classes.small]: true,
              [classes.medium]: size === 'm',
              [classes.large]: size === 'l',
            })}
            style={{ display: title === '' ? 'none' : '' }}
          >{`${title}`}</Typography>
        )}

        {multiline ? (
          <textarea
            rows={3}
            className={classes.root}
            placeholder={placeholder}
            value={value.substring(0, maxLength)}
            onChange={(e) => {
              const eReplaced =
                replaceMode === 'loose'
                  ? e.target.value.replace(
                      /[^A-Za-z0-9&:;|/\\?!@£$%*()_ ,-."`'\[\]\n]/g,
                      ''
                    )
                  : e.target.value;

              onChangeEvent(eReplaced.substring(0, maxLength));
            }}
          />
        ) : replaceMode === 'currency' ? (
          <CurrencySelector
            selectedCurrency={value}
            onChangeEvent={onChangeEvent}
          />
        ) : (
          <input
            className={clsx({
              [classes.root]: true,
              [classes.tiny]: size === 'xs',
            })}
            style={{ width: width ? width : '100%' }}
            placeholder={placeholder}
            value={value.substring(0, maxLength)}
            onChange={(e) => {
              const eReplaced =
                replaceMode === 'loose'
                  ? e.target.value.replace(
                      /[^A-Za-z0-9&:;|/\\?!@£$%*()_ ,-."'\n]/g,
                      ''
                    )
                  : replaceMode === 'number'
                  ? e.target.value.replace(/[^0-9'\n]/g, '')
                  : e.target.value;
              onChangeEvent(eReplaced.substring(0, maxLength));
            }}
          />
        )}

        {maxLength > 0 && titlePos !== 'right' && (
          <Typography style={{ marginLeft: 5, fontSize: 12, width: 30 }}>{`${
            maxLength - value.length
          }`}</Typography>
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
        {titlePos === 'right' && (
          <Typography
            style={{ marginLeft: 5 }}
            className={clsx({
              [classes.tiny]: size === 'xs',
              [classes.small]: true,
              [classes.medium]: size === 'm',
              [classes.large]: size === 'l',
            })}
          >{`${title}`}</Typography>
        )}
      </div>
      <div
        className={clsx({
          [classes.openClose]: true,
          [classes.openCloseOff]: !infoOpen,
        })}
      >
        <Typography variant="body1" className={classes.descriptionBox}>
          {info} <br />
          <br />
          {warning !== '' && <span style={{ fontWeight: 900 }}>{warning}</span>}
        </Typography>
      </div>
    </div>
  );
}
