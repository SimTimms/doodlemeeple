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
          x: imagePosition[0] + e.screenX,
          y: imagePosition[1] + e.screenY,
        });
      }}
      onMouseUp={e => {
        setStyle([-imagePosition[0] * 5, -imagePosition[1] * 5]);
        setMouseDown(false);
      }}
      onMouseLeave={e => {
        setStyle([-imagePosition[0] * 5, -imagePosition[1] * 5]);
        setMouseDown(false);
      }}
      onMouseMove={e => {
        if (mouseDown) {
          setImagePosition([origin.x - e.screenX, origin.y - e.screenY]);
        }
      }}
    >
      <Icon style={{ fontSize: 20 }}>
        {mouseDown ? 'control_camera' : 'touch_app'}
      </Icon>
    </Button>
  );
}
