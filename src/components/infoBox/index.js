import React from 'react';
import { Typography, Icon } from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';

export default function InfoBox({ name, description, warning, inline }) {
  const [infoOpen, setInfoOpen] = React.useState(false);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Icon
        className={classes.helpIcon}
        onClick={() => {
          infoOpen === false ? setInfoOpen(true) : setInfoOpen(false);
        }}
      >
        {infoOpen === false ? 'info' : 'chevron_left'}
      </Icon>
      <div
        className={clsx({
          [classes.openClose]: true,
          [classes.openCloseOff]: !infoOpen,
        })}
        style={{}}
      >
        <Typography variant="body1" className={classes.descriptionBox}>
          {description}
        </Typography>
        {warning !== '' && (
          <Typography variant="body1" className={classes.descriptionBox}>
            {warning}
          </Typography>
        )}
      </div>
    </div>
  );
}
