import React from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';

export default function PublicFooterMenu() {
  const classes = useStyles();
  return (
    <div className={classes.menuWrapperMobile}>
      <Link to="/register" style={{ textDecoration: 'none' }}>
        <button className={classes.button}>Register</button>
      </Link>
      <a
        href={process.env.REACT_APP_TERMS_LINK}
        style={{ textDecoration: 'none' }}
      >
        <button className={classes.button}>Terms of Service</button>
      </a>
      <a
        href={process.env.REACT_APP_PRIVACY_LINK}
        style={{ textDecoration: 'none' }}
      >
        <button className={classes.button}>Privacy Policy</button>
      </a>
      <a
        href={`mailto:${process.env.REACT_APP_INFO_EMAIL}`}
        style={{ textDecoration: 'none' }}
      >
        <button className={classes.button}>Contact</button>
      </a>
    </div>
  );
}
