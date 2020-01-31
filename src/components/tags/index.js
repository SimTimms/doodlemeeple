import React from 'react';
import Icon from '@material-ui/core/Icon';
import { useStyles } from './styles';

export function TagsWidget({ tags }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {tags.map((tag, index) => (
        <div className={classes.tag} key={`tag_${index}`}>
          {tag}
        </div>
      ))}

      <div className={classes.tagAdd}>
        <Icon style={{ fontSize: 50, color: '#fff' }}>add_circle</Icon>
      </div>
    </div>
  );
}
