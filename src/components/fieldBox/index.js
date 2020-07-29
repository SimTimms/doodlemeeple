import React from 'react';
import { Typography, Icon } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';

export default function FieldBox({
  title,
  value,
  onChangeEvent,
  maxLength,
  replaceMode,
  placeholder,
  info,
  warning,
  size,
  multiline,
}) {
  const [infoOpen, setInfoOpen] = React.useState(false);
  const classes = useStyles();
  value = value ? value : '';
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginTop: 3,
        marginBottom: 3,
      }}
    >
      <div
        style={{
          width: '100%',
          display: 'flex',
          whiteSpace: 'nowrap',
          alignItems: multiline ? 'flex-start' : 'center',
        }}
      >
        <Typography
          className={clsx({
            [classes.small]: true,
            [classes.medium]: size === 'm',
            [classes.large]: size === 'l',
          })}
        >{`${title}`}</Typography>

        {multiline ? (
          <textarea
            rows={3}
            style={{
              width: '100%',
              marginLeft: 10,
              padding: 10,
              borderRadius: 5,
              boxShadow: 'inset 3px 3px 10px rgba(0,0,0,0.05)',
              border: '1px solid #ddd',
              background: 'rgba(0,0,0,0.025)',
              outline: 'none',
              fontSize: 14,
            }}
            className={classes.root}
            placeholder={placeholder}
            value={value.substring(0, maxLength)}
            onChange={(e) => {
              const eReplaced =
                replaceMode === 'loose'
                  ? e.target.value.replace(
                      /[^A-Za-z0-9&:;|/\\?!@£$%*()_ ,-."'\n]/g,
                      ''
                    )
                  : e.target.value;
              onChangeEvent(eReplaced.substring(0, maxLength));
            }}
          />
        ) : (
          <input
            style={{
              width: '100%',
              marginLeft: 10,
              padding: 10,
              borderRadius: 5,
              boxShadow: 'inset 3px 3px 10px rgba(0,0,0,0.05)',
              border: '1px solid #ddd',
              background: 'rgba(0,0,0,0.025)',
              outline: 'none',
              fontSize: 14,
            }}
            className={classes.root}
            placeholder={placeholder}
            value={value.substring(0, maxLength)}
            onChange={(e) => {
              const eReplaced =
                replaceMode === 'loose'
                  ? e.target.value.replace(
                      /[^A-Za-z0-9&:;|/\\?!@£$%*()_ ,-."'\n]/g,
                      ''
                    )
                  : e.target.value;
              onChangeEvent(eReplaced.substring(0, maxLength));
            }}
          />
        )}
        <Typography style={{ marginLeft: 5, fontSize: 12, width: 30 }}>{`${
          maxLength - value.length
        }`}</Typography>
        <Icon
          className={classes.helpIcon}
          onClick={() => {
            infoOpen === false ? setInfoOpen(true) : setInfoOpen(false);
          }}
        >
          {infoOpen === false ? 'info' : 'keyboard_arrow_up'}
        </Icon>
      </div>
      <div
        className={clsx({
          [classes.openClose]: true,
          [classes.openCloseOff]: !infoOpen,
        })}
      >
        <Typography variant="body1" className={classes.descriptionBox}>
          {info} <br />
          {warning !== '' && <span style={{ fontWeight: 900 }}>{warning}</span>}
        </Typography>
      </div>
    </div>
  );
}
