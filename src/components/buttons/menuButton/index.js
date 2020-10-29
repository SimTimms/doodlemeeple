import React from 'react';
import {
  ListItem,
  ListItemIcon,
  Typography,
  ListItemText,
} from '@material-ui/core';
import { useStyles } from './styles';
import clsx from 'clsx';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function MenuButton({ text, onClickEvent }) {
  const mobile = useMediaQuery('(max-width:800px)');
  const classes = useStyles();

  return (
    <div
      className={classes.link}
      key={text.name}
      onClick={() => {
        onClickEvent();
      }}
    >
      <ListItem button style={{ paddingLeft: 5, paddingRight: 5 }}>
        <div
          className={clsx({
            [classes.iconButton]: true,
            [classes.iconButtonOnly]: text.name === '',
          })}
          style={{
            background: text.color,
            border: `1px solid ${text.color}`,
          }}
        >
          <ListItemIcon
            className={clsx({
              [classes.iconIcon]: true,
              [classes.dark]: text.color === 'white',
            })}
          >
            {text.icon}
          </ListItemIcon>
          {text.count !== null && text.count > 0 && (
            <Typography
              variant="body1"
              component="p"
              className={classes.countsStyle}
            >
              {text.count > 9 ? '9+' : text.count}
            </Typography>
          )}
        </div>
        <ListItemText
          primary={text.name}
          className={clsx({
            [classes.button]: !mobile,
          })}
        />
      </ListItem>
    </div>
  );
}
