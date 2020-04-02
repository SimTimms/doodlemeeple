import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

function StyledFooter(props) {
  const { classes } = props;
  return <div className={clsx(classes.root)}>{props.children}</div>;
}

const Footer = withStyles({
  root: {
    background: '#222',
    padding: 10,
  },
})(StyledFooter);

export default Footer;
