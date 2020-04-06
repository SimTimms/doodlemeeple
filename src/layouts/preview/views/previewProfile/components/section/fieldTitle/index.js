import React from 'react';
import { Typography, Icon } from '@material-ui/core';
import { useStyles } from './styles';

export function FieldTitle({ name, description, warning }) {
  const [infoOpen, setInfoOpen] = React.useState('none');
  const classes = useStyles();
  return (
    <div
      style={{
        width: '100%',
        marginTop: 20,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <div className={classes.titleLine} style={{ width: 30 }}></div>
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
            {infoOpen === 'none' ? 'keyboard_arrow_down' : 'keyboard_arrow_up'}
          </Icon>
        </div>
        <div className={classes.titleLine} style={{ width: '100%' }}></div>
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
        <Typography variant="body1" color="textPrimary">
          "{description} {warning}"
        </Typography>
        <Typography variant="body1" color="textPrimary"></Typography>
      </div>
    </div>
  );
}
