import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { useStyles } from './styles';

export function ImagePos({ imagePosition, setImagePosition, setStyle }) {
  const [mouseDown, setMouseDown] = React.useState(false);
  const [origin, setOrigin] = React.useState({ x: 0, y: 0 });
  const classes = useStyles();

  return (
    <Button
      className={classes.root}
      onMouseDown={e => {
        setMouseDown(true);
        setOrigin({
          x: imagePosition.x + e.screenX,
          y: imagePosition.y + e.screenY,
        });
      }}
      onMouseUp={e => {
        setStyle([imagePosition.x, imagePosition.y]);
        setMouseDown(false);
      }}
      onMouseLeave={e => {
        setStyle([imagePosition.x, imagePosition.y]);
        setMouseDown(false);
      }}
      onMouseMove={e => {
        if (mouseDown) {
          setImagePosition({
            x: origin.x - e.screenX,
            y: origin.y - e.screenY,
          });
        }
      }}
    >
      <Icon style={{ fontSize: 20 }}>
        {mouseDown ? 'control_camera' : 'touch_app'}
      </Icon>
    </Button>
  );
}
