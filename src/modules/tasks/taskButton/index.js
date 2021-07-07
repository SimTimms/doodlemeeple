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
      })}
      disabled={disabled}
      onClick={() => {
        clickSound && playSound('click');
        likeSound && playSound('like');
        onClickEvent();
      }}
      style={styleOverride && styleOverride}
    >
      <Column j="space-between">
        <div
          className={clsx({
            [classes.primary]: color === 'primary',
            [classes.secondary]: color === 'secondary',
            [classes.warning]: color === 'warning',
            [classes.grey]: color === 'grey',
            [classes.blue]: color === 'blue',
          })}
          style={{
            width: '100%',
            borderRadius: '3px 3px 0 0',
            padding: 3,
            boxSizing: 'border-box',
          }}
        >
          <Row j="flex-start" a="center" bg="primary">
            <Icon
              className={clsx({
                [classes.taskIcon]: true,
              })}
            >
              {icon}
            </Icon>
            <Typography
              className={clsx({
                [classes.taskSubTitle]: true,
              })}
            >
              {subTitle}
            </Typography>
          </Row>
        </div>
        <Typography className={classes.taskTitle}>{title}</Typography>
      </Column>
    </Button>
  );
}
export default function TaskButton(props) {
  const { zoom } = props;
  return zoom ? (
    <Zoom in={true} timeout={500}>
      <div style={{ width: '100%', textAlign: 'center' }}>
        <ButtonObj props={props} />
      </div>
    </Zoom>
  ) : (
    <ButtonObj props={props} />
  );
}
