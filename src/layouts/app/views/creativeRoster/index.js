import React from 'react';
import { Slide } from '@material-ui/core';
import { useStyles } from './styles';
import { LoadIcon } from '../../../../components';
import { Creatives } from './components';

export default function CreativeRoster({ theme, history, favourites }) {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);

  return loading ? (
    <LoadIcon />
  ) : (
    <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <div className={classes.root}>
        <div style={{ width: '100%', marginTop: 50 }}>
          <Creatives history={history} favourites={favourites} />
        </div>
      </div>
    </Slide>
  );
}
