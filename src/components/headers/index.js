import React from 'react';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import { useStyles } from './styles';

function CardHeader({ title }) {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Typography gutterBottom variant="h5">
        {title}
      </Typography>
      <Icon className={classes.icon}>edit</Icon>
    </div>
  );
}

export default CardHeader;
