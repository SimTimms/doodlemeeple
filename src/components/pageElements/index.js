import React from 'react';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';

function ErrorBox({ errorMsg }) {
  const classes = useStyles();

  return errorMsg === null ? null : (
    <div className={classes.root}>
      <Icon color="error">error_outline</Icon>
      <Typography
        gutterBottom
        variant="body1"
        component="p"
        className={classes.errorMsg}
      >
        {errorMsg}
      </Typography>
    </div>
  );
}

export default ErrorBox;
