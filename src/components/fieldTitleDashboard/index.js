import React from 'react';
import { Typography, Icon } from '@material-ui/core';
import { useStyles } from './styles';

export default function FieldTitleDashboard({ name, inline }) {
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
          <Typography variant="h6" noWrap={true} className={classes.title}>
            {name}
          </Typography>
        </div>
        {!inline && (
          <div className={classes.titleLine} style={{ width: '100%' }}></div>
        )}
      </div>
    </div>
  );
}
