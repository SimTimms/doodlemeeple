import React from 'react';
import Icon from '@material-ui/core/Icon';
import { useStyles } from './styles';

export function TagsWidget({ tags, setTags }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {tags.map((tag, index) => (
        <div className={classes.tagMain}>
          <div className={classes.tag} key={`tag_${index}`}>
            {tag}
          </div>
          <Icon
            className={classes.tagRemove}
            onClick={() => {
              const newInviteArr = tags.filter(item => item !== tag);
              setTags(newInviteArr);
            }}
          >
            close_circle
          </Icon>
        </div>
      ))}

      <div className={classes.tagAdd}>
        <Icon
          style={{ fontSize: 50, color: '#fff' }}
          onClick={() => {
            const newArr = [
              ...tags,
              `Fantasy ${Math.floor(Math.random() * 100)}`,
            ];
            setTags(newArr);
          }}
        >
          add_circle
        </Icon>
      </div>
    </div>
  );
}
