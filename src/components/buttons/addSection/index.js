import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import { useStyles } from './styles';
export function AddSection({ onClickEvent }) {
  const classes = useStyles();

  return (
    <div>
      <CardContent className={classes.root} onClick={() => onClickEvent()}>
        <Icon style={{ fontSize: 50, color: '#fff' }}>add_circle</Icon>
        <Typography
          color="textSecondary"
          component="p"
          style={{ fontSize: 24, color: '#fff', marginLeft: 10 }}
        >
          Add a Skill
        </Typography>
      </CardContent>
      <div className={classes.skillWrapper}>
        <Icon style={{ fontSize: 50, color: '#333' }}>collections</Icon>
        <Typography color="textSecondary" component="p">
          Digital Artist{' '}
        </Typography>
      </div>
    </div>
  );
}
