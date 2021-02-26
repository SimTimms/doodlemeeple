import React from 'react';
import { Button, Icon, Zoom, Typography } from '@material-ui/core';
import { Column, Row } from '../../../components';
import { useStyles } from './styles';
import clsx from 'clsx';
import playSound from '../../../utils/playSound';

function ButtonObj({ ...props }) {
  const classes = useStyles();
  const {
    disabled,
    onClickEvent,
    icon,
    title,
    subTitle,
    color,
    styleOverride,
    type,
    clickSound,
    likeSound,
  } = props.props;

  return (
    <Button
      type={type}
      className={clsx({
        [classes.taskRoot]: true,
        [classes.primary]: color === 'primary',
        [classes.secondary]: color === 'secondary',
        [classes.warning]: color === 'warning',
      })}
      disabled={disabled}
      onClick={() => {
        clickSound && playSound('click');
        likeSound && playSound('like');
        onClickEvent();
      }}
      style={styleOverride && styleOverride}
    >
      <Column>
        <Row j="flex-end" a="center">
          <Icon
            className={clsx({
              [classes.taskIcon]: true,
            })}
          >
            {icon}
          </Icon>
          <Typography className={classes.taskSubTitle}>{subTitle}</Typography>
        </Row>
        <Typography className={classes.taskTitle}>{title}</Typography>
      </Column>
    </Button>
  );
}
export default function TaskButton(props) {
  const { zoom } = props;
  return zoom ? (
    <Zoom in={true} timeout={500}>
      <div>
        <ButtonObj props={props} />
      </div>
    </Zoom>
  ) : (
    <ButtonObj props={props} />
  );
}
