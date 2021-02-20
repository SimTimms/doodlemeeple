import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';

export function Header({ str }) {
  const classes = useStyles();
  return (
    <Typography
      variant="h3"
      style={{ textAlign: 'center', width: '100%' }}
      className={classes.title}
    >
      {str}
    </Typography>
  );
}

export function SubHeader({ str }) {
  const classes = useStyles();
  return (
    <Typography
      variant="body1"
      style={{ textAlign: 'center' }}
      className={classes.subTitle}
    >
      {str}
    </Typography>
  );
}

export function HeaderTwo({ str }) {
  const classes = useStyles();
  return (
    <div className={classes.headerWrapper}>
      <div className={classes.headerLine}></div>
      <Typography variant="h6" className={classes.descriptionTitle}>
        {str}
      </Typography>
      <div className={classes.headerLine}></div>
    </div>
  );
}

export function HeaderThree({ str }) {
  const classes = useStyles();
  return (
    <div className={classes.headerWrapper}>
      <div className={classes.headerLineTwo}></div>
      <Typography variant="h6" className={classes.descriptionTitleTwo}>
        {str}
      </Typography>
      <div className={classes.headerLineTwo}></div>
    </div>
  );
}
export function Text({ str, ...props }) {
  const { a } = props;
  const classes = useStyles();
  return (
    <Typography
      variant="body1"
      className={classes.description}
      style={{ textAlign: a ? a : 'center' }}
    >
      {str}
    </Typography>
  );
}

export function TextLeft({ str }) {
  const classes = useStyles();
  return (
    <Typography variant="body1" className={classes.descriptionLeft}>
      {str}
    </Typography>
  );
}

export function TextArray({ str }) {
  const classes = useStyles();
  return <div className={classes.description}>{str}</div>;
}

export function TextLink({ str, onClickEvent }) {
  const classes = useStyles();
  return (
    <Typography
      variant="body1"
      className={classes.descriptionLink}
      onClick={() => onClickEvent()}
    >
      {str}
    </Typography>
  );
}

export function Meta(props) {
  const { str, children } = props;
  const classes = useStyles();
  return str ? (
    <Typography variant="body1" className={classes.meta}>
      {str}
    </Typography>
  ) : (
    children
  );
}

export function TextDivider() {
  const classes = useStyles();
  return <div className={classes.headerLine} style={{ marginTop: 20 }}></div>;
}

export function ColumnWrapper({ children }) {
  const classes = useStyles();
  return <div className={classes.columnWrapper}>{children}</div>;
}

export function ColumnWrapperFull({ children }) {
  const classes = useStyles();
  return (
    <div className={`${classes.columnWrapper} ${classes.columnWrapperFull}`}>
      {children}
    </div>
  );
}
