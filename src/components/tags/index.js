import React from 'react';
import Icon from '@material-ui/core/Icon';
import { useStyles } from './styles';

export function TagsWidget({ tags, setTags, edit }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {tags.map((tag, index) => (
        <div className={classes.tagMain} key={`tag_${index}`}>
          <div className={classes.tag}>{tag}</div>
          {edit && (
            <Icon
              className={classes.tagRemove}
              onClick={() => {
                const newInviteArr = tags.filter(item => item !== tag);
                setTags(newInviteArr);
              }}
            >
              close_circle
            </Icon>
          )}
        </div>
      ))}

      {edit && (
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
      )}
    </div>
  );
}
