import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';
import RegisterCard from '../views/registerCard';
import { Content, StyledNavBar } from '../components';
import clsx from 'clsx';
import logo from '../assets/logo.svg';

function RegisterLayout() {
  const classes = useStyles();
  return (
    <div>
      <StyledNavBar className={null}>
        <img src={logo} />
        <Typography variant="h6" noWrap>
          Register
        </Typography>
      </StyledNavBar>
      <Content>
        <RegisterCard />
      </Content>
    </div>
  );
}

export default RegisterLayout;
