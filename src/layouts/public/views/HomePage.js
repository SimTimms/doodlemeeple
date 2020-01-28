import React from 'react';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import boxes from '../../../assets/boxes.jpg';
import { withStyles } from '@material-ui/core/styles';

function HomePageStyled(props) {
  const { classes, setPage } = props;
  return (
    <div className={clsx(classes.background)}>
      <Typography color="textSecondary" gutterBottom></Typography>
    </div>
  );
}

export const HomePage = withStyles({
  root: {},
  background: {
    backgroundImage: `url(${boxes})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    width: '100%',
    height: 400,
  },
})(HomePageStyled);
