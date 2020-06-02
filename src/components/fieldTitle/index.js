import React from 'react';
import { Typography, Icon } from '@material-ui/core';
import { useStyles } from './styles';

export default function FieldTitle({ name, description, warning, inline }) {
  const [infoOpen, setInfoOpen] = React.useState('none');
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <div className={classes.titleLine} style={{ minWidth: 30 }}></div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            paddingRight: 10,
            paddingLeft: 10,
          }}
          onClick={() =>
            infoOpen === 'block' ? setInfoOpen('none') : setInfoOpen('block')
          }
        >
          <Typography variant="h6" color="textPrimary" noWrap={true}>
            {name}
          </Typography>
          <Icon className={classes.helpIcon}>
            {infoOpen === 'none' ? 'info' : 'keyboard_arrow_up'}
          </Icon>
        </div>
        {!inline && (
          <div className={classes.titleLine} style={{ width: '100%' }}></div>
        )}
      </div>
      <div
        style={{
          display: infoOpen,
          background: '#fff',
          border: '1px solid #ddd',
          borderRadius: 5,
          padding: 10,
          margin: 10,
          boxShadow: '5px 5px 5px rgba(0,0,0,0.05)',
        }}
      >
        <Typography variant="body1" className={classes.descriptionBox}>
          {description}
        </Typography>
        {warning !== '' && (
          <Typography variant="body1" className={classes.infoBox}>
            {warning}
          </Typography>
        )}
      </div>
    </div>
  );
}
